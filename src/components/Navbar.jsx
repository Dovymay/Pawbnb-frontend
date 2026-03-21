import { useContext } from 'react';
import logo from '../assets/LogoPawbnbwhite.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import avatar from '../assets/Avatar.png';

const Navbar = () => {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="sticky top-0 flex items-center justify-between px-8 py-1 h-12 bg-background shadow-sm">
      <Link to="/">
        <img
          src={logo}
          alt="Pawbnb"
          className="w-40 h-15 h-auto object-contain"
        />
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center justify-between gap-4 mb-2">
          {
            <button
              className="bg-border/0 hover:bg-primary/80 text-white rounded-xl px-4 py-1 mt-3"
              onClick={handleLogout}
            >
              Logout🐾
            </button>
          }
          {
            <Link to="/profile">
              <img
                src={avatar}
                alt="Profile"
                className="w-8 h-10 object-contain mt-3"
              />
            </Link>
          }
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link to="login">
            <button className="bg-border/0 hover:bg-primary/80 text-white rounded-xl px-4 py-1 mt-3">
              Login
            </button>
          </Link>

          <Link to="signup">
            <button className="bg-border/0 hover:bg-primary/80 text-white rounded-xl px-4 py-1 mt-3">
              Sign up
            </button>
          </Link>

          <Link to="/host">
            <button className="bg-primary hover:bg-border/80 text-white rounded-xl px-6 py-1 mt-3">
              Become a host🐾
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
