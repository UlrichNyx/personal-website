import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SchoolIcon from '@mui/icons-material/School';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const urls = {
  CS50: 'https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0',
  GD50: 'https://cs50.harvard.edu/games/2018/',
};

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

const HighlightRow = ({
  label,
  color,
  body,
  url,
  icon,
}: {
  label: string;
  color: string;
  body: string;
  url: string;
  icon: React.ReactNode;
}): JSX.Element => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '14px 18px',
      borderLeft: `3px solid ${color}`,
      backgroundColor: 'rgba(255,255,255,0.02)',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color, display: 'flex', opacity: 0.8 }}>{icon}</span>
        <Typography variant='subtitle2' style={{ color, fontWeight: 'bold' }}>
          {label}
        </Typography>
      </div>
      <Button
        size='small'
        variant='outlined'
        endIcon={<OpenInNewIcon fontSize='inherit' />}
        style={{ color, borderColor: color, opacity: 0.7, flexShrink: 0, textTransform: 'none' }}
        onClick={() => window.open(url)}
      >
        Learn more
      </Button>
    </div>
    <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
      {body}
    </Typography>
  </div>
);

const content = {
  description: '',
  sidebar: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stat label='CS50' value='2015' color={Colors.idleYellow} />
      <Stat label='GD50' value='2018' color={Colors.idleYellow} />
      <Stat label='Provider' value='HarvardX / CS50' color={Colors.hyperlinkBlue} />
      <Stat label='Format' value='Online Courses' color={Colors.onlineGreen} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>TOPICS</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='C Programming' icon={<CodeIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='Lua & Game Dev' icon={<VideogameAssetIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='CS Fundamentals' icon={<SchoolIcon fontSize='inherit' />} color={Colors.idleYellow} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        My first real interaction with programming — excluding the block-based code in LEGO Mindstorms — came through
        the CS50 course in 2015. It introduced me to C, Big O notation, cryptography, and the foundations of computer
        science. A few years later, GD50 brought me into game scripting with Lua, rebuilding classics like Pong,
        Super Mario, Zelda, and Pok&eacute;mon from scratch.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <HighlightRow
          label='CS50: Introduction to Computer Science'
          color={Colors.hyperlinkBlue}
          icon={<CodeIcon fontSize='small' />}
          body='An introduction to the intellectual enterprises of computer science and the art of programming. Topics included abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. The course used C as its primary teaching language alongside some Python, SQL, and web technologies.'
          url={urls.CS50}
        />
        <HighlightRow
          label='GD50: Introduction to Game Development'
          color={Colors.idleYellow}
          icon={<SportsEsportsIcon fontSize='small' />}
          body='A hands-on course focused on the fundamentals of 2D game development using the Lua scripting language and the LÖVE2D framework. Each week involved recreating a classic game from scratch — Pong, Breakout, Match-3, Super Mario, Zelda, Angry Birds, Pok&eacute;mon, and more — building an intuition for game design patterns, state machines, and animation.'
          url={urls.GD50}
        />
      </div>

    </div>
  ),
};

export default { ...content };
