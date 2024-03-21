import { Typography } from '@mui/material';
import Screenshot from '../../../assets/crystalai/screenshot.png';

const content = {
  description:'This is a project that I had been wanting to do for a while now. I drew inspiration from the multitude of YouTube videos where an AI algorithm is trained to beat a certain video game.',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'5vh',
        marginTop:'5vh',
        justifyContent: 'center',
      }}
    >
      <Typography>This is currently a project in the making, so I will make sure to update it as progress goes along!</Typography>
      <Typography>Currently, I have managed to make an interface with the emulator using pyboy.</Typography>
      <Typography>The bot can now move and interact randomly through the space!</Typography>
      <img src={Screenshot} style={{borderRadius:4}}/>
      <Typography>As you can see it has not yet managed to leave the room yet :P (but it got close!)</Typography>
    </div>
  ),
};


export default { ...content };
