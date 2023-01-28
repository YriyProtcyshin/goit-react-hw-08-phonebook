import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
   
  
  const isLoggedIn = true
  const isRefreshing = false;
  
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
