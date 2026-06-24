import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ImageSlider from '../../../comps/ImageSlider';
import ExtensionIcon from '@mui/icons-material/Extension';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SS1 from '../../../assets/gamejam/QHVNZW.png';
import SS2 from '../../../assets/gamejam/P4kRzG.png';
import SS3 from '../../../assets/gamejam/t8hUXV.png';

const screenshots = [
  { img: SS1, title: 'Windsor', subtitle: 'The lonely town of Windsor.' },
  { img: SS2, title: 'Windsor', subtitle: '' },
  { img: SS3, title: 'Windsor', subtitle: '' },
];

const Stat = ({ label, value, color, url }: { label: string; value: string; color: string; url?: string }): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>
      {label.toUpperCase()}
    </Typography>
    <Typography
      variant='body2'
      style={{ color, fontWeight: 'bold', cursor: url !== undefined ? 'pointer' : 'default', textDecoration: url !== undefined ? 'underline' : 'none' }}
      onClick={url !== undefined ? () => window.open(url, '_blank') : undefined}
    >
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


const content = {
  description: '',
  sidebar: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stat label='Period' value='2025' color={Colors.idleYellow} />
      <Stat label='Game Jam' value='Pirate Software GJ14' color={Colors.idleYellow} />
      <Stat label='Genre' value='Puzzle / Narrative' color={Colors.hyperlinkBlue} />
      <Stat label='Theme' value='Freedom' color={Colors.onlineGreen} />
      <Stat label='Play' value='itch.io' color={Colors.boostPink} url='https://ulrichnyx.itch.io/freedom-v10' />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>TAGS</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='Puzzle' icon={<ExtensionIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='Narrative' icon={<MenuBookIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='Freedom V1.0' icon={<LockOpenIcon fontSize='inherit' />} color={Colors.idleYellow} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: '16px 20px',
        borderLeft: `3px solid ${Colors.idleYellow}`,
        backgroundColor: 'rgba(255,255,255,0.02)',
        fontStyle: 'italic',
      }}>
        <Typography style={{ lineHeight: 1.8, fontStyle: 'italic', opacity: 0.9 }}>Welcome to the lonely town of Windsor!</Typography>
        <Typography style={{ lineHeight: 1.8, fontStyle: 'italic', opacity: 0.9 }}>Population: 5 <em>(6 if you count the ghost)</em></Typography>
        <Typography style={{ lineHeight: 1.8, fontStyle: 'italic', opacity: 0.9 }}>
          Unfortunately, your stay will not be very long. The world is ending in 5 Days and it is up to you to stop it.
        </Typography>
        <Typography style={{ lineHeight: 1.8, fontStyle: 'italic', opacity: 0.9 }}>Why you?</Typography>
        <Typography style={{ lineHeight: 1.8, fontStyle: 'italic', opacity: 0.65 }}>Don&apos;t ask me, I don&apos;t make up the rules!</Typography>
        <Typography style={{ lineHeight: 1.8, fontStyle: 'italic', opacity: 0.9 }}>Enjoy the quiet village life while trying to save the world!</Typography>
      </div>

      <ImageSlider images={screenshots} color={Colors.idleYellow} height={360} />

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Freedom V1.0 is a game jam submission for Pirate Software Game Jam 14, built in Unity over 2 weeks.
        The jam theme was <strong style={{ color: Colors.idleYellow }}>&ldquo;It&apos;s Spreading&rdquo;</strong>.
        The game features a cast of NPCs with full dialogue, and a variety of minigames including fishing to keep village life feeling alive.
      </Typography>

    </div>
  ),
};

export default { ...content };
