import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = ({
  setEmail,
  email,
  password,
  setPassword,
  name,
  setName,
  SubmitLogin,
  gotoSignup
}) => {
  const navigate=useNavigate()
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-title">Login</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="login-input"
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            SubmitLogin(email, password, name);
          }}
          className="login-button"
        >
          Login
        </button>

        <p className="login-footer">
          Don’t have an account?{' '}
          <span onClick={()=>{
            navigate('/signup')
          }}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};
