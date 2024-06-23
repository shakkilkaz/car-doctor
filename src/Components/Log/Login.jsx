import React, { useContext } from "react";
import Navbar from "../../Page/Navbar/Navbar";
import logo from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { FaFacebook ,FaLinkedin  } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Auth/AuthProvider";


const Login = () => {
  const {signIn} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero  min-h-screen px-10 py-10 mt-10 bg-base-200">
        <div className=" grid grid-cols-1 lg:grid-cols-2  gap-32 mt-10">
        <img src={logo}alt="" />
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                <h2 className="text-3xl font-semibold">Please Login....</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-10 font-semibold text-xl">Can You First <Link to='/register'><span className="text-red-500">Register</span></Link></p>
            <div className="flex justify-center gap-5 mb-5 text-3xl">
            <FaFacebook to='/' className="text-blue-600"></FaFacebook>
            <FaLinkedin to='/' className="text-blue-500"></FaLinkedin>
            <FcGoogle></FcGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
