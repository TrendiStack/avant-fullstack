const UserDataDisplay = ({ header, data }) => {
  return (
    <div className="bg-slate-200 dark:bg-zinc-900 dark:text-white py-4 rounded-xl indent-3 duration-700 ">
      <h3 className="text-slate-600 dark:text-zinc-400 duration-700">
        {header}
      </h3>
      <p>{data}</p>
    </div>
  );
};

export default UserDataDisplay;
