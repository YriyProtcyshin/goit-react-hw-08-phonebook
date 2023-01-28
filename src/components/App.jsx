import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';
import { SignUp } from 'pages/SignUp';
import { ContactsPage } from 'pages/ContactsPage';
import { AddTaskPage } from 'pages/AddTaskPage';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  
  return (
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
    </Routes>
  );
};
