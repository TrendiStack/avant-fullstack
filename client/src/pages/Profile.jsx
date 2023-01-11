import ProfilePic from '../components/profile/ProfilePic';
import UserDataDisplay from '../components/profile/UserDataDisplay';
import Layout from '../components/Layout';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <div className="flex flex-col font-medium gap-5">
        <div className="flex flex-col items-center gap-3">
          <ProfilePic data={user.firstName[0]} />
          <p className="cursor-pointer">Change profile picture</p>
        </div>
        <div className="flex flex-col gap-3 ">
          <UserDataDisplay header="First Name" data={user.firstName} />
          <UserDataDisplay header="Last Name" data={user.lastName} />
          <UserDataDisplay header="Username" data={user.username} />
          <UserDataDisplay header="Email" data={user.email} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
