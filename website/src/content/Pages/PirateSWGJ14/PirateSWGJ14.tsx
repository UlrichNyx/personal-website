import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExtensionIcon from '@mui/icons-material/Extension';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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
        <Stat label='Game Jam' value='Pirate Software GJ14' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Genre' value='Puzzle / Narrative' color={Colors.hyperlinkBlue} />
        <StatDivider />
        <Stat label='Theme' value='Freedom' color={Colors.onlineGreen} />
        <StatDivider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>TAGS</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Chip label='Puzzle' icon={<ExtensionIcon fontSize='inherit' />} color={Colors.idleYellow} />
            <Chip label='Narrative' icon={<MenuBookIcon fontSize='inherit' />} color={Colors.idleYellow} />
            <Chip label='Freedom V1.0' icon={<LockOpenIcon fontSize='inherit' />} color={Colors.idleYellow} />
          </div>
        </div>
      </div>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Pirate SW GJ 14 — subtitled Freedom V1.0 — is a game jam submission for Pirate Software Game
        Jam 14. The theme was Freedom, interpreted here not as an open world or a sandbox, but as the
        tension between constraint and liberation: a game about a prisoner who discovers that the walls
        of their cell are not the walls of their world.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <HighlightRow
          label='Theme Interpretation'
          color={Colors.idleYellow}
          icon={<AutoAwesomeIcon fontSize='small' />}
          body='The word &ldquo;Freedom&rdquo; is easy to misread as an instruction to build something vast. The design decision here was the opposite — to make the space small and the meaning large. The player begins in a single room. Every puzzle they solve does not open a new door so much as reframe what the room already contained. By the end, nothing has physically changed. Everything has.'
        />
        <HighlightRow
          label='Mechanics'
          color={Colors.hyperlinkBlue}
          icon={<ExtensionIcon fontSize='small' />}
          body='Freedom V1.0 is built around environmental observation and lateral thinking. There are no inventory systems, no combat, and no timers. The puzzles reward patience and attention rather than reflexes. The &ldquo;V1.0&rdquo; in the subtitle is itself a mechanic — the game positions its own existence as a prototype, and the ending reflects that framing directly.'
        />
        <HighlightRow
          label='Reflection'
          color={Colors.onlineGreen}
          icon={<PsychologyIcon fontSize='small' />}
          body='Participating in Pirate Software Game Jams has become a valuable rhythm in the development calendar. The community is unusually supportive, the judging criteria push entries toward thoughtfulness over spectacle, and the time constraint consistently produces more interesting design decisions than unlimited development cycles. GJ14 was no exception.'
        />
      </div>

    </div>
  ),
};

export default { ...content };
