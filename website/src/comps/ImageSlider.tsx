import * as React from 'react';

import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import Image from './Image';

const FADE_MS = 220;

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

const DOT_THRESHOLD = 8;

const Dots = ({ images, index, accent, onChange }: { images: imageType[]; index: number; accent: string; onChange: (i: number) => void }): JSX.Element => {
  if (images.length > DOT_THRESHOLD) {
    return (
      <Typography variant='caption' style={{ color: accent, opacity: 0.7, userSelect: 'none' }}>
        {index + 1} / {images.length}
      </Typography>
    );
  }
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
      {images.map((_, idx) => (
        <div
          key={idx}
          onClick={() => onChange(idx)}
          style={{
            width: index === idx ? 20 : 6,
            height: 6,
            borderRadius: 4,
            backgroundColor: index === idx ? accent : 'rgba(255,255,255,0.18)',
            cursor: 'pointer',
            transition: 'width 0.25s ease, background-color 0.25s ease',
          }}
        />
      ))}
    </div>
  );
};

const ImageSlider: React.FunctionComponent<Props> = (props) => {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [fullscreen, setFullscreen] = React.useState(false);
  const accent = props.color ?? 'rgba(255,255,255,0.6)';

  const changeIndex = (value: number): void => {
    setVisible(false);
    setTimeout(() => {
      let next = value;
      if (value < 0) next = props.images.length - 1;
      else if (value >= props.images.length) next = 0;
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  };

  const current = props.images[index];

  return (
    <>
      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1300,
            backgroundColor: 'rgba(0,0,0,0.93)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <IconButton
            onClick={() => setFullscreen(false)}
            style={{ position: 'absolute', top: 12, right: 12, opacity: 0.6 }}
          >
            <CloseIcon />
          </IconButton>

          <Fade in={visible} timeout={FADE_MS}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', justifyContent: 'center' }}>
              <IconButton onClick={() => changeIndex(index - 1)} style={{ opacity: 0.5, flexShrink: 0 }}>
                <ChevronLeftIcon />
              </IconButton>
              <Image
                src={current.img}
                style={{ maxWidth: '88vw', maxHeight: '78vh', borderRadius: 6, objectFit: 'contain', display: 'block' }}
              />
              <IconButton onClick={() => changeIndex(index + 1)} style={{ opacity: 0.5, flexShrink: 0 }}>
                <ChevronRightIcon />
              </IconButton>
            </div>
          </Fade>

          <Dots images={props.images} index={index} accent={accent} onChange={changeIndex} />

          <div style={{ textAlign: 'center' }}>
            <Typography variant='subtitle2' style={{ color: accent, fontWeight: 600 }}>
              {current.title}
            </Typography>
            <Typography variant='caption' style={{ opacity: 0.45 }}>
              {current.subtitle}
            </Typography>
          </div>
        </div>
      )}

      {/* Inline slider */}
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          width: props.width ?? '100%',
          maxWidth: '100%',
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'rgba(255,255,255,0.03)',
        }}
      >
        <Fade in={visible} timeout={FADE_MS}>
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <Image
              src={current.img}
              style={{
                width: '100%',
                height: props.height,
                maxWidth: '100%',
                maxHeight: '70vh',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>
        </Fade>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 12px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <IconButton size='small' onClick={() => changeIndex(index - 1)} style={{ opacity: 0.5 }}>
            <ChevronLeftIcon fontSize='small' />
          </IconButton>

          <Dots images={props.images} index={index} accent={accent} onChange={changeIndex} />

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size='small' onClick={() => changeIndex(index + 1)} style={{ opacity: 0.5 }}>
              <ChevronRightIcon fontSize='small' />
            </IconButton>
            <IconButton size='small' onClick={() => setFullscreen(true)} style={{ opacity: 0.4 }}>
              <FullscreenIcon fontSize='small' />
            </IconButton>
          </div>
        </div>

        <div style={{ padding: '10px 16px 14px' }}>
          <Typography variant='subtitle2' style={{ color: accent, fontWeight: 600 }}>
            {current.title}
          </Typography>
          <Typography variant='caption' style={{ opacity: 0.45 }}>
            {current.subtitle}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
