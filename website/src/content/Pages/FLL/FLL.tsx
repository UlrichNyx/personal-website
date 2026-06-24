import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MemoryIcon from '@mui/icons-material/Memory';
import SensorsIcon from '@mui/icons-material/Sensors';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FlareIcon from '@mui/icons-material/Flare';

const urls = {
  fll: 'https://www.firstlegoleague.org/',
  acstac: 'https://anatolia.edu.gr/el/highschool/drastiriotites/acstac',
  electric:
    'https://york.citycollege.eu/m/article.php?aid=1847&cid=180&t=The-International-Faculty-at-the-Electric-Circus-Festival',
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

const CompetitionRow = ({
  title,
  color,
  body,
  url,
  icon,
}: {
  title: string;
  color: string;
  body: string;
  url: string;
  icon: React.ReactNode;
}): JSX.Element => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: '16px 20px',
      borderLeft: `3px solid ${color}`,
      backgroundColor: 'rgba(255,255,255,0.02)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color, display: 'flex', opacity: 0.8 }}>{icon}</span>
        <Typography variant='subtitle1' style={{ color, fontWeight: 'bold' }}>
          {title}
        </Typography>
      </div>
      <Button
        size='small'
        variant='outlined'
        endIcon={<OpenInNewIcon fontSize='inherit' />}
        style={{ color, borderColor: color, opacity: 0.8, flexShrink: 0, textTransform: 'none' }}
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
      <Stat label='Period' value='2013 – 2016' color={Colors.blurple} />
      <Stat label='Location' value='Greece' color={Colors.hyperlinkBlue} />
      <Stat label='Field' value='Robotics' color={Colors.idleYellow} />
      <Stat label='Format' value='Competition' color={Colors.onlineGreen} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>PLATFORMS</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='LEGO Mindstorms' icon={<SmartToyIcon fontSize='inherit' />} color={Colors.blurple} />
          <Chip label='Arduino' icon={<MemoryIcon fontSize='inherit' />} color={Colors.blurple} />
          <Chip label='Light Sensors' icon={<SensorsIcon fontSize='inherit' />} color={Colors.blurple} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Ever since middle school, robotics has been a constant thread through my education. Over
        three years of competitions and festivals, I built and programmed robots as part of a team —
        learning to prototype quickly, work under pressure, and present technical work to judges and
        the public.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <CompetitionRow
          title='First Lego League'
          color={Colors.blurple}
          icon={<EmojiEventsIcon fontSize='small' />}
          body='Our team competed in the First Lego League, whose subject was the creation of robots that could assist humans in natural disaster scenarios. We designed, built, and programmed an autonomous LEGO Mindstorms robot and presented our solution to a panel of judges.'
          url={urls.fll}
        />
        <CompetitionRow
          title='ACSTAC'
          color={Colors.hyperlinkBlue}
          icon={<WbSunnyIcon fontSize='small' />}
          body='In the ACSTAC competition, our team built a robot equipped with solar panels that used light sensors to track the sun and position the panels at the optimal angle for maximum energy output — an early introduction to embedded systems thinking.'
          url={urls.acstac}
        />
        <CompetitionRow
          title='Electric Circus Festival'
          color={Colors.idleYellow}
          icon={<FlareIcon fontSize='small' />}
          body='Beyond formal competitions, we had the opportunity to present our robotics work at the Electric Circus Festival — an international event that brought together student projects from across Europe for public demonstration and peer exchange.'
          url={urls.electric}
        />
      </div>
    </div>
  ),
};

export default { ...content };
