import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  //Get data from context
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  //Check if the page is loading
  if (isLoading) {
    return <div className="p-10 text-center">Loading Profile...</div>;
  }

  //Check if the user is NOT logged in
  if (!isLoggedIn) {
    return <Navigate to={`/login`} />;
  }

  return children;
};

export default ProtectedRoute;
