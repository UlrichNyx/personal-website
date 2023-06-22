import * as React from 'react';
import Colors from '../styles/Colors';
import Typography from '@mui/material/Typography';

import Image from './Image';

export interface Props {
  title: string;
  subtitle: string;
  image: string;
  color?: string;
  backgroundColor?: string;
  archive?: boolean;
  target?: string;
  onClick?: (path: string) => void;
}

const ContentPreview: React.FunctionComponent<Props> = (props) => {
  const target = props.target ?? '';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1px',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
    >
      <Image
        src={props.image}
        onClick={() =>
          props.onClick !== null && props.onClick !== undefined
            ? props.onClick(`/${target}/` + props.title.replaceAll(' ', '-'))
            : null
        }
        style={{
          width: props.archive !== undefined ? 350 : 150,
          height: props.archive !== undefined ? 200 : 150,
          borderRadius: 10,
          backgroundColor: props.backgroundColor ?? Colors.vsBlack,
          cursor: 'pointer',
        }}
      />
      <Typography
        variant='h6'
        style={{
          color: props.color,
        }}
      >
        {props.title}
      </Typography>
      <Typography variant='caption' style={{ maxWidth: '90%' }}>
        {props.subtitle}
      </Typography>
    </div>
  );
};

export default ContentPreview;
