
import { useState } from "react";
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("Userone@123.in");
  const [password, setPassword ] =useState("Userone@123");

  const login = ()=>{
    axios.post('http://localhost:3000/login',{
      emailId:email,
      password: password
    }, {
      withCredentials: true
    });
  }

  return (

    <div className="card bg-base-100 m-auto w-96 shadow-sm">

    <div className="card-body text-center">
      <h2 className="card-title justify-center">Login</h2>
      <label className="label">Email</label>
      <input type="email" className="input" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="input" placeholder="Password" />
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={login}>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Login