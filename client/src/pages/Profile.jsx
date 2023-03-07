import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';
import Layout from '../components/Layout';
import ProfilePic from '../components/profile/ProfilePic';
import UserDataDisplay from '../components/profile/UserDataDisplay';

const Profile = () => {
  const { user, setFile, uploadFile } = useContext(AuthContext);
  const [showUpload, setShowUpload] = useState(true);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  return (
    <Layout>
      <div className="flex flex-col font-medium gap-5">
        <div className="flex flex-col items-center gap-3">
          <ProfilePic url={user.profilePic} name={user.firstName} />
          <form onSubmit={uploadFile}>
            {showUpload ? (
              <button onClick={() => setShowUpload(false)}>
                Change Profile Pic
              </button>
            ) : (
              <>
                <label className="cursor-pointer mr-10">
                  Change profile picture
                  <input
                    onChange={handleChange}
                    type="file"
                    name="image"
                    className="hidden"
                  />
                </label>

                <button onClick={() => setShowUpload(false)} type="submit">
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
        <div className="flex flex-col gap-3 ">
          <UserDataDisplay verification />
          <UserDataDisplay form header="First Name" data={user.firstName} />
          <UserDataDisplay form header="Last Name" data={user.lastName} />
          <UserDataDisplay form header="Username" data={user.username} />
          <UserDataDisplay form header="Email" data={user.email} />
          <UserDataDisplay />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
