import * as React from 'react';
import {useContext} from 'react';
import './styles/ProfileMenu.scss';

// components //
import NewProjectPost from './NewProjectPost';

// mui //
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {IconButton} from '@mui/material';
import {MoreVert} from '@mui/icons-material';

// context //
import {UserContext} from '../Providers/userProvider';

export default function PositionedMenu(props) {
  const {setModalData, openModal, setOpenModal, profileView, setProfileView} =
    props;
  const {currentUser, projectForm, setProjectForm} = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleView = () => {
    openModal === true ? setOpenModal(false) : setOpenModal(true);
  };
  const newProjectModal = (
    <NewProjectPost
      setOpenModal={setOpenModal}
      projectForm={projectForm}
      setProjectForm={setProjectForm}
    />
  );

  return (
    <div className="user-menu-container">
      <div className="profile-info">
        <IconButton
          onClick={handleClick}
          aria-label="settings"
          sx={{mr: '7vw', mt: '2vh'}}
        >
          <MoreVert
            fontSize="large"
            sx={{borderRadius: 50}}
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          />
        </IconButton>
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
                setProfileView('projects');
                handleClose();
              }}
            >
              Portfolio
            </MenuItem>
            <MenuItem
              onClick={e => {
                setModalData(newProjectModal);
                handleView();
                handleClose();
              }}
            >
              New Project
            </MenuItem>
            <MenuItem
              onClick={e => {
                // navigate('/profile/applications');
                setProfileView('applications');
                handleClose();
              }}
            >
              Applications
            </MenuItem>
            <MenuItem
              onClick={e => {
                // navigate('/saved');
                setProfileView('saved');
                handleClose();
              }}
            >
              Saved Jobs
            </MenuItem>
          </div>
        )}
        {currentUser.company_name && (
          <div>
            <MenuItem
              onClick={e => {
                // navigate('/newjob');
                handleClose();
              }}
            >
              Post Job
            </MenuItem>
            <MenuItem
              onClick={e => {
                // navigate('/newgig');
                handleClose();
              }}
            >
              Post Gig
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
