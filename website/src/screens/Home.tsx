import React from 'react';
import '../styles/screens/Screen.css';

import Image from '../comps/Image';
import LogoSlider from '../comps/LogoSlider';

import Typography from '@mui/material/Typography';
import ToonLink from '../assets/home/link.png';
import Colors from '../styles/Colors';
import { Grow, Card, Divider, useTheme, useMediaQuery, alpha, Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { projects } from '../content/Projects';

import { useNavigate } from 'react-router-dom';

import ContentPreview from '../comps/ContentPreview';

import Fade from '@mui/material/Fade';


const NAV_BUTTON_STYLE = {
  color: 'rgba(255,255,255,0.8)',
  backgroundColor: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.25)',
  backdropFilter: 'blur(4px)',
};

const Home: React.FunctionComponent = () => {
  const sectionRefs = React.useRef<Array<HTMLDivElement | null>>([null, null, null, null]);
  const [currentSection, setCurrentSection] = React.useState<number>(0);

  const scrollToSection = (index: number): void => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  const [fadeIn, setFadeIn] = React.useState(false);

  const trackedElements = React.useRef<Array<HTMLElement | null>>([
    null, null, null, null, null, null, null, null,
  ]);

  const [show, setShow] = React.useState<boolean[]>([
    false, false, false, false, false, false, false, false,
  ]);

  const updateShow = (values: boolean[]): void => {
    setShow(values.map((item) => item));
  };

  React.useEffect(() => {
    const localShow = [false, false, false, false, false, false, false, false];
    const handleScroll = (): void => {
      if (trackedElements.current !== null) {
        for (let i = 0; i < localShow.length; i++) {
          const trackedEl = trackedElements.current[i];
          if (trackedEl !== null && trackedEl.getBoundingClientRect().top < window.innerHeight) {
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
      let active = 0;
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i];
        if (el !== null && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          active = i;
        }
      }
      setCurrentSection(active);
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

  const cardStyle = (extraStyle?: React.CSSProperties): React.CSSProperties => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    width: isMobile ? '90vw' : undefined,
    ...extraStyle,
  });

  const textBoxStyle: React.CSSProperties = {
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: '2vh',
    maxWidth: isMobile ? '100%' : '30vw',
  };

  return (
    <div className='screen-container'>

      {/* Welcome */}
      <div ref={(el) => (sectionRefs.current[0] = el)} className='section bg-koi fade-out-bottom' style={{ justifyContent: 'center', paddingBottom: '20vh' }}>
        <Fade in={fadeIn}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 64 }}>
            <div
              className='avatar-ring'
              style={{
                zIndex: 101,
                marginBottom: isMobile ? -50 : -70,
                width: isMobile ? 100 : 140,
                height: isMobile ? 100 : 140,
              }}
            >
              <Image
                src={ToonLink}
                style={{
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100 }}>
              <Box sx={{ pt: isMobile ? 8 : 10, pb: isMobile ? 2 : 3, px: isMobile ? 2 : 3 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', maxWidth: 380, width: '100%' }}>
                <Typography textAlign='center' variant='h6'>Welcome to my domain!</Typography>
                <Divider flexItem />
                <Typography variant='body2'>
                  My name is{' '}
                  <strong className='gradient-text'>Filippos Kontogiannis</strong>, nice to meet you!
                </Typography>
                <Typography variant='body2'>
                  I have been programming for <strong>10 years of my life now</strong> and if I know one thing it is that I know nothing.
                </Typography>
                <Typography variant='body2'>Feel free to explore around, you might even find something!</Typography>
              </Box>
            </Card>
          </div>
        </Fade>
      </div>

      {/* About me */}
      <div ref={(el) => (sectionRefs.current[1] = el)} className='section bg-bg2 fade-both stack-under' style={{ justifyContent: 'center', paddingBottom: '20vh' }}>
        <Card style={cardStyle()}>
          <Box sx={{ p: isMobile ? 2 : 4, backgroundColor: 'rgba(0,0,0,0.15)' }} style={textBoxStyle}>
            <Typography textAlign='center' variant='h6'>About me</Typography>
            <Divider />
            <Typography variant='body2'>
              I am a <strong style={{ color: Colors.dndRed }}>MEng in Computer Science</strong>{' '}
              graduate from the University of Southampton.
            </Typography>
            <Typography variant='body2'>
              My professional career leans towards application, game and web developing.
            </Typography>
            <Typography variant='body2'>
              I have a wide variety of hobbies which range from drawing pixel art to playing D&D.
            </Typography>
            <Typography variant='body2'>I am currently full-time employed as a Software Engineer.</Typography>
          </Box>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Fade in={show[0]} style={{ margin: 20 }}>
              <div ref={(el) => (trackedElements.current[0] = el)}>
                <ContentPreview
                  {...projects[projects.length - 1]}
                  target='portfolio'
                  onClick={(path: string) => navigate(path)}
                />
              </div>
            </Fade>
          </div>
        </Card>
      </div>

      {/* Frameworks */}
      <div ref={(el) => (sectionRefs.current[2] = el)} className='section bg-bg3 fade-both stack-under' style={{ justifyContent: 'center', paddingBottom: '20vh' }}>
        <Card style={cardStyle({ maxWidth: isMobile ? '90vw' : '75vw' })}>
          <Box sx={{ p: isMobile ? 2 : 4, backgroundColor: 'rgba(0,0,0,0.15)' }} style={textBoxStyle}>
            <Typography textAlign='center' variant='h6'>Frameworks</Typography>
            <Divider />
            <Typography variant='body2'>
              This section displays the wide variety of tools and frameworks I have worked with in the past 10 years.
            </Typography>
            <Typography variant='body2'>
              You can find all projects which incorporate these tools in my{' '}
              <strong style={{ color: Colors.onlineGreen }}>Github</strong> repositories.
            </Typography>
          </Box>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, overflow: 'hidden' }}>
            <div ref={(el) => (trackedElements.current[1] = el)}>
              <LogoSlider show={show[1]} />
            </div>
          </div>
        </Card>
      </div>

      {/* Projects */}
      <div ref={(el) => (sectionRefs.current[3] = el)} className='section bg-bg4 fade-both stack-under' style={{ justifyContent: 'center', paddingBottom: '20vh' }}>
        <Card style={cardStyle()}>
          <Box sx={{ p: isMobile ? 2 : 4, backgroundColor: 'rgba(0,0,0,0.15)' }} style={textBoxStyle}>
            <Typography textAlign='center' variant='h6'>Projects</Typography>
            <Divider />
            <Typography variant='body2'>
              In this section you will find the projects I have been working on
              <strong style={{ color: Colors.idleYellow }}> recently</strong>.
            </Typography>
            <Typography variant='body2'>
              Although my professional career leans towards a certain direction, I have a wide variety of interests in the field.
            </Typography>
          </Box>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 24 }}>
            <Grow in={show[2]} timeout={500}>
              <div ref={(el) => (trackedElements.current[2] = el)}>
                <ContentPreview
                  title={projects[0].title}
                  target='portfolio'
                  subtitle={projects[0].subtitle}
                  image={projects[0].image}
                  color={projects[0].color}
                  onClick={(path: string) => navigate(path)}
                  progress={5}
                  showProgress={show[2]}
                />
              </div>
            </Grow>
            <Grow in={show[3]} timeout={700}>
              <div ref={(el) => (trackedElements.current[3] = el)}>
                <ContentPreview
                  {...projects[projects.length - 1]}
                  target='portfolio'
                  onClick={(path: string) => navigate(path)}
                />
              </div>
            </Grow>
          </div>
        </Card>
      </div>

      {/* Nav arrows */}
      <div style={{ position: 'fixed', top: 72, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        <IconButton
          className='nav-arrow-up'
          style={{ ...NAV_BUTTON_STYLE, opacity: currentSection > 0 ? 1 : 0, pointerEvents: currentSection > 0 ? 'auto' : 'none' }}
          onClick={() => scrollToSection(currentSection - 1)}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
      <div style={{ position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
        <IconButton
          className='nav-arrow-down'
          style={{ ...NAV_BUTTON_STYLE, opacity: currentSection < sectionRefs.current.length - 1 ? 1 : 0, pointerEvents: currentSection < sectionRefs.current.length - 1 ? 'auto' : 'none' }}
          onClick={() => scrollToSection(currentSection + 1)}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default Home;
