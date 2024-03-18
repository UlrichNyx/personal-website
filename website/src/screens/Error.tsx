import React from 'react';
import Typography from '@mui/material/Typography';
import '../styles/screens/Error.css';
import Suicune from '../assets/home/Suicune.png';
import Image from '../comps/Image';
import Colors from '../styles/Colors';
import '../styles/comps/Rotate.css';


const Error: React.FunctionComponent = () => {
  
  return (
    <div className='error-screen'>
      <Image
        src={Suicune}
        style={{
          maxHeight: '50vh',
          borderRadius: 4,
          minWidth: '30vw',
          maxWidth: '80vw',
        }}
      />
      <Typography variant='h5'>Whoops!</Typography>

      <Typography variant='body1' style={{ fontWeight: 'bold' }}>

        You got a 404.
      </Typography>
      <Typography variant='body2' style={{ margin: '5vw' }}>
        Good news is you also found a rare{' '}
        <strong style={{ color: Colors.hyperlinkBlue }}>Suicune</strong> so, yay!
      </Typography>
    </div>
  );
};

export default Error;
