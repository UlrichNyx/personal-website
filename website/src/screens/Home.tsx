import React from 'react';
import '../styles/screens/Screen.css';

import Image from '../comps/Image';
import LogoSlider from '../comps/LogoSlider';

import Typography from '@mui/material/Typography';
import ToonLink from '../assets/home/toonlink.jpeg';
import Divider from '@mui/material/Divider';
import Colors from '../styles/Colors';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import DND from '../assets/tags/dnd.jpeg';

import { projects } from '../content/Projects';
import { archives } from '../content/Archives';

import Sylems from '../assets/home/SylemsNoStem.png';
import Cursor from '../assets/home/cursor.png';
import Nyan from '../assets/home/nyan.gif';

import Pong from '../comps/Pong';
import { useNavigate } from 'react-router-dom';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentPreview from '../comps/ContentPreview';

import TriforceDivider from '../comps/TriforceDivider';

import Fade from '@mui/material/Fade';

import { logos } from '../assets/home/logos/logos';

const Home: React.FunctionComponent = () => {
  const projectDisplay = [projects[2], projects[1], projects[4]];

  const navigate = useNavigate();
  const [found, setFound] = React.useState(false);
  const [uncovered, setUncovered] = React.useState(false);

  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    const timeout = setInterval(() => {
      setFadeIn(true);
      clearInterval(timeout);
    }, 500);
  }, []);

  return (
    <div
      className='screen-container'
      style={{ display: 'flex', flexDirection: 'column', gap: '5vh' }}
    >
      <div className='content-box'>
        <Image
          src={ToonLink}
          style={{
            minWidth: '20vw',
            maxWidth: '80vw',
            borderRadius: '80vw',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
          <Fade in={fadeIn}>
            <Typography variant='h4'> Welcome to my domain!</Typography>
          </Fade>
          <Divider style={{ backgroundColor: Colors.sylemsBlue, height: 1.5 }} />

          <Fade in={fadeIn}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              <Typography>
                {' '}
                My name is{' '}
                <strong style={{ color: Colors.sylemsBlue }}>Filippos Kontogiannis</strong>, nice to
                meet you!
              </Typography>
              <Typography>
                I have been programming for <strong>8 years of my life now</strong> and if I know
                one thing it is that I know nothing.
              </Typography>
              <Typography> Feel free to explore around, you might even find something!</Typography>
              <div>
                <Button
                  variant='contained'
                  style={{
                    color: Colors.white,
                    backgroundColor: Colors.vsBlue,
                    textTransform: 'none',
                  }}
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={() => navigate('/portfolio')}
                >
                  {' '}
                  Portfolio
                </Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <TriforceDivider color={Colors.sylemsBlue} />
      <div
        className='content-box'
        style={{
          gap: '5vw',
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '2vh', justifyContent: 'center' }}
        >
          <Typography variant='h4'>About me</Typography>
          <Divider style={{ backgroundColor: Colors.dndRed, height: 1.5 }} />

          <Typography>
            I am a <strong style={{ color: Colors.dndRed }}>MEng in Computer Science</strong>{' '}
            graduate from the University of Southampton.
          </Typography>

          <Typography>
            My professional career leans towards application, game and web developing.
          </Typography>

          <Typography>
            I have a wide variety of hobbies which range from drawing pixel art to playing D&D.
          </Typography>

          <Typography>
            You can read everything regarding my adventures in this world here.
          </Typography>

          <div>
            <Button
              variant='contained'
              style={{
                color: Colors.white,
                backgroundColor: Colors.dndRed,
                textTransform: 'none',
              }}
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => navigate('/archives')}
            >
              {' '}
              Archives
            </Button>
            <Typography style={{ margin: '2vh' }}>Below you can find my latest post: </Typography>
            <div style={{ width: '100%', alignSelf: 'center' }}>
              <ContentPreview
                {...archives[archives.length - 1]}
                target='archives'
                archive
                onClick={(path: string) => navigate(path)}
              />
            </div>
          </div>
        </div>
      </div>

      <Image src={DND} style={{ width: 120, height: 120, borderRadius: 4 }} />

      <TriforceDivider color={Colors.dndRed} />

      <div className='content-box' style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
        <Typography variant='h4'>Frameworks</Typography>

        <Divider style={{ backgroundColor: Colors.onlineGreen, height: 1.5 }} />
        <Typography>
          This section displays the wide variety of tools and frameworks I have worked with in the
          past 8 years.
        </Typography>
        <Typography>
          You can find all projects which incorporate these tools in my{' '}
          <strong style={{ color: Colors.onlineGreen }}>Github</strong> repositories.
        </Typography>
      </div>

      <LogoSlider logos={logos} />

      <Button
        variant='contained'
        style={{
          color: Colors.white,
          backgroundColor: Colors.onlineGreen,
          textTransform: 'none',
        }}
        startIcon={<GitHubIcon />}
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => window.open('https://github.com/UlrichNyx', '_blank')}
      >
        {' '}
        Github
      </Button>

      <div
        className='content-box'
        style={{
          width: 100,
          height: 100,
          backgroundColor: Colors.onlineGreen,
          borderRadius: 4,
          padding: 100,
        }}
      >
        <Pong />
      </div>

      <TriforceDivider color={Colors.onlineGreen} />
      <div
        className='content-box'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4'>Projects</Typography>

        <Divider style={{ backgroundColor: Colors.idleYellow, height: 1.5, width: '100%' }} />
        <Typography>
          In this section you will find the projects I have been working on
          <strong style={{ color: Colors.idleYellow }}> recently</strong>.
        </Typography>
        <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.idleYellow,
            textTransform: 'none',
          }}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => navigate('/portfolio')}
        >
          {' '}
          Portfolio
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '3vw',
          maxWidth: '97vw',
          textAlign: 'center',
          padding: 10,
          borderRadius: 10,
          overflowX: 'auto',
        }}
      >
        {projectDisplay.map((prj, index) => (
          <ContentPreview
            key={index}
            title={prj.title}
            target='portfolio'
            subtitle={prj.subtitle}
            image={prj.image}
            color={prj.color}
            onClick={(path: string) => navigate(path)}
          />
        ))}
      </div>

      <Image src={Nyan} style={{ width: 200, height: 200, borderRadius: 4 }} />
      <TriforceDivider color={Colors.idleYellow} />
      <div
        className='content-box'
        style={{ display: 'flex', flexDirection: 'column', gap: '2vh', textAlign: 'center' }}
      >
        <Typography variant='h4'>Socials</Typography>

        <Divider style={{ backgroundColor: Colors.streamerPurple, height: 1.5 }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <EmailIcon style={{ marginRight: 5, marginLeft: 10, color: Colors.streamerPurple }} />
          <Typography
            style={{
              color: Colors.streamerPurple,
              fontWeight: 'bold',
            }}
          >
            fkont@sylems.com
          </Typography>
        </div>

        <Typography>You can also find me in the platforms below.</Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5vw',
          }}
        ></div>

        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '2vw', justifyContent: 'center' }}
        >
          <Button
            variant='contained'
            style={{
              color: Colors.white,
              backgroundColor: Colors.sylemsBlue,
              textTransform: 'none',
            }}
            startIcon={<LinkedInIcon />}
            endIcon={<ArrowForwardIosIcon />}
            onClick={() =>
              window.open('https://www.linkedin.com/in/filippos-kontogiannis-868504171/', '_blank')
            }
          >
            {' '}
            LinkedIn
          </Button>

          <Button
            variant='contained'
            style={{
              color: Colors.white,
              backgroundColor: Colors.onlineGreen,
              textTransform: 'none',
            }}
            startIcon={<GitHubIcon />}
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => window.open('https://github.com/UlrichNyx', '_blank')}
          >
            {' '}
            Github
          </Button>
        </div>
      </div>

      <TriforceDivider upward color={Colors.streamerPurple} />
      <div
        className='content-box'
        style={{
          width: '60%',
          height: 200,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={Cursor} style={{ width: 32, height: 32 }} />
          <Typography
            className='unselectable'
            style={{ cursor: 'pointer' }}
            onClick={() => setFound(true)}
          >
            You found{' '}
            <strong style={{ color: Colors.sylemsBlue, textDecoration: 'underline' }}>
              something
            </strong>
            !
          </Typography>
          <Typography></Typography>
        </div>

        {found ? (
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography>
                You found a rare <strong style={{ color: Colors.sylemsBlue }}>Sylems</strong>{' '}
                flower!
              </Typography>
              <Image
                src={Sylems}
                style={{ width: 42, height: 42, marginTop: 10, cursor: 'pointer' }}
                onClick={() => setUncovered(true)}
              />
              <Typography></Typography>
            </div>
          </div>
        ) : null}

        {uncovered ? (
          <div>
            <Typography>&quot;Sounding melody,</Typography>
            <Typography>The sun has set for a while,</Typography>
            <Typography>Until next time, friends!&quot;</Typography>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
