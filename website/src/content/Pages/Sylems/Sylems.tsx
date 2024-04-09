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
      <Typography>
        In the near future I will share some recent projects we have been working on :))
      </Typography>
      <Typography>
        In the more distant future I will also make sure to create a dedicated website for
        Vereselyum but as we are still in development, that will have to wait for now.{' '}
      </Typography>

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
      <Typography>
        {' '}
        In my Game Design and Development module in uni, I got the chance to develop two game
        prototypes which my teaching staff also got to playtest.
      </Typography>
      <Typography style={{ fontWeight: 'bold' }}>Nightly Ride to Nasyne</Typography>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/sJn1n7DsaBE?si=DBQi0PYwy1mWGdX9'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <Typography style={{ fontWeight: 'bold' }}>Horseman&#39;s Lair</Typography>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/cnyCBJMRvqE?si=jQQhm9ziZVOxJma3&amp;start=1913'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  ),
};

/*
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


*/

export default { ...content };
