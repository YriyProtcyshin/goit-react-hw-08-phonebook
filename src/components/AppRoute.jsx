import { LoginPage } from 'pages/LoginPage';
import { SignUp } from 'pages/SignUp';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRouter = () => {
  const isLoginUser = false;
  return isLoginUser ? (
    <Routes>
      <Route path="/addcontacts" element={<div>addContact</div>} />
      <Route index element={<div>Contacts</div>} />
      <Navigate to="/login" />
    </Routes>
  ) : (
    <Routes>
      <Route path="/singup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
      <Navigate to="/login" />
    </Routes>
  );
};
