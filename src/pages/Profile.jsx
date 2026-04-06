import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import MyBookings from './MyBookings';

const Profile = () => {
  const [profileUser, setProfileUser] = useState(null);
  const { isLoading, isLoggedIn, currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function getProfileUser() {
      //To avoid axios request while loading is not finished
      if (!currentUser) return;
      try {
        //Get the token for verification
        const theToken = localStorage.getItem('authToken');
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${currentUser._id}`,
          {
            headers: { Authorization: `Bearer ${theToken}` },
          }
        );
        setProfileUser(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProfileUser();
  }, [currentUser]);

  // Handle the loading state so it doesn't crash on first render
  if (isLoading || !profileUser) {
    return <div className="p-10 text-center">Loading Profile...</div>;
  }

  return (
    <div className="profile-layout">
      <div className="p-8  min-h-screen">
        <div className="profile-main">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="text-md font-bold text-slate-800">
                🐾 Welcome back to Pawbnb, {profileUser.username}!
              </p>
            </div>
            <p className="text-slate-500 mt-2">Email: {profileUser.email}</p>
          </div>
        </div>
        <div className="bookings-div">
          <MyBookings />
        </div>
      </div>
    </div>
  );
};
export default Profile;

//   return (
//     <div className="profile-layout">
//       <div className="p-8 bg-gray-50 min-h-screen">
//         <div className="profile-main">
//           <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
//             <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
//               <p className="text-teal-700 font-medium">
//                 🐾 Welcome back {profileUser.username} to Pawbnb!
//               </p>
//             </div>
//             <h1 className="text-3xl font-extrabold text-slate-800">
//               {profileUser.username} Profile
//             </h1>
//             <p className="text-slate-500 mt-2">Email: {profileUser.email}</p>
//             <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
//               <p className="text-teal-700 font-medium">
//                 🐾 Welcome back to Pawbnb!
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="bookings-div">
//           <MyBookings />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Profile;
