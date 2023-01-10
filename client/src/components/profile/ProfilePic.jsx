const ProfilePic = ({ data }) => {
  return (
    <div className="flex justify-center items-center text-5xl bg-slate-200 dark:bg-zinc-900 text-slate-600 dark:text-white h-28 w-28 rounded-full duration-500">
      <p>{data}</p>
    </div>
  );
};

export default ProfilePic;
