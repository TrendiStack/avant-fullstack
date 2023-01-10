import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crossingVideo from '../assets/videos/shibuya crossing.mp4';
import laMusica from "../assets/sounds/Falkor's Return.mp3";

const Landing = () => {
  const musicRef = useRef(null);

  const navigate = useNavigate();
  const [musicPlayer, setMusicPlayer] = useState(false);

  const enterSite = () => {
    musicRef.current.pause();
    setMusicPlayer(false);
    navigate('/home');
  };

  const handleMusic = () => {
    if (musicPlayer) {
      musicRef.current.pause();
      setMusicPlayer(false);
    } else {
      musicRef.current.play();
      setMusicPlayer(true);
    }
  };

  useEffect(() => {
    const handleMusic = e => {
      if (e.key === ' ') {
        if (musicPlayer) {
          musicRef.current.pause();
          setMusicPlayer(false);
        } else {
          musicRef.current.play();
          setMusicPlayer(true);
        }
      }
    };

    const hanldeMusicOnLoad = () => {
      musicPlayer ? musicRef.current.play() : musicRef.current.pause();
    };
    // Set music volume to 0.1
    musicRef.current.volume = 0.1;
    window.addEventListener('keydown', handleMusic);
    // Remove scroll on this page only
    document.body.style.overflow = 'hidden';
    hanldeMusicOnLoad();
    return () => {
      window.removeEventListener('keydown', handleMusic);
      document.body.style.overflow = 'unset';
    };
  }, [musicPlayer]);

  return (
    <div className="cursor-pointer">
      <div onClick={enterSite} className="absolute w-full h-screen z-30" />
      <div className="absolute z-50">
        {musicPlayer ? (
          <GiSpeaker
            className="text-4xl text-white animate-pulse"
            onClick={handleMusic}
          />
        ) : (
          <GiSpeakerOff className="text-4xl text-white" onClick={handleMusic} />
        )}
      </div>
      <audio ref={musicRef} src={laMusica} autoPlay loop></audio>
      <div
        dangerouslySetInnerHTML={{
          __html: `<video
          class="w-full h-screen object-cover grayscale pointer-events-none"
          autoplay
          muted
          loop 
          id="myVideo"
          playsinline
          >
          <source src="${crossingVideo}" type="video/mp4">
          </video>`,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>
      <h1 className="text-6xl w-full text-center text-neutral-400 tracking-widest font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        AVANT
      </h1>
    </div>
  );
};

export default Landing;
