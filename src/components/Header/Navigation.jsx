import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import {Link} from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// const pages = ['Contacts', 'Add contact'];
const pages = [
  {
    title: 'Contacts',
    path: "/"
  },
  {
    title: 'Add contact',
    path: "/addcontact"
  }
]

export const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <ContactPhoneRoundedIcon
        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
      />
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map(({title, path}) => (
            <MenuItem key={title} onClick={handleCloseNavMenu}>
              <Link component={NavLink} to={path} textAlign="center">{title}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <ContactPhoneRoundedIcon
        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
      />
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map(({title, path}) => (
          <Button
            key={title}
            component={NavLink} to={path}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {title}
          </Button>
        ))}
      </Box>
    </>
  );
};
