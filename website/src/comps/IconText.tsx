import { Typography } from '@mui/material';
import * as React from 'react';
import { SvgIconComponent } from '@mui/icons-material/';

interface IconTextType {
  icon: React.ReactNode;
  color?: string;
  children: React.ReactNode;
}

const IconText: React.FunctionComponent<IconTextType> = (props) => {
  const { icon, children, color } = props;
  return (
    <div
      style={{
        color,
        display: 'flex',
        gap: 5,
        alignItems: 'center',
      }}
    >
      {icon}
      <Typography>{children}</Typography>
    </div>
  );
};

export default IconText;
