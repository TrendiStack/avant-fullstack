import { AiOutlineLoading } from 'react-icons/ai';

export const LoadingIcon = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <AiOutlineLoading className="animate-spin-slow text-3xl text-blue-500" />
    </div>
  );
};
