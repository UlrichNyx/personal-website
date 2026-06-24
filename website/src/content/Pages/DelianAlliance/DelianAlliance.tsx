import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

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
        <Stat label='Period' value='2024–2025' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Domain' value='Defense Technology' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Role' value='Full-Stack Developer' color={Colors.hyperlinkBlue} />
        <StatDivider />
        <Stat label='Region' value='Europe' color={Colors.onlineGreen} />
        <StatDivider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>FOCUS</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Chip label='Security-First' icon={<SecurityIcon fontSize='inherit' />} color={Colors.idleYellow} />
            <Chip label='Auditability' icon={<VerifiedUserIcon fontSize='inherit' />} color={Colors.idleYellow} />
            <Chip label='Full-Stack' icon={<AccountTreeIcon fontSize='inherit' />} color={Colors.idleYellow} />
          </div>
        </div>
      </div>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        The Delian Alliance is a defense technology initiative focused on building sovereign, scalable
        software infrastructure for European security contexts. Named after the ancient Athenian-led
        alliance that pooled resources across city-states to maintain collective strength, the modern
        Delian Alliance applies the same principle to software: shared capability, distributed
        resilience, and a firm belief that European defense cannot afford to depend on systems it does
        not own.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <HighlightRow
          label='Context'
          color={Colors.idleYellow}
          icon={<PublicIcon fontSize='small' />}
          body='The geopolitical landscape of the mid-2020s made the question of European technological sovereignty impossible to ignore. Critical defense systems running on foreign cloud infrastructure, procurement cycles measured in decades, and a software talent pipeline that historically flowed toward consumer tech rather than defense — these were the problems the Delian Alliance was built to address.'
        />
        <HighlightRow
          label='Technical Work'
          color={Colors.hyperlinkBlue}
          icon={<CodeIcon fontSize='small' />}
          body='Contributions spanned full-stack development with a focus on reliability, auditability, and security-first architecture. The stack was deliberately conservative — proven technologies over novel ones, explicit data flows over implicit magic, and a documentation culture that assumed the next developer would have no context whatsoever. Work included building internal tooling for operational data pipelines, designing access-control systems with fine-grained audit logging, and contributing to front-end interfaces that needed to function clearly under high-stress operational conditions.'
        />
        <HighlightRow
          label='Why It Matters'
          color={Colors.dndRed}
          icon={<SecurityIcon fontSize='small' />}
          body='Most software has a low floor for failure. A bug in a consumer app produces a bad user experience. In defense contexts, the tolerance for ambiguity, inconsistency, or unexpected behaviour is orders of magnitude lower. Working in this environment produced a permanent shift in how software quality is approached — not as a nice-to-have, but as the baseline expectation from the first line of code.'
        />
      </div>

    </div>
  ),
};

export default { ...content };
