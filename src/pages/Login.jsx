import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { authenticateUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = { email, password };

    try {
      const res = await axios.post(
        'http://localhost:5005/auth/login',
        userToLogin
      );
      console.log('Success!', res.data);
      localStorage.setItem('authToken', res.data.authToken);
      await authenticateUser();
      nav('/profile');
    } catch (error) {
      console.log('Login error:', error.message);
    }
  }

  return (
    <div className="grid grid-cols-6  justify-center">
      <h1 className="text-white text-3xl font-bold mb-10 mt-5 flex align-center justify-center">
        Login
      </h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl"
            placeholder="example@email.com"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <label>
          Password:
          <input
            className="bg-surfaceLight text-textPrimary px-4 py-2 rounded-xl"
            placeholder="************"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button className="bg-border hover:bg-primary/80 text-white rounded-xl px-4 py-1 mt-3">
          Login 🐾
        </button>
      </form>
    </div>
  );
};

export default Login;
