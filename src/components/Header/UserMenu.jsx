import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { logOut } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const name = useSelector(state => state.auth.user.name);
  const email = useSelector(state => state.auth.user.email);

  const dispatch = useDispatch();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="User menu">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt={name}
              src={`https://i.pravatar.cc/150?u=${name}`}
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">
              { name}
            </Typography>
             <Typography textAlign="center">
              { email}
            </Typography>
            <Typography textAlign="center" onClick={handleLogout}>
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
