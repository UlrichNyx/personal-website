import React, { UIEvent } from 'react';
import '../styles/screens/Screen.css';

import Image from '../comps/Image';
import LogoSlider from '../comps/LogoSlider';

import Typography from '@mui/material/Typography';
import ToonLink from '../assets/home/link.png';
import Colors from '../styles/Colors';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import DND from '../assets/tags/dnd.jpeg';
import { Grow, Collapse } from '@mui/material';

import { projects } from '../content/Projects';
import { archives } from '../content/Archives';

import Nyan from '../assets/home/nyan.gif';
import Suicune from '../assets/home/suicune.gif';
import Pong from '../comps/Pong';
import { useNavigate } from 'react-router-dom';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentPreview from '../comps/ContentPreview';

import TriforceDivider from '../comps/TriforceDivider';

import Fade from '@mui/material/Fade';

import { logos } from '../assets/home/logos/logos';
import LootSecret from '../comps/LootSecret';
import ProgressBar from '../comps/ProgressBar';

const Home: React.FunctionComponent = () => {
  const projectDisplay = [projects[1], projects[2], projects[3]];

  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = React.useState(false);

  const trackedElements = React.useRef<Array<HTMLElement | null>>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [show, setShow] = React.useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const updateShow = (values: boolean[]): void => {
    setShow(values.map((item, i) => item));
  };

  React.useEffect(() => {
    // add scroll listener
    const localShow = [false, false, false, false, false, false, false, false];
    const handleScroll = (): void => {
      if (trackedElements !== null) {
        if (trackedElements.current !== null) {
          for (let i = 0; i < localShow.length; i++) {
            const trackedEl = trackedElements.current[i];
            if (trackedEl !== null) {
              if (trackedEl?.getBoundingClientRect() !== undefined) {
                if (trackedEl.getBoundingClientRect().top < window.innerHeight) {
                  if (!localShow[i]) {
                    localShow[i] = true;
                    const timeout = setInterval(() => {
                      updateShow(localShow);
                      clearInterval(timeout);
                    }, 0);
                  }
                }
              }
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    const timeout = setInterval(() => {
      setFadeIn(true);
      clearInterval(timeout);
    }, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='screen-container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}
    >
      <div
        className='content-box content-box-bg-black background-gif-1'
        style={{ minHeight: '100vh' }}
      >
        <Image
          src={ToonLink}
          style={{
            maxWidth: '80vw',
            borderRadius: 10,
            width: 360,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '2vh',
          }}
        >
          <Fade in={fadeIn}>
            <Typography variant='h4'> Welcome to my domain!</Typography>
          </Fade>
          <div style={{ alignSelf: 'center' }}>
            <TriforceDivider color={Colors.sylemsBlue} />
          </div>

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
                  Projects
                </Button>
              </div>
              <Image
                src={Suicune}
                style={{ width: 128, height: 64, marginTop: '5vh', alignSelf: 'center' }}
              />
            </div>
          </Fade>
        </div>
      </div>
      <div
        className='content-box content-box-bg-dark '
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient( rgba(30, 30, 30, 0.3),#121212, #121212, #121212)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4'>About me</Typography>
          <TriforceDivider color={Colors.dndRed} />
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
            <Typography style={{ margin: '2vh' }}>Below you can find my latest post: </Typography>
            <Fade in={show[0]}>
              <div ref={(el) => (trackedElements.current[0] = el)}>
                <ContentPreview
                  {...archives[archives.length - 1]}
                  target='archives'
                  archive
                  onClick={(path: string) => navigate(path)}
                />
              </div>
            </Fade>
          </div>
        </div>
        <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.dndRed,
            textTransform: 'none',
            marginTop: '1vh',
          }}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => navigate('/archives')}
        >
          {' '}
          Archives
        </Button>
      </div>

      <div
        className='content-box content-box-bg-gray background-gif-2'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4'>Frameworks</Typography>
        <TriforceDivider color={Colors.onlineGreen} />
        <Typography>
          This section displays the wide variety of tools and frameworks I have worked within the
          past 8 years.
        </Typography>
        <Typography>
          You can find all projects which incorporate these tools in my{' '}
          <strong style={{ color: Colors.onlineGreen }}>Github</strong> repositories.
        </Typography>
        <div ref={(el) => (trackedElements.current[1] = el)}>
          <LogoSlider show={show[1]} />
        </div>

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

      <div
        className='content-box content-box-bg-gray'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage:
            'linear-gradient( rgba(30, 30, 30, 0.5), rgba(30, 30, 30, 0.9), #1e1e1e,#1e1e1e)',
        }}
      >
        <Typography variant='h4'>Projects</Typography>
        <TriforceDivider color={Colors.idleYellow} />
        <Typography>
          In this section you will find the projects I have been working on
          <strong style={{ color: Colors.idleYellow }}> recently</strong>.
        </Typography>
        <Typography>
          Although my proffesional career leans towards a certain direction, I have a wide variety
          of interests in the field.
        </Typography>
        <Typography>
          I am particularly interested in finding ways to apply my solutions to my every day life.
        </Typography>
        <Typography> Current project I am working on: </Typography>
        <Grow in={show[2]} timeout={500}>
          <div ref={(el) => (trackedElements.current[2] = el)}>
            <ContentPreview
              title={projects[0].title}
              target='portfolio'
              subtitle={projects[0].subtitle}
              image={projects[0].image}
              color={projects[0].color}
              onClick={(path: string) => navigate(path)}
            />
          </div>
        </Grow>
        <div ref={(el) => (trackedElements.current[6] = el)}>
          <ProgressBar progress={10} show={show[6]} color={projects[0].color} />
        </div>
        <Typography>Other recent projects: </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '3vw',
            padding:10,
            maxWidth:'98vw',
            textAlign: 'center',
            paddingBottom: 20,
            borderRadius: 10,
            overflowX: 'auto'
          }}
        >
          {projectDisplay.map((prj, index) => (
            <Grow in={show[2 + index]} key={index} timeout={1000 + index * 500}>
              <div ref={(el) => (trackedElements.current[3 + index] = el)}>
                <ContentPreview
                  title={prj.title}
                  target='portfolio'
                  subtitle={prj.subtitle}
                  image={prj.image}
                  color={prj.color}
                  onClick={(path: string) => navigate(path)}
                />
              </div>
            </Grow>
          ))}
        </div>
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
          Projects
        </Button>
      </div>
      <div
        className='content-box background-gif-3'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4'>Socials</Typography>
        <TriforceDivider upward color={Colors.streamerPurple} />
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

        <Fade in={show[7]} timeout={1000}>
          <div ref={(el) => (trackedElements.current[7] = el)}>
            <LootSecret />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
