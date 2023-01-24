import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
