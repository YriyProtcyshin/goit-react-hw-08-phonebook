import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { LoginPage } from 'pages/LoginPage';
import { SignUp } from 'pages/SignUp';
import { AppRouter } from './AppRoute';

export const App = () => {
  return <AppRouter />;
};
