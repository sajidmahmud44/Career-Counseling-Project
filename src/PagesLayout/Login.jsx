
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';

const Login = () => {
  const {userLogin,setUser}= useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [error,setError]= useState({});
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
        navigate(location?.state ? location.state : "/")
    })
    .catch((err) => {
    setError({...error, login: err.code})
  });
  }
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

        <div>
          <label className="label text-green-900 font-medium">Password</label>
          <input
          name='password'
            type="password"
            className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="••••••••"
          />
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

      <p className="text-center text-green-800 mt-6">
        Don’t have an account?{" "}
        <Link to="/auth/register" className="text-green-700 font-semibold hover:underline">
          Register
        </Link>
      </p>
    </div>
  </div>
</div>


    );
};

export default Login;