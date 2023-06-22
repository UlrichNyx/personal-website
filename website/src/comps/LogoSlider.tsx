import * as React from 'react';
import '../styles/comps/Image.css';
import Image from './Image';
import { Typography } from '@mui/material';

export interface LogoSliderType {
  logos: string[];
}

const LogoSlider: React.FunctionComponent<LogoSliderType> = (props) => {
  const { logos } = props;

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
  ];
  return (
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
      }}
    >
      {logos.map((logo, index) => (
        <div
          key={index}
          style={{
            padding: 30,
            backgroundColor: 'white',
            borderRadius: 4,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <div style={{ height: '95%' }}>
            <Image src={logo} style={{ width: '100%' }} />
          </div>
          <Typography style={{ color: 'black' }}>{names[index]}</Typography>
        </div>
      ))}
    </div>
  );
};

export default LogoSlider;
