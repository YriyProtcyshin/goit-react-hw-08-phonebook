import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import css from "./header.module.css"

export const WelcomeSection = () => {
  const name = useSelector(state => state.auth.user.name);
  return <Box className={css.welcome }>Hello, {name}!</Box>;
};
