import * as React from 'react';
import Colors from '../styles/Colors';
import Typography from '@mui/material/Typography';
import Image from './Image';
import { alpha } from '@mui/material';

export interface Props {
  title: string;
  subtitle: string;
  image: string;
  color?: string;
  backgroundColor?: string;
  archive?: boolean;
  target?: string;
  onClick?: (path: string) => void;
  progress?: number;
  showProgress?: boolean;
}

const IMAGE_SIZE = 110;
const RING_PAD = 10;
const SVG_SIZE = IMAGE_SIZE + RING_PAD * 2;
const RADIUS = SVG_SIZE / 2 - 4;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ContentPreview: React.FunctionComponent<Props> = (props) => {
  const target = props.target ?? '';
  const accent = props.color ?? 'goldenrod';
  const [hovered, setHovered] = React.useState<boolean>(false);

  const progress = props.progress ?? 0;
  const showProgress = props.showProgress === true;
  const dashOffset = CIRCUMFERENCE * (1 - progress / 100);

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
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }}
    >
      <div style={{ position: 'relative', width: SVG_SIZE, height: SVG_SIZE }}>
        {/* Image */}
        <div
          style={{
            position: 'absolute',
            top: RING_PAD,
            left: RING_PAD,
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            borderRadius: '50%',
            overflow: 'hidden',
            border: props.progress === undefined ? `3px solid ${accent}` : 'none',
            boxShadow: hovered ? `0 0 28px ${alpha(accent, 0.65)}` : `0 0 8px ${alpha(accent, 0.25)}`,
            transition: 'box-shadow 0.2s ease',
            backgroundColor: props.backgroundColor ?? Colors.vsBlack,
          }}
        >
          <Image src={props.image} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Progress ring */}
        {props.progress !== undefined && (
          <svg
            width={SVG_SIZE}
            height={SVG_SIZE}
            style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
          >
            <circle
              cx={SVG_SIZE / 2}
              cy={SVG_SIZE / 2}
              r={RADIUS}
              fill='none'
              stroke={alpha(accent, 0.15)}
              strokeWidth={4}
            />
            <circle
              cx={SVG_SIZE / 2}
              cy={SVG_SIZE / 2}
              r={RADIUS}
              fill='none'
              stroke={accent}
              strokeWidth={4}
              strokeLinecap='round'
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={showProgress ? dashOffset : CIRCUMFERENCE}
              style={{ transition: 'stroke-dashoffset 1.2s ease' }}
            />
          </svg>
        )}
      </div>

      <Typography variant='subtitle2' style={{ color: accent, fontWeight: 'bold', textAlign: 'center', maxWidth: SVG_SIZE, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {props.title}
      </Typography>
      <Typography variant='caption' style={{ textAlign: 'center', opacity: 0.6, maxWidth: SVG_SIZE, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {props.subtitle}
      </Typography>
    </div>
  );
};

export default ContentPreview;
