import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import cat from '../../../assets/cat-breakdancing.gif';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';

const url = 'https://steamcommunity.com/profiles/76561199438651149/';

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

const StatDivider = (): JSX.Element => (
  <div style={{ width: 1, height: 32, backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'center' }} />
);

const Chip = ({ label, icon, color }: { label: string; icon: React.ReactNode; color: string }): JSX.Element => {
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
        border: `1px solid ${color}`,
        borderRadius: 20,
        backgroundColor: hovered ? `${color}20` : 'transparent',
        boxShadow: hovered ? `0 0 10px ${color}30` : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'background-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease',
        cursor: 'default',
      }}
    >
      <span style={{ color, display: 'flex', fontSize: 15, opacity: hovered ? 1 : 0.6, transition: 'opacity 0.15s' }}>
        {icon}
      </span>
      <Typography variant='body2' style={{ color: hovered ? color : 'inherit', transition: 'color 0.15s ease', whiteSpace: 'nowrap' }}>
        {label}
      </Typography>
    </div>
  );
};

const content = {
  description: '',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%', alignItems: 'center' }}>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'flex-start' }}>
        <Stat label='Period' value='2022–present' color={Colors.brillianceCoral} />
        <StatDivider />
        <Stat label='Type' value='Game Studio' color={Colors.brillianceCoral} />
        <StatDivider />
        <Stat label='Status' value='In Development' color={Colors.idleYellow} />
        <StatDivider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>TOOLS</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Chip label='Unity' icon={<SportsEsportsIcon fontSize='inherit' />} color={Colors.brillianceCoral} />
            <Chip label='Godot' icon={<BuildIcon fontSize='inherit' />} color={Colors.brillianceCoral} />
            <Chip label='Team Project' icon={<GroupsIcon fontSize='inherit' />} color={Colors.brillianceCoral} />
          </div>
        </div>
      </div>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7, alignSelf: 'flex-start' }}>
        Vereselyum is a side project — a small game studio working on various Unity and Godot
        projects, some of which have been submitted to game jams. A dedicated website is planned
        once development is further along.
      </Typography>

      <Typography>Hey! This page is currently under construction! :3</Typography>
      <img src={cat} style={{ borderRadius: 4, width: 200 }} />
      <Typography>(Imagine the cat is the content for now)</Typography>

      <Typography>Here is our submission in the Pirate Software GameJam hosted in January 2024:</Typography>
      <Button
        variant='contained'
        style={{ color: Colors.white, backgroundColor: Colors.brillianceCoral, textTransform: 'none' }}
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => window.open('https://itch.io/jam/pirate/rate/2491773')}
      >
        itch.io
      </Button>

      <Typography>
        In the meantime, you can find the relevant Steam community profile{' '}
        <strong
          style={{ textDecoration: 'underline', color: Colors.blurple, cursor: 'pointer' }}
          onClick={() => window.open(url)}
        >
          here.
        </strong>
      </Typography>

      <Typography>
        In my Game Design and Development module in uni, I got the chance to develop two game
        prototypes which my teaching staff also got to playtest.
      </Typography>

      <Typography style={{ fontWeight: 'bold' }}>Nightly Ride to Nasyne</Typography>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/sJn1n7DsaBE?si=DBQi0PYwy1mWGdX9'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
      <Typography style={{ fontWeight: 'bold' }}>Horseman&apos;s Lair</Typography>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/cnyCBJMRvqE?si=jQQhm9ziZVOxJma3&amp;start=1913'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
    </div>
  ),
};

export default { ...content };
