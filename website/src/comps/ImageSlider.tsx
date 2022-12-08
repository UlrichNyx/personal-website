import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Colors from '../styles/Colors';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Image from './Image';

interface imageType {
  img: string;
  title: string;
  subtitle: string;
}

interface Props {
  images: imageType[];
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ImageSlider: React.FunctionComponent<Props> = (props) => {
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef<null | HTMLDivElement>(null);
  const changeIndex = (value: number): void => {
    let tempIndex = index;
    if (value < 0) {
      setIndex(props.images.length - 1);
      tempIndex = props.images.length - 1;
    } else if (value >= props.images.length) {
      setIndex(0);
      tempIndex = 0;
    } else {
      setIndex(value);
      tempIndex = value;
    }

    /*
    if (ref.current !== null) {
      ref.current.scrollLeft = 15 * tempIndex;
    }
    */
  };
  return (
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.vsAlmostBlack,
        width: props.width,
        maxWidth: props.width,
        borderRadius: 4,
        paddingBottom: '1vh',
      }}
    >
      <Image
        src={props.images[index].img}
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: Colors.black,
          maxWidth: '90vw',
          maxHeight: '100vh',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <IconButton onClick={() => changeIndex(index - 1)}>
          <ChevronLeftIcon />
        </IconButton>
        <div
          ref={ref}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            overflowX: 'auto',
            maxWidth: '80%',
            paddingBottom: 5,
          }}
        >
          {props.images.map((item, idx) => (
            <div
              key={idx}
              ref={ref}
              style={{
                width: 10,
                minWidth: 10,
                height: 10,
                minHeight: 10,
                borderRadius: 10,
                backgroundColor: index === idx ? Colors.white : 'transparent',
                borderColor: Colors.white,
                border: 'solid 1px',
                margin: 4,
                cursor: 'pointer',
              }}
              onClick={() => changeIndex(idx)}
            />
          ))}
        </div>
        <IconButton onClick={() => changeIndex(index + 1)}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <div style={{ padding: 10 }}>
        <Typography variant='h4' style={{ color: props.color }}>
          {props.images[index].title}
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          {props.images[index].subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default ImageSlider;
