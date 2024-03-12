import * as React from 'react';
import Colors from '../../../../styles/Colors';
import { Typography } from '@mui/material';

interface TimelineType {
  items: TimelineItemType[];
  style?: React.CSSProperties;
  onItemClick: (item: number) => void;
}

interface TimelineItemType {
  name: string;
  icon?: string;
}

const Timeline: React.FunctionComponent<TimelineType> = (props) => {
  const { items, onItemClick } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5vh' }}>
      {items.map((i, index) => (
        <div
          key={index}
          style={{ display: 'flex', flexDirection: 'row', gap: '2vw', alignItems: 'center' }}
        >
          <img
          src={i.icon ?? ''}
            style={{
              borderRadius: 64,
              width: 64,
              height: 64,
              padding: 5,
              border: '1px solid ' + Colors.dndRed,
              borderColor: Colors.dndRed,
              cursor: 'pointer',
            }}
            onClick={() => onItemClick(index)}
          />
          <Typography style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '60%' }}>
            {i.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
