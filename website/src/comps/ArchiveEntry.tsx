import * as React from 'react';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material';
import Image from './Image';
import Colors from '../styles/Colors';

interface ArchiveEntryProps {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  color?: string;
  backgroundColor?: string;
  target?: string;
  onClick?: (path: string) => void;
}

const ArchiveEntry: React.FunctionComponent<ArchiveEntryProps> = (props) => {
  const target = props.target ?? '';
  const accent = props.color ?? 'goldenrod';
  const [hovered, setHovered] = React.useState<boolean>(false);

  const handleClick = (): void => {
    if (props.onClick !== null && props.onClick !== undefined) {
      props.onClick(`/${target}/` + props.title.replaceAll(' ', '-'));
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        padding: '18px 28px',
        borderLeft: `3px solid ${accent}`,
        backgroundColor: hovered ? alpha(accent, 0.06) : 'transparent',
        cursor: 'pointer',
        transition: 'background-color 0.15s ease',
        boxShadow: hovered ? `inset 3px 0 12px ${alpha(accent, 0.2)}` : 'none',
      }}
    >
      <div
        style={{
          width: 90,
          height: 64,
          borderRadius: 4,
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: props.backgroundColor ?? Colors.vsBlack,
        }}
      >
        <Image
          src={props.image}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography
          variant='h6'
          style={{ color: accent, fontWeight: 'bold', lineHeight: 1.2 }}
        >
          {props.title}
        </Typography>
        <Typography variant='body2' style={{ opacity: 0.65 }}>
          {props.subtitle}
        </Typography>
        <Typography variant='caption' style={{ opacity: 0.35, marginTop: 2 }}>
          {props.date}
        </Typography>
      </div>
    </div>
  );
};

export default ArchiveEntry;
