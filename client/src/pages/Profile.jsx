import ProfilePic from '../components/profile/ProfilePic';
import UserDataDisplay from '../components/profile/UserDataDisplay';
import Layout from '../components/Layout';

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem('data')).user;

  return (
    <Layout>
      <div className="flex flex-col font-medium gap-5">
        <div className="flex flex-col items-center gap-3">
          <ProfilePic data={userData.firstName[0]} />
          <p className="cursor-pointer">Change profile picture</p>
        </div>
        <div className="flex flex-col gap-3 ">
          <UserDataDisplay header="First Name" data={userData.firstName} />
          <UserDataDisplay header="Last Name" data={userData.lastName} />
          <UserDataDisplay header="Username" data={userData.username} />
          <UserDataDisplay header="Email" data={userData.email} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
