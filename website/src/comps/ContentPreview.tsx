import * as React from 'react';
import Colors from '../styles/Colors';
import Typography from '@mui/material/Typography';

import Image from './Image';
import { alpha, Card, useTheme } from '@mui/material';

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
  const theme = useTheme();
  return (
    <Card

      style={{
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        display: 'flex',
        flexDirection: 'column',
        gap: '1px',
        alignItems: 'center',
        padding: 24,
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
    </Card>
  );
};

export default ContentPreview;
