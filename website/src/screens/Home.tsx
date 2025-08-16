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
import { Grow, Collapse, Card, Divider, useTheme, alpha, Box } from '@mui/material';

import { projects } from '../content/Projects';
import { archives } from '../content/Archives';

import { useNavigate } from 'react-router-dom';

import ContentPreview from '../comps/ContentPreview';

import TriforceDivider from '../comps/TriforceDivider';

import Fade from '@mui/material/Fade';

import LootSecret from '../comps/LootSecret';
import ProgressBar from '../comps/ProgressBar';

const Home: React.FunctionComponent = () => {
  const projectDisplay = [projects[1], projects[2], projects[3]];

  const theme = useTheme();

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
    >
      <div
        className='section bg-koi fade-out-bottom'
      >
        <Image
          src={ToonLink}
          style={{
            zIndex:100,
            marginTop:'80px',
            borderRadius: 4,
            width: 360,
            marginBottom:'40px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        />

          <Fade in={fadeIn}>
            <Card sx={{
              p:4,
              backgroundColor: alpha(theme.palette.background.paper, 0.8), // 80% opacity background
            }} style={{ zIndex:100, display: 'flex', flexDirection: 'column', gap: '2vh', marginLeft:10, marginRight:10}}>
              <Typography textAlign="center" variant='h4'> Welcome to my domain!</Typography>
              <Divider flexItem/>
              <Typography>
                {' '}
                My name is{' '}
                <strong style={{ color: Colors.sylemsBlue }}>Filippos Kontogiannis</strong>, nice to
                meet you!
              </Typography>
              <Typography>
                I have been programming for <strong>10 years of my life now</strong> and if I know
                one thing it is that I know nothing.
              </Typography>
              <Typography> Feel free to explore around, you might even find something!</Typography>

            </Card>
          </Fade>
      
      </div>
      <div
        className='section bg-bg2 fade-both stack-under'
      
      >
        <div style={{marginTop:'50vh'}}/>
          


            <Card style={{display:'flex', flexDirection:'row',backgroundColor: alpha(theme.palette.background.paper, 0.8)}}>
                        <Box sx={{p:4,
              backgroundColor: alpha(theme.palette.background.paper, 0.8), // 80% opacity background
            }} style={{ zIndex:100, display: 'flex', flexDirection: 'column', gap: '2vh', maxWidth:'30vw' }}>
                      <Typography  textAlign="center" variant='h4'>About me</Typography>
                      <Divider/>
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

          <Typography>I am currently full-time employed as a Software Engineer.</Typography>

          </Box>
          <div style={{display:'flex', flexDirection:'column',}}>
                                            <Fade in={show[0]} style={{margin:20}}>
              <div ref={(el) => (trackedElements.current[0] = el)}>
                <ContentPreview
                  {...archives[archives.length - 1]}
                  target='archives'
                  archive
                  onClick={(path: string) => navigate(path)}
                />
              </div>
            </Fade>
            <Button color="error" variant='contained' style={{margin:20, justifySelf:'center', textTransform:'none', alignSelf:'center',             color: Colors.white,
            backgroundColor: Colors.dndRed}}
                      endIcon={<ArrowForwardIosIcon />}
          onClick={() => navigate('/archives')}>
              
              Archives
            </Button>
            </div>
            </Card>

                      <div style={{marginBottom:'50vh'}}/>

          



      </div>
      <div
        className='section bg-bg3 fade-both stack-under'
      >
                  <Card sx={{p:4,
          marginTop:'50vh',
              backgroundColor: alpha(theme.palette.background.paper, 0.8), // 80% opacity background
            }} style={{ zIndex:100, display: 'flex', flexDirection: 'column', gap: '2vh', maxWidth:'30vw' }}>
                      <Typography  textAlign="center" variant='h4'>Frameworks</Typography>
                      <Divider/>
                              <Typography>
          This section displays the wide variety of tools and frameworks I have worked with in the
          past 10 years.
        </Typography>
        <Typography>
          You can find all projects which incorporate these tools in my{' '}
          <strong style={{ color: Colors.onlineGreen }}>Github</strong> repositories.
        </Typography>
                      </Card>

        <div ref={(el) => (trackedElements.current[1] = el)}>
          <LogoSlider show={show[1]} />
        </div>
        <div style={{marginBottom:'50vh'}}/>
      </div>
      <div
        className='section bg-bg4 fade-both stack-under'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
                          <Card sx={{p:4,
          marginTop:'50vh',
              backgroundColor: alpha(theme.palette.background.paper, 0.8), // 80% opacity background
            }} style={{ zIndex:100, display: 'flex', flexDirection: 'column', gap: '2vh', maxWidth:'30vw' }}>
                      <Typography  textAlign="center" variant='h4'>Projects</Typography>
                      <Divider/>
        <Typography>
          In this section you will find the projects I have been working on
          <strong style={{ color: Colors.idleYellow }}> recently</strong>.
        </Typography>
        <Typography>
          Although my proffesional career leans towards a certain direction, I have a wide variety
          of interests in the field.
        </Typography>
                      </Card>

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
          <ProgressBar progress={5} show={show[6]} color={projects[0].color} />
        </div>
<div style={{marginBottom:'50vh'}}/>
      </div>
      <div
        className='section bg-bg5 fade-both stack-under'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2vh',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <div style={{paddingTop:'50vh'}}/>
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
