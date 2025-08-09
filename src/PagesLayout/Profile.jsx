import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/provider/AuthProvider';
import usericon from "../assets/user.png"

const Profile = () => {
    const {user,updateUserProfile} = useContext(AuthContext);
const [success, setSuccess] = useState("");
    const handleUpdate = (e) =>{
      e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        console.log(name,photo);

        updateUserProfile({displayName
:name , photoURL : photo}).then(()=>{
  setSuccess("Profile updated successfully!");
}).catch((err)=>{
  console.log(err);
  setSuccess("Failed to update profile.");
})}
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 via-white to-green-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900
 p-6 text-center text-white">
          <div className="flex justify-center">
            {user && user?.email ? (
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                src={user?.photoURL || usericon}
                alt={user?.displayName || "User"}
                title={user?.displayName}
              />
            ) : (
              <img
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                src={usericon}
                alt="User"
              />
            )}
          </div>
          <h2 className="text-2xl font-bold mt-4">{user?.displayName}</h2>
          <p className="text-green-100 text-sm">{user?.email}</p>
        </div>

        {/* Update Form */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Update Your Information
          </h3>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Photo URL"
              />
            </div>

            <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300">
              Save Changes
            </button>
          </form>

          {success && (
            <p className="mt-4 text-green-700 bg-green-50 p-2 rounded-lg text-center border border-green-200">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
    );
};

export default Profile;