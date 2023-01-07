import * as React from 'react';

interface Props {
  upward?: boolean;
}

const TriforceDivider: React.FunctionComponent<Props> = (props) => {
  const { upward } = props;
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
      {upward === true ? <div className='arrow-up' /> : null}
      {upward === true ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className='arrow-up' />
          <div className='arrow-up' />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className='arrow-down' />
          <div className='arrow-down' />
        </div>
      )}
      {upward === true ? null : <div className='arrow-down' />}
    </div>
  );
};

export default TriforceDivider;
