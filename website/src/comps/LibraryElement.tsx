import * as React from 'react';
import Colors from '../styles/Colors';
import { Typography } from '@mui/material';
import nyan from '../assets/home/nyan.gif';
import '../content/Pages/TheLibrary/RainbowBorder.css';
import ProgressBar from './ProgressBar';

export interface LibraryElementType {
  title: string;
  image: string;
  status: Status;
  progress?: number;
  rating: number;
  type: ElementType;
}

export const fictionGenreTags = {
  horror: {},
  fantasy: {},
  shounen: {},
};

const musicGenreTags = {
  lofi: {},
};

export enum Status {
  Not_Started,
  In_Progress,
  Done,
}

export enum ElementType {
  Artist,
  Album,
  Title,
}
// borderColor: borderColors[status],
const LibraryElement: React.FunctionComponent<LibraryElementType> = (props) => {
  const { title, image, status } = props;
  const progress = props.progress ?? 0;
  const borderColors = [Colors.vsDarkGray, Colors.blurple, Colors.onlineGreen];
  console.log(status.toString());
  return (
    <div className='rainbow-box' onClick={() => window.open('https://www.google.com/')}>
      <div className='rainbow-border' style={{ backgroundColor: Colors.vsAlmostBlack }}>
        <img
          src={image}
          style={{
            width: '150px',
            height: '200px',
            borderRadius: '2px',
          }}
        />

        <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
      </div>
      {progress !== 0 && <ProgressBar show progress={progress} color={Colors.braveryPurple} />}
    </div>
  );
};

export default LibraryElement;
