
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const {userLogin,setUser,googleLogin}= useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [error,setError]= useState({});
  const [showPassword, setshowPassword] = useState(false);
  console.log(location);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    userLogin(email,password).then((result)=>{
        const user = result.user;
        setUser(user);
        toast.success("Login Successful....Welcome")
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
    })
    .catch((err) => {
    setError({...error, login: err.code})
    toast.error("Login failed: " + err.message);
  });
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Google login successful!");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.error("Google login failed: " + err.message);
      });
  };

    return (
        <div className="min-h-screen flex justify-center items-center bg-white">
  <div className="card w-full max-w-lg shadow-xl rounded-xl border border-gray-200 bg-white p-10">
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label text-green-900 font-medium">Email</label>
          <input
          name='email'
            type="email"
            className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="you@example.com"
          />
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
        {
          error.login && (<label className="label text-red-500 font-medium">
            {error.login}
          </label>)
        }

        <div className="flex justify-end">
          <a className="text-sm text-green-600 hover:underline cursor-pointer">
            Forgot password?
          </a>
        </div>

        <button className="btn bg-green-700 hover:bg-green-800 text-white font-semibold w-full rounded-lg">
          Login
        </button>
      </form>
{/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 px-4 w-full hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-2xl" />
            <span className="font-medium text-gray-700">Continue with Google</span>
          </button>
      <p className="text-center text-green-800 mt-6">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-red-700 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  </div>
  {/* Toast Container */}
  <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
  ></ToastContainer>
</div>


    );
};

export default Login;