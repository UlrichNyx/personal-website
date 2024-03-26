import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import cat from '../../../assets/cat-breakdancing.gif';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const url = 'https://steamcommunity.com/profiles/76561199438651149/';
const content = {
  description:
    'This is a side project I have been working on for a while now. It includes various Unity projects, some of which I have submitted in game jams.',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5vh',
        marginTop: '5vh',
      }}
    >
      <Typography>Hey! This page is currently under construction! :3</Typography>
      <img src={cat} style={{ borderRadius: 4, width: 200 }}></img>
      <Typography>(Imagine the cat is the content for now)</Typography>
      <Typography>Please take a look at our projects below:</Typography>
      <Button
        variant='contained'
        style={{
          color: Colors.white,
          backgroundColor: Colors.sylemsBlue,
          textTransform: 'none',
          alignSelf: 'center',
        }}
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => window.open('https://itch.io/jam/pirate/rate/2491773')}
      >
        Fluffy Snuggly Adventures!
      </Button>
      <Button
        variant='contained'
        style={{
          color: Colors.white,
          backgroundColor: Colors.blurple,
          textTransform: 'none',
          alignSelf: 'center',
        }}
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => window.open('https://itch.io/jam/pirate/rate/2491773')}
      >
        Project AetherGate
      </Button>
      <Typography>
        Here is our submission in the Pirate Software GameJam hosted in January 2024:
      </Typography>
      <Button
        variant='contained'
        style={{
          color: Colors.white,
          backgroundColor: Colors.brillianceCoral,
          textTransform: 'none',
          alignSelf: 'center',
        }}
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => window.open('https://itch.io/jam/pirate/rate/2491773')}
      >
        itch.io
      </Button>
      <Typography>
        Since this is also the corner of my personal website where I talk about my own game dev
        experience, I will include some solo projects or uni projects I have worked on as well.
      </Typography>
      <Typography>
        In the meantime, you can find the relevant Steam community profile{' '}
        <strong
          style={{ textDecoration: 'underline', color: Colors.blurple, cursor: 'pointer' }}
          onClick={() => window.open(url)}
        >
          here.
        </strong>
      </Typography>
    </div>
  ),
};

/*



*/

export default { ...content };
