import * as React from 'react';
import '../styles/comps/Rotate.css';
interface Props {
  upward?: boolean;
  color?: string;
  vertical?: boolean;
  isAnimated?: boolean;
}

const TriforceDivider: React.FunctionComponent<Props> = (props) => {
  const { upward } = props;
  const vertical = props.vertical ?? false;
  const color = props.color ?? 'goldenrod';
  const isAnimated = props.isAnimated ?? false;
  return (
    <div>
      {vertical ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1vh',
          }}
        >
          <div style={{ height: 10, width: 1, backgroundColor: color }} />
          <div
            className={isAnimated ? 'spinning-div' : ''}
            style={{
              height: 10,
              width: 10,
              border: '1px solid',
              borderColor: color,
              rotate: '45deg',
            }}
          />
          <div style={{ height: 10, width: 1, backgroundColor: color }} />
        </div>
      ) : (
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
            className={isAnimated ? 'spinning-div' : ''}
            style={{
              minWidth: 100,
              minHeight: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {upward === true ? (
              <div className='arrow-up' style={{ borderBottomColor: color }} />
            ) : null}
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
            {upward === true ? null : (
              <div className='arrow-down' style={{ borderTopColor: color }} />
            )}
          </div>
          <div style={{ height: 1, width: '40vw', backgroundColor: color }} />
        </div>
      )}
    </div>
  );
};

export default TriforceDivider;
