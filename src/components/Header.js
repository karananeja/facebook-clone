import React from 'react';
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  NotificationsActive,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from '../StateProvider';
import '../css/Header.css';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt='facebook logo'
        />
        <div className='header__input'>
          <Search />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header__center'>
        <div className='header__option header__option--active'>
          <Home fontSize='large' />
        </div>
        <div className='header__option'>
          <Flag fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsOutlined fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontOutlined fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisedUserCircle fontSize='large' />
        </div>
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
