import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MemoryIcon from '@mui/icons-material/Memory';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import RouteIcon from '@mui/icons-material/Route';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import StarIcon from '@mui/icons-material/Star';

const url = 'https://www.act.edu/cs130';

const Stat = ({ label, value, color }: { label: string; value: string; color: string }): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>
      {label.toUpperCase()}
    </Typography>
    <Typography variant='body2' style={{ color, fontWeight: 'bold' }}>
      {value}
    </Typography>
  </div>
);

const ChallengeChip = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}): JSX.Element => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 14px',
        border: `1px solid ${Colors.dndRed}`,
        borderRadius: 20,
        backgroundColor: hovered ? `${Colors.dndRed}20` : 'transparent',
        boxShadow: hovered ? `0 0 10px ${Colors.dndRed}30` : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'background-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease',
        cursor: 'default',
      }}
    >
      <span style={{ color: Colors.dndRed, display: 'flex', fontSize: 15, opacity: hovered ? 1 : 0.6, transition: 'opacity 0.15s' }}>
        {icon}
      </span>
      <Typography variant='body2' style={{ color: hovered ? Colors.dndRed : 'inherit', transition: 'color 0.15s ease', whiteSpace: 'nowrap' }}>
        {label}
      </Typography>
    </div>
  );
};

const content = {
  description: '',
  sidebar: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stat label='Period' value='Summer 2017' color={Colors.dndRed} />
      <Stat label='Location' value='Thessaloniki, GR' color={Colors.dndRed} />
      <Stat label='GPA' value='3.9 / 4.0' color={Colors.idleYellow} />
      <Stat label='Course' value='CS130' color={Colors.onlineGreen} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>PLATFORMS</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <ChallengeChip label='LEGO Mindstorms' icon={<SmartToyIcon fontSize='inherit' />} />
          <ChallengeChip label='Arduino' icon={<MemoryIcon fontSize='inherit' />} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>CHALLENGES</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <ChallengeChip label='Racing' icon={<SportsMotorsportsIcon fontSize='inherit' />} />
          <ChallengeChip label='Maze Traversal' icon={<RouteIcon fontSize='inherit' />} />
          <ChallengeChip label='Wrestling' icon={<SportsMmaIcon fontSize='inherit' />} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        During the summer of 2017 I undertook an official robotics course at the American College
        of Thessaloniki. Working with LEGO Mindstorms and Arduino platforms, we designed and
        programmed robots to compete across a series of real challenges — racing circuits, maze
        traversal, and head-to-head wrestling matches. The course concluded with a referral from
        the professor, Dr. Alexander Astaras.
      </Typography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          padding: '14px 18px',
          borderLeft: `3px solid ${Colors.dndRed}`,
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <StarIcon fontSize='small' style={{ color: Colors.idleYellow }} />
            <Typography variant='subtitle2' style={{ color: Colors.dndRed, fontWeight: 'bold' }}>
              CS130 — Introduction to Robotics
            </Typography>
          </div>
          <Button
            size='small'
            variant='outlined'
            endIcon={<OpenInNewIcon fontSize='inherit' />}
            style={{ color: Colors.dndRed, borderColor: Colors.dndRed, opacity: 0.8, flexShrink: 0, textTransform: 'none' }}
            onClick={() => window.open(url)}
          >
            Learn more
          </Button>
        </div>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Official course catalogue page for CS130 at the American College of Thessaloniki.
          Referral awarded by Dr. Alexander Astaras upon completion.
        </Typography>
      </div>

    </div>
  ),
};

export default { ...content };
