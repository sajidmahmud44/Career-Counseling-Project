import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate(); 
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        setEmailError("");
  setPasswordError("");
  if (!email.includes("@")) {
    setEmailError("Email must contain '@'");
    return;
  }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (!passwordRegex.test(password)) {
    setPasswordError("Password must be at least 6 characters and include both uppercase and lowercase letters.");
    return;
  }
        createNewUser(email,password).then((result) =>{
            const user = result.user;
            setUser(user)
            updateUserProfile({displayName
:name , photoURL : photo}).then(()=>{
  navigate('/')
}).catch((err)=>{
  console.log(err);
})
            
        })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-white">
  <div className="card w-full max-w-lg shadow-xl rounded-xl border border-gray-200 bg-white p-10">
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        Register your account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label text-green-900 font-medium">Name</label>
          <input
          name="name"
            type="text"
            className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="label text-green-900 font-medium">Photo URL</label>
          <input
          name="photo"
            type="text"
            className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="Photo"
          />
        </div>
        <div>
          <label className="label text-green-900 font-medium">Email</label>
          <input
          name="email"
            type="email"
            className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="you@example.com"
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        <div className="relative">
  <label className="label text-green-900 font-medium">Password</label>
  <input
    name="password"
    type={showPassword ? "text" : "password"}
    className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 pr-10 py-2 px-3"
    placeholder="••••••••"
  />
  

  <button
    type="button"
    onClick={() => setshowPassword(!showPassword)}
    className="absolute right-3 top-[70%] translate-y-[-50%] text-gray-700 hover:text-gray-800 z-10"
  >
    {
      showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
    }
  </button>
</div>
{passwordError && (
    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
  )}


        <button className="btn bg-green-700 hover:bg-green-800 text-white font-semibold w-full rounded-lg">
          Register
        </button>
      </form>

      <p className="text-center text-green-800 mt-6">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-700 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>
</div>

    );
};

export default Register;