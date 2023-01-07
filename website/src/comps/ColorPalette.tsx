import * as React from 'react';
import Colors from '../styles/Colors';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const palette = [
  Colors.white,
  Colors.blurple,
  Colors.onlineGreen,
  Colors.idleYellow,
  Colors.dndRed,
  Colors.braveryPurple,
  Colors.brillianceCoral,
  Colors.balanceTurqoise,
  Colors.nitroGrey,
  Colors.boostPink,
  Colors.streamerPurple,
  Colors.hyperlinkBlue,
  Colors.sylemsBlue,
  Colors.darkGrey,
  Colors.black,
];

const ColorPalette: React.FunctionComponent = () => {
  const [show, setShow] = React.useState(false);

  const copyPalette = (color: string): void => {
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
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto auto',
          gridRowGap: '5px',
        }}
      >
        {palette.map((color, index) => (
          <Tooltip key={index} title={color} onClick={() => copyPalette(color)}>
            <div
              key={index}
              style={{
                width: 32,
                height: 32,
                margin: 1,
                cursor: 'pointer',
                borderRadius: 4,
                backgroundColor: color,
              }}
            />
          </Tooltip>
        ))}
      </div>
      <Button
        onClick={() => copyPalette(palette.toString())}
        startIcon={<ContentCopyIcon />}
        variant='outlined'
      >
        {' '}
        Copy Palette{' '}
      </Button>
      <Collapse in={show}>
        <Alert severity='info'>Copied to clipboard!</Alert>
      </Collapse>
    </div>
  );
};

export default ColorPalette;
