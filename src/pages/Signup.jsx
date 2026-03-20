import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    const userToSignup = { username, email, password };

    try {
      const createdUser = await axios.post(
        'http://localhost:5005/auth/signup',
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
      <h1>Sign up with us</h1>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            className="text-black"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>

        <label>
          Email:
          <input
            className="text-black"
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
            className="text-black"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button>Sign up!</button>
      </form>
    </div>
  );
};

export default Signup;
