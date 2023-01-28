import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';
import { SignUp } from 'pages/SignUp';
import { ContactsPage } from 'pages/ContactsPage';
import { AddTaskPage } from 'pages/AddTaskPage';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';

export const App = () => {
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
