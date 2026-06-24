import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import BiotechIcon from '@mui/icons-material/Biotech';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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

const HighlightRow = ({
  label,
  color,
  body,
  icon,
}: {
  label: string;
  color: string;
  body: string;
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
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ color, display: 'flex', opacity: 0.8 }}>{icon}</span>
      <Typography variant='subtitle2' style={{ color, fontWeight: 'bold' }}>
        {label}
      </Typography>
    </div>
    <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
      {body}
    </Typography>
  </div>
);

const content = {
  description: '',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', flexWrap: 'wrap', alignItems: 'center' }}>
        <Stat label='Period' value='2024' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Engine' value='Godot 4' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Genre' value='Survival Horror' color={Colors.dndRed} />
        <StatDivider />
        <Stat label='Format' value='Pirate Software Game Jam' color={Colors.onlineGreen} />
        <StatDivider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>TECH</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Chip label='Godot 4' icon={<SportsEsportsIcon fontSize='inherit' />} color={Colors.idleYellow} />
            <Chip label='Custom Shaders' icon={<BrushIcon fontSize='inherit' />} color={Colors.idleYellow} />
            <Chip label='GDScript' icon={<SmartToyIcon fontSize='inherit' />} color={Colors.idleYellow} />
          </div>
        </div>
      </div>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Symbiotic is a survival horror game developed for the Pirate Software Game Jam. The game
        explores the unsettling relationship between a lone survivor and the parasitic organism that
        has taken hold of them — a bond that is at once their greatest threat and their only means
        of survival. Built under jam pressure, Symbiotic pushes atmosphere, tension, and game feel
        into a compact but deliberately crafted experience.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <HighlightRow
          label='Concept'
          color={Colors.idleYellow}
          icon={<BiotechIcon fontSize='small' />}
          body='The central mechanic revolves around managing your symbiotic parasite. It feeds on fear — the more danger you are in, the more power it grants you. Stand still too long, explore too cautiously, and it turns on you. Sprint through the dark, face the horrors head-on, and it becomes a weapon. The design intent was to make the player feel perpetually uneasy, never quite sure whether their parasite is an ally or a predator waiting for the right moment.'
        />
        <HighlightRow
          label='Development'
          color={Colors.hyperlinkBlue}
          icon={<BuildIcon fontSize='small' />}
          body='Symbiotic was built in Godot 4 over the course of the jam window. The environment design leans heavily on darkness, sound design, and minimal UI to maintain immersion. A custom shader was written to simulate the parasite&apos;s visual presence — a creeping, organic distortion at the edges of the screen that intensifies as its influence grows. The jam format forced tight scoping decisions: rather than a sprawling horror game, Symbiotic is a focused single-level experience designed to be played in one sitting.'
        />
        <HighlightRow
          label='Takeaways'
          color={Colors.onlineGreen}
          icon={<LightbulbIcon fontSize='small' />}
          body='Game jams are a uniquely valuable format for sharpening instincts around scope, prioritisation, and polish under constraint. Symbiotic reinforced the lesson that atmosphere is almost entirely a product of sound and pacing — not polygon count or asset quality. The project is a strong candidate for post-jam expansion.'
        />
      </div>

    </div>
  ),
};

export default { ...content };
