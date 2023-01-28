import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

export const WelcomeSection = () => {
  const name = useSelector(state => state.auth.user.name);
  return <Box sx={{ flexGrow: 0, pr: '20px' }}>Hello, {name}!</Box>;
};
