import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/config';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  // const [avatar, setAvatar] = useState('');
  const nav = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    const userToSignup = { username, name, email, password, role };

    try {
      const createdUser = await axios.post(
        `${API_URL}/auth/signup`,
        userToSignup
      );
      console.log('Success!', createdUser);
      nav('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen gap-6 my-4">
        <div className="bg-surface px-32 py-2 rounded-2xl shadow-lg">
          <h1 className="font-bold text-center text-xl mb-4">Create account</h1>
          <p className="text-center text-sm mb-4">
            Sign up to get started with your adventures
          </p>
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSignup}>
              <div className="bg-surface px-32 py-2 rounded-2xl shadow-lg">
                <label className="my-0 login-label">
                  Username:
                  <input
                    className="my-0 login-input"
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </label>
                <label className="login-label">
                  Name:
                  <input
                    className="login-input"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>

                <label className="login-label">
                  Email:
                  <input
                    className="login-input"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
                <div>
                  <label className="login-label">
                    Password:
                    <input
                      className="login-input"
                      type="password"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </label>
                  <label className="login-label">
                    Account type:
                    <input
                      className="login-input"
                      type="text"
                      Title="Available types: user or host."
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />
                  </label>
                  {/* <label className="login-label">
                  Image:
                  <input
                    className="login-input"
                    type="text"
                    value={avatar}
                    placeholder="Add image url"
                    onChange={(e) => {
                      setAvatar(e.target.value);
                    }}
                  />
                </label> */}
                </div>
              </div>

              <button className="bg-border hover:bg-primary/80 text-white rounded-xl px-2 py-4 mt-3">
                Create account
              </button>
              <div className="flex justify-center gap-5">
                <p className="text-center text-sm mb-4">
                  Already have an account?
                </p>
                <Link to="/login">
                  <p className="text-center text-sm mb-4 text-green-400">
                    Sign In
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
