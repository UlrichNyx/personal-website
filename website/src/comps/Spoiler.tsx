import * as React from 'react';
import Colors from '../styles/Colors';
import { IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface SpoilerType {
  children: React.ReactNode;
}

const Spoiler: React.FunctionComponent<SpoilerType> = (props) => {
  const { children } = props;
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography style={{ color: Colors.dndRed }}>Show Spoilers</Typography>
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? (
            <ExpandLessIcon style={{ color: Colors.dndRed }} />
          ) : (
            <ExpandMoreIcon style={{ color: Colors.dndRed }} />
          )}
        </IconButton>
      </div>
      <div
        style={{
          color: visible ? 'white' : 'gray',
          backgroundColor: visible ? 'rgba(128, 128, 128, 0.1)' : 'gray',
          borderRadius: 4,
          cursor: 'pointer',
          userSelect: 'none',
          display: visible ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '3vh',
          padding: '1vh',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Spoiler;
