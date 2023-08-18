import { Navigate, useLocation } from 'react-router-dom';

interface Children {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Children) => {
  const location = useLocation();
  const loginAuth = localStorage.getItem('token');
  return loginAuth ? (
    <Navigate to="/dashboard" state={{ path: location.pathname }} />
  ) : (
    children
  );
};
export default PublicRoute;