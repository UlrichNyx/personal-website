import React from 'react';
import Typography from '@mui/material/Typography';
import '../styles/screens/Error.css';
import Suicune from '../assets/home/Suicune.png';
import Image from '../comps/Image';
import Colors from '../styles/Colors';

const Error: React.FunctionComponent = () => {
  return (
    <div className='error-screen'>
      <Image
        src={Suicune}
        style={{
          maxHeight: '20vw',
          borderRadius: 4,
          minWidth: '20vw',
          maxWidth: '80vw',
        }}
      />
      <Typography variant='h5'>Whoops!</Typography>
      <Typography variant='body1' style={{ fontWeight: 'bold' }}>
        You got a 404.
      </Typography>
      <Typography variant='body2'>
        Good news is you also found a rare{' '}
        <strong style={{ color: Colors.hyperlinkBlue }}>Suicune</strong> so, yay!
      </Typography>
    </div>
  );
};

export default Error;
