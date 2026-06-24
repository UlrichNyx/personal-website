import * as React from 'react';
import Image from './Image';
import { Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import { images } from '../assets/home/logos/logos';

export interface LogoSliderType {
  logos?: string[];
  show?: boolean;
}

const names = [
  'React.js', 'Node.js', 'MongoDB', 'Docker', 'TypeScript', 'NodeMailer',
  'Express.js', 'Stripe', 'JavaScript', 'HTML', 'CSS', 'C#', 'Unity',
  'Love2D', 'Java', 'Python', 'Arduino', 'Raspberry Pi', 'C', 'C++',
  'Haskell', 'SFML', 'Github', 'RabbitMQ', 'AWS', 'SQL', 'GNU Octave',
  'Matlab', 'Assembly', 'Scikit Learn', 'Anaconda', 'TensorFlow', 'GWT',
  'Jupyter', 'Overleaf', 'Lua', 'Vercel', 'Heroku', 'ESLint', 'Prettier',
  'Material UI', 'R', 'Figma', 'ChakraUI', 'Google Analytics', 'Ko-fi',
  'Riot Games API', 'Blender', 'Discord', 'Tailwind CSS', 'ThreeJS',
  'OpenAI', 'MySQL', 'Kaedim API', 'Cypress', 'Jest', 'CloudFlare',
  'ElectronJS', 'PyBoy', 'PyTorch',
];

const INTERVAL_MS = 2000;
const FADE_MS = 350;

const LogoSlider: React.FunctionComponent<LogoSliderType> = (props) => {
  const logos = props.logos ?? names;
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (props.show !== true) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % logos.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [props.show, logos.length]);

  const logo = logos[index];
  const imgIndex = names.indexOf(logo);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: 24, minWidth: 140 }}>
      <Fade in={visible} timeout={FADE_MS}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 96,
              height: 96,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              padding: 12,
            }}
          >
            <Image src={images[imgIndex]} style={{ width: 64, height: 64, objectFit: 'contain' }} />
          </div>
          <Typography variant='body2' style={{ textAlign: 'center', fontWeight: 500 }}>
            {logo}
          </Typography>
        </div>
      </Fade>
      <Typography variant='caption' style={{ opacity: 0.35, letterSpacing: 1 }}>
        {index + 1} / {logos.length}
      </Typography>
    </div>
  );
};

export default LogoSlider;
