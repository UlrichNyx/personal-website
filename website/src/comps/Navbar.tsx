import * as React from 'react';

import Logo from '../assets/home/Suicune.png';
import Colors from '../styles/Colors';

import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Image from './Image';

const Navbar: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <AppBar position='fixed'>
      <Toolbar
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1vw',
          justifyContent: 'center',
        }}
      >
        <div
          className='unselectable'
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1vw',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          <Image src={Logo} style={{ width: 32, height: 32, borderRadius: 32, margin: 5 }} />
          <Divider orientation='vertical' style={{ height: '3vh', backgroundColor: 'white' }} />
        </div>
        <Button
          color='inherit'
          startIcon={<ArticleIcon />}
          onClick={() => navigate('/portfolio')}
          style={{ textTransform: 'none' }}
        >
          Portfolio
        </Button>
        <Button
          color='inherit'
          startIcon={<BookIcon />}
          onClick={() => navigate('/archives')}
          style={{ textTransform: 'none' }}
        >
          Archives
        </Button>

        <IconButton
          onClick={() => window.open('https://github.com/UlrichNyx', '_blank')}
          style={{ textTransform: 'none', color: Colors.onlineGreen }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          onClick={() =>
            window.open('https://www.linkedin.com/in/filippos-kontogiannis-868504171/', '_blank')
          }
          style={{ textTransform: 'none', color: Colors.vsBlue }}
        >
          <LinkedInIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
