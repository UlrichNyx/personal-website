import { Typography } from '@mui/material';
import * as React from 'react';
import { SvgIconComponent } from '@mui/icons-material/';

interface LinkTextType {
  color?: string;
  children: React.ReactNode;
  url?: string;
}

const TextLink: React.FunctionComponent<LinkTextType> = (props) => {
  const {children, color, url} = props;
  return (
      <span style={{fontWeight:'bold', cursor:'pointer', textDecoration:'underline', color: color}} onClick={() => window.open(url)}>{children}</span>
  );
};

export default TextLink;
