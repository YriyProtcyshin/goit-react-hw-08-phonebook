import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Navigation />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
