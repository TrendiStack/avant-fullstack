const ProfilePic = ({ url, name }) => {
  return (
    <div className="flex justify-center items-center text-5xl bg-slate-200 dark:bg-zinc-900 text-slate-600 dark:text-white h-28 w-28 rounded-full duration-500 overflow-hidden ">
      {url.length < 1 ? (
        <p>{name.slice(0, 1)}</p>
      ) : (
        <img className="h-full w-full object-cover" src={url} alt={url} />
      )}
    </div>
  );
};

export default ProfilePic;
