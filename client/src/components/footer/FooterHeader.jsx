import { useLocation, useNavigate } from 'react-router-dom';

const FooterHeader = ({ name, className }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleScroll = () => {
    if (pathname === '/home') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/home');
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }, 500);
    }
  };

  return (
    <h1
      onClick={handleScroll}
      className={`${className} text-xl font-bold cursor-pointer`}
    >
      {name}
    </h1>
  );
};

export default FooterHeader;
