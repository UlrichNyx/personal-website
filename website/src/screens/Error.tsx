import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/screens/Error.css';
import '../styles/screens/Screen.css';
import Suicune from '../assets/home/Suicune.png';
import Image from '../comps/Image';
import Colors from '../styles/Colors';

const Error: React.FunctionComponent = () => {
  return (
    <div className='error-screen'>
      <div className='avatar-ring' style={{ width: 160, height: 160, flexShrink: 0 }}>
        <Image
          src={Suicune}
          style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Typography variant='h1' style={{ fontWeight: 'bold', fontSize: '8rem', lineHeight: 1, color: '#9e9e9e' }}>
          404
        </Typography>
        <Typography variant='h5' style={{ marginTop: -16 }}>Page not found</Typography>
        <Typography variant='body2' style={{ opacity: 0.55, marginTop: 4 }}>
          Good news — you also found a rare{' '}
          <strong style={{ color: Colors.hyperlinkBlue }}>Suicune</strong>.
        </Typography>
      </div>
      <Button
        variant='outlined'
        size='small'
        startIcon={<HomeIcon fontSize='inherit' />}
        style={{ textTransform: 'none', opacity: 0.6 }}
        onClick={() => { window.location.href = '/'; }}
      >
        Go home
      </Button>
    </div>
  );
};

export default Error;
