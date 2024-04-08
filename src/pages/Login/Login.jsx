import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation,useNavigate } from 'react-router-dom';


const Login = () => {
  const {signInUser}=useContext(AuthContext); 
  const location=useLocation();
  const navigate=useNavigate();  
    const handleLogin=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
          console.log(result.user);
          navigate(location?.state?location.state:'/');
        })
        .catch(error=>{
          console.log(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center mb-5">
        <p>Do not have an account? <Link className="text-red-700 font-bold" to="/register">Register</Link></p>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;