import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';
import { SignUp } from 'pages/SignUp';
import { ContactsPage } from 'pages/ContactsPage';
import { AddTaskPage } from 'pages/AddTaskPage';
import { PrivateRoute } from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { Navigate } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  

  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/addcontact"
          element={
            <PrivateRoute redirectTo="/login" component={<AddTaskPage />} />
          }
        />
      </Route>

      <Route
        path="/login"
        element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
      />
      <Route
        path="/signup"
        element={<RestrictedRoute redirectTo="/" component={<SignUp />} />}
      />

      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
