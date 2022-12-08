import * as React from 'react';
import '../styles/comps/Pong.css';

const Pong: React.FunctionComponent = () => {
  return (
    <div className='pong' style={{ width: 100, height: 100, position: 'relative' }}>
      <div style={{ backgroundColor: 'white', color: 'white' }} />
      <div style={{ backgroundColor: 'white', color: 'white' }} />
      <div style={{ backgroundColor: 'white', color: 'white' }} />
    </div>
  );
};

export default Pong;
