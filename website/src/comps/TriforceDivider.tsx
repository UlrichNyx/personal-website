import * as React from 'react';

const TriforceDivider: React.FunctionComponent = () => {
  return (
    <div
      style={{
        minWidth: 100,
        minHeight: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className='arrow-down' />
        <div className='arrow-down' />
      </div>

      <div className='arrow-down' />
    </div>
  );
};

export default TriforceDivider;
