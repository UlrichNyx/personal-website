import * as React from 'react';
import Colors from '../styles/Colors';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
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
  const [copied, setCopied] = React.useState<string | null>(null);
  const [paletteCopied, setPaletteCopied] = React.useState(false);

  const copy = (color: string): void => {
    navigator.clipboard.writeText(color).catch(console.error);
    setCopied(color);
    setTimeout(() => setCopied(null), 1500);
  };

  const copyPalette = (): void => {
    navigator.clipboard.writeText(palette.join(', ')).catch(console.error);
    setPaletteCopied(true);
    setTimeout(() => setPaletteCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {palette.map((color) => (
        <Tooltip key={color} title={color} placement='top'>
          <div
            onClick={() => copy(color)}
            style={{
              width: 42,
              height: 42,
              borderRadius: 8,
              backgroundColor: color,
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transform: copied === color ? 'scale(0.88)' : 'scale(1)',
              boxShadow: copied === color ? `0 0 14px ${color}90` : 'none',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            {copied === color && (
              <CheckIcon style={{ fontSize: 16, color: 'white', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8))' }} />
            )}
          </div>
        </Tooltip>
      ))}
      </div>
      <Button
        size='small'
        variant='outlined'
        startIcon={paletteCopied ? <CheckIcon fontSize='inherit' style={{ color: '#4ec9b0' }} /> : <ContentCopyIcon fontSize='inherit' />}
        onClick={copyPalette}
        style={{
          alignSelf: 'flex-start',
          textTransform: 'none',
          opacity: 0.6,
          borderColor: paletteCopied ? '#4ec9b0' : 'rgba(255,255,255,0.2)',
          color: paletteCopied ? '#4ec9b0' : 'inherit',
          transition: 'border-color 0.2s ease, color 0.2s ease',
        }}
      >
        {paletteCopied ? 'Copied!' : 'Copy palette'}
      </Button>
    </div>
  );
};

export default ColorPalette;
