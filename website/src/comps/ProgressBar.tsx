import * as React from 'react';
import Colors from '../styles/Colors';
import { Typography } from '@mui/material';

interface ProgressBarType {
  progress: number;
  color: string;
}

const ProgressBar: React.FunctionComponent<ProgressBarType> = (props) => {
  const { progress } = props;
  const color = props.color ?? Colors.sylemsBlue;

  return (
    <div
      style={{
        width: 200,
        height: '1vh',
        backgroundColor: 'black',
        borderRadius: 4,
        marginBottom: '5vh',
      }}
    >
      <div
        style={{
          width: (progress / 100) * 200,
          backgroundColor: color,
          height: '1vh',
          borderRadius: 4,
        }}
      ></div>
      <Typography>{progress}%</Typography>
    </div>
  );
};

export default ProgressBar;
