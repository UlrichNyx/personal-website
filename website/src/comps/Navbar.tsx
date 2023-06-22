import * as React from 'react';

import Logo from '../assets/home/Suicune.png';
import Triforce from '../assets/triforce.png';
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
import ElseCaller from '../assets/elsecaller.png';
import Image from './Image';

const Navbar: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const pokemonNum = Math.floor(Math.random() * 1010 + 1);

  let pokemonSrc = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  if (pokemonNum < 10) {
    pokemonSrc += '00' + pokemonNum.toString() + '.png';
  } else if (pokemonNum < 100) {
    pokemonSrc += '0' + pokemonNum.toString() + '.png';
  } else {
    pokemonSrc += pokemonNum.toString() + '.png';
  }

  return (
    <AppBar position='fixed' color='transparent' enableColorOnDark>
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
          <Image src={pokemonSrc} style={{ width: 32, height: 32, borderRadius: 32, margin: 5 }} />
        </div>
        <Button
          color='inherit'
          startIcon={<ArticleIcon />}
          onClick={() => navigate('/portfolio')}
          style={{ textTransform: 'none' }}
        >
          Projects
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
