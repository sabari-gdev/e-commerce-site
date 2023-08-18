import { Navigate, useLocation } from 'react-router-dom';

interface Children {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Children) => {
  const location = useLocation();
  const loginAuth = localStorage.getItem('token');

  return loginAuth ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ path: location.pathname }} />
  );
};
export default ProtectedRoute;