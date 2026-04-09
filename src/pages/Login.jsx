import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { API_URL } from '../config/config';

const Login = () => {
  const { authenticateUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = { email, password };

    try {
      const res = await axios.post(`${API_URL}/auth/login`, userToLogin);
      console.log('Success!', res.data);
      localStorage.setItem('authToken', res.data.authToken);
      await authenticateUser();
      nav('/profile');
    } catch (error) {
      console.log('Login error:', error.message);
      alert('Authentication failed!');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen gap-8">
      <div className="bg-surface p-8 rounded-2xl shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <label className="login-label">
            Email:
            <input
              className="login-input"
              placeholder="example@email.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label className="login-label">
            Password:
            <input
              className="login-input"
              placeholder="************"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button className="bg-border hover:bg-primary/80 text-white rounded-xl px-4 py-2 mt-2">
            Login 🐾
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
