import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  
  const dispatch = useDispatch();
  const logoutApp = () =>{
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
        <div className="header-left">
            <img src="https://cdn-icons-png.flaticon.com/512/4051/4051419.png" alt="" />
            <div className="header-search">
                <SearchIcon/>
                <input placeholder='Search' type="text" />
            </div>
        </div>
        <div className="header-right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={TextsmsIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={true} title = 'me'
            onClick={logoutApp}
            />

        </div>
    </div>
  )
}

export default Header