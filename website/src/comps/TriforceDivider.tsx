import * as React from 'react';

interface Props {
  upward?: boolean;
  color?: string;
}

const TriforceDivider: React.FunctionComponent<Props> = (props) => {
  const { upward } = props;
  const color = props.color ?? 'goldenrod';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '90vw',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      <div style={{ height: 1, width: '40vw', backgroundColor: color }} />
      <div
        style={{
          minWidth: 100,
          minHeight: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {upward === true ? <div className='arrow-up' style={{ borderBottomColor: color }} /> : null}
        {upward === true ? (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='arrow-up' style={{ borderBottomColor: color }} />
            <div className='arrow-up' style={{ borderBottomColor: color }} />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='arrow-down' style={{ borderTopColor: color }} />
            <div className='arrow-down' style={{ borderTopColor: color }} />
          </div>
        )}
        {upward === true ? null : <div className='arrow-down' style={{ borderTopColor: color }} />}
      </div>
      <div style={{ height: 1, width: '40vw', backgroundColor: color }} />
    </div>
  );
};

export default TriforceDivider;
