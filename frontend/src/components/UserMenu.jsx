import * as React from 'react';
import {useContext} from 'react';
import './styles/UserMenu.scss';

// mui //
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// react-router //
import {useNavigate} from 'react-router-dom';

// context //
import {UserContext} from '../Providers/userProvider';

export default function PositionedMenu(props) {
  const {logout} = props;
  const {currentUser} = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
    logout();
  };

  const navigate = useNavigate();

  function ImageAvatars() {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar alt="Sarah" src={currentUser.photo_url} className="avatar" />
      </Stack>
    );
  }

  return (
    <div className="user-menu-container">
      <div className="profile-info">
        <span className="name">
          {currentUser.first_name} {currentUser.last_name}
        </span>
        <Button
          sx={{mr: '8rem', borderRadius: 50}}
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <div className="profile-info">
            <ImageAvatars />
          </div>
        </Button>
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {currentUser.first_name && (
          <div>
            <MenuItem
              onClick={e => {
                navigate(`/dev/${currentUser.id}`);
                handleClose();
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={e => {
                navigate('/jobs');
                handleClose();
              }}
            >
              Find Work
            </MenuItem>
          </div>
        )}
        {currentUser.company_name && (
          <div>
            <MenuItem
              onClick={e => {
                navigate(`/employer/${currentUser.id}`);
                handleClose();
              }}
            >
              Profile
            </MenuItem>

            <MenuItem
              onClick={e => {
                navigate('/newjob');
                handleClose();
              }}
            >
              Post Job
            </MenuItem>
            <MenuItem
              onClick={e => {
                navigate('/newgig');
                handleClose();
              }}
            >
              Post Gig
            </MenuItem>
          </div>
        )}
        <MenuItem
          onClick={e => {
            handleLogout();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
