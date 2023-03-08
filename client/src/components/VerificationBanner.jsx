import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IoIosClose } from 'react-icons/io';
import Layout from './Layout';

export const VerificationBanner = () => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(user?.isVerified);

  return (
    <>
      {user && show === false && (
        <div className="bg-red-500 relative z-50">
          <Layout className="text-xs md:text-md lg:text-base flex items-center justify-between w-full py-1">
            <p>
              You are not verified. Please check your email to verify your
              account.
            </p>
            <IoIosClose
              className="text-2xl cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </Layout>
        </div>
      )}
    </>
  );
};
