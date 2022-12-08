import * as React from 'react';
import '../styles/comps/Image.css';
import Image from './Image';

export interface LogoSliderType {
  logos: string[];
}

const LogoSlider: React.FunctionComponent<LogoSliderType> = (props) => {
  const { logos } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '5vw',
        maxWidth: '70vw',
        marginLeft: '15vw',
        marginRight: '15vw',
        overflowX: 'auto',
        padding: 50,
        backgroundColor: '#eeeeff',
        borderRadius: 4,
        scrollBehavior: 'smooth',
      }}
    >
      {logos.map((logo, index) => (
        <Image key={index} src={logo} style={{ maxHeight: '10vh' }} />
      ))}
    </div>
  );
};

export default LogoSlider;
