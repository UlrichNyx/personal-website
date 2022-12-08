import * as React from 'react';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export interface TagType {
  label: string;
  index?: number;
  color?: string;
  isActive: boolean;
  setActive?: (index: number) => void;
  icon?: JSX.Element;
  avatar?: string;
}

const Tag: React.FunctionComponent<TagType> = (props) => {
  return (
    <div style={{ cursor: 'pointer', margin: 2 }}>
      <Chip
        icon={props.icon ?? undefined}
        avatar={props.avatar !== undefined ? <Avatar src={props.avatar} /> : undefined}
        label={props.label}
        style={{
          backgroundColor: props.color ?? 'white',
          color: 'white',
          opacity: props.isActive ? 1 : 0.5,
        }}
        onClick={() => (props.setActive !== undefined ? props.setActive(props.index ?? 0) : null)}
      />
    </div>
  );
};

export default Tag;
