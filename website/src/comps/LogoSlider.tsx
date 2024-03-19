import * as React from 'react';
import '../styles/comps/Image.css';
import Image from './Image';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Grow from '@mui/material/Grow';
import {images} from '../assets/home/logos/logos';
export interface LogoSliderType {
  logos?: string[];
  show?: boolean;
}
const names = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Docker',
  'TypeScript',
  'NodeMailer',
  'Express.js',
  'Stripe',
  'JavaScript',
  'HTML',
  'CSS',
  'C#',
  'Unity',
  'Love2D',
  'Java',
  'Python',
  'Arduino',
  'Raspberry Pi',
  'C',
  'C++',
  'Haskell',
  'SFML',
  'Github',
  'RabbitMQ',
  'AWS',
  'SQL',
  'GNU Octave',
  'Matlab',
  'Assembly',
  'Scikit Learn',
  'Anaconda',
  'TensorFlow',
  'GWT',
  'Jupyter',
  'Overleaf',
  'Lua',
  'Vercel',
  'Heroku',
  'ESLint',
  'Prettier',
  'Material UI',
  'R',
  'Figma',
  'ChakraUI',
  'Google Analytics',
  'Ko-fi',
  'Riot Games API',
  'Blender',
  'Discord',
  'Tailwind CSS',
  'ThreeJS',
  'OpenAI',
  'MySQL',
  'Kaedim API',
  'Cypress',
  'Jest',
  'CloudFlare',
  'ElectronJS'
];

const LogoSlider: React.FunctionComponent<LogoSliderType> = (props) => {
  const [show, setShow] = React.useState(false);
  const showLogos = props.show ?? true;

 

  const copyFrameworks = (color: string): void => {
    navigator.clipboard
      .writeText(color)
      .then((res) => {
        console.log('Copied to clipboard');
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
      })
      .catch((err) => console.error(err));
  };
  const logos = props.logos ?? names;

  console.log(logos);

  interface FKeyType {
    [name: string]: FPropsType;
  }

  interface FPropsType {
    category: 'Framework' | 'Language' | 'Tool';
  }
  

  const frameworks = {
    'React.js': { category: 'Framework' },
    'Node.js': { category: 'Framework' },
    MongoDB: { category: 'Framework' },
    Docker: { category: 'Tool' },
    TypeScript: { category: 'Language' },
    NodeMailer: { category: 'Framework' },
    'Express.js': { category: 'Framework' },
    Stripe: { category: 'Framework' },
    JavaScript: { category: 'Language' },
    HTML: { category: 'Language' },
    CSS: { category: 'Language' },
    'C#': { category: 'Language' },
    Unity: { category: 'Framework' },
    Love2D: { category: 'Framework' },
    Java: { category: 'Language' },
    Python: { category: 'Language' },
    Arduino: { category: 'Framework' },
    'Raspberry Pi': { category: 'Framework' },
    C: { category: 'Language' },
    'C++': { category: 'Language' },
    Haskell: { category: 'Language' },
    SFML: { category: 'Framework' },
    Github: { category: 'Tool' },
    RabbitMQ: { category: 'Framework' },
    AWS: { category: 'Tool' },
    SQL: { category: 'Language' },
    'GNU Octave': { category: 'Language' },
    Matlab: { category: 'Language' },
    Assembly: { category: 'Language' },
    'Scikit Learn': { category: 'Framework' },
    Anaconda: { category: 'Tool' },
    TensorFlow: { category: 'Framework' },
    GWT: { category: 'Framework' },
    Jupyter: { category: 'Tool' },
    Overleaf: { category: 'Tool' },
    Lua: { category: 'Language' },
    Vercel: { category: 'Tool' },
    Heroku: { category: 'Tool' },
    ESLint: { category: 'Tool' },
    Prettier: { category: 'Tool' },
    'Material UI': { category: 'Tool' },
    R: { category: 'Language' },
    Figma: { category: 'Tool' },
  };


  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ height: '5vh', margin: '5vh' }}>
          <Button
            onClick={() => copyFrameworks(logos.toString())}
            startIcon={<ContentCopyIcon />}
            variant='outlined'
          >
            Copy Frameworks
          </Button>
          <Collapse in={show}>
            <Alert severity='info'>Copied to clipboard!</Alert>
          </Collapse>
        </div>
      </div>
      <div
        className='frameworks-grid'
        style={{
          maxHeight: '50vh',
          marginLeft: '15vw',
          marginRight: '15vw',
          overflowY: 'auto',
          justifyContent: 'center',
          borderRadius: 4,
          scrollBehavior: 'smooth',
          padding: 20,
        }}
      >
        {logos.map((logo, index) => (
          <Grow key={index} in={showLogos} timeout={1000 + index * 100}>
            <div
              style={{
                padding: 30,
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              }}
            >
              <div style={{ height: '95%' }}>
                <Image src={images[names.indexOf(logo)]} style={{ width: '100%' }} />
              </div>
              <Typography style={{ color: 'black' }}>{names[names.indexOf(logo)]}</Typography>
            </div>
          </Grow>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
