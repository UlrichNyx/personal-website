import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Button from '@mui/material/Button';
import BoltIcon from '@mui/icons-material/Bolt';
import FunctionsIcon from '@mui/icons-material/Functions';
import CodeIcon from '@mui/icons-material/Code';
import TranslateIcon from '@mui/icons-material/Translate';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CreateIcon from '@mui/icons-material/Create';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const urls = {
  ibo: 'https://ibo.org/programmes/diploma-programme/',
  physics: 'https://ibo.org/programmes/diploma-programme/curriculum/sciences/physics/',
  math: 'https://ibo.org/programmes/diploma-programme/curriculum/mathematics/',
  cs: 'https://ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/',
  spanish: 'https://ibo.org/programmes/diploma-programme/curriculum/language-acquisition/language-ab-initio-sl/',
  history: 'https://ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/history/',
  langlit: 'https://ibo.org/programmes/diploma-programme/curriculum/language-and-literature/language-a-literature-slhl/',
  tok: 'https://ibo.org/programmes/diploma-programme/curriculum/theory-of-knowledge/',
  cas: 'https://ibo.org/programmes/diploma-programme/curriculum/creativity-activity-and-service/',
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

const SubjectLink = ({
  name,
  url,
  color,
  icon,
}: {
  name: string;
  url: string;
  color: string;
  icon: React.ReactNode;
}): JSX.Element => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      onClick={() => window.open(url)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '8px 14px',
        border: `1px solid ${color}`,
        borderRadius: 4,
        backgroundColor: hovered ? `${color}20` : 'transparent',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        transform: hovered ? 'translateX(4px)' : 'none',
        boxShadow: hovered ? `0 0 12px ${color}30` : 'none',
        transition: 'background-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ color, opacity: hovered ? 1 : 0.5, display: 'flex', transition: 'opacity 0.15s ease', fontSize: 16 }}>
          {icon}
        </span>
        <Typography variant='body2' style={{ color: hovered ? color : 'inherit', transition: 'color 0.15s ease' }}>
          {name}
        </Typography>
      </div>
      <Typography
        variant='caption'
        style={{
          color,
          opacity: hovered ? 1 : 0.25,
          transform: hovered ? 'translateX(3px)' : 'none',
          transition: 'opacity 0.15s ease, transform 0.15s ease',
        }}
      >
        →
      </Typography>
    </div>
  );
};

const SubjectGroup = ({
  title,
  color,
  subjects,
}: {
  title: string;
  color: string;
  subjects: Array<{ name: string; url: string; icon: React.ReactNode }>;
}): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 140 }}>
    <Typography variant='caption' style={{ color, letterSpacing: 1, opacity: 0.8 }}>
      {title.toUpperCase()}
    </Typography>
    {subjects.map((s) => (
      <SubjectLink key={s.name} name={s.name} url={s.url} color={color} icon={s.icon} />
    ))}
  </div>
);

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
  url?: string;
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
      {url !== undefined && (
        <Button
          size='small'
          variant='outlined'
          endIcon={<OpenInNewIcon fontSize='inherit' />}
          style={{ color, borderColor: color, opacity: 0.7, flexShrink: 0, textTransform: 'none' }}
          onClick={() => window.open(url)}
        >
          Learn more
        </Button>
      )}
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
      <Stat label='Period' value='2016 – 2018' color={Colors.hyperlinkBlue} />
      <Stat label='Location' value='Greece' color={Colors.hyperlinkBlue} />
      <Stat label='Score' value='36 / 45' color={Colors.idleYellow} />
      <Stat label='Programme' value='IB Diploma' color={Colors.onlineGreen} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>CORE REQUIREMENTS</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='Theory of Knowledge' icon={<PsychologyIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
          <Chip label='Extended Essay' icon={<CreateIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
          <Chip label='CAS' icon={<VolunteerActivismIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        For secondary education I switched to the International Baccalaureate Diploma with the
        intention of studying abroad. The IB exposed me to rigorous academic writing, scientific
        experimentation, and a genuinely broad curriculum — from electromagnetic physics to Spanish
        and Theory of Knowledge — at a formative stage.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', flexWrap: 'wrap' }}>
        <SubjectGroup
          title='Higher Level'
          color={Colors.hyperlinkBlue}
          subjects={[
            { name: 'Physics', url: urls.physics, icon: <BoltIcon fontSize='inherit' /> },
            { name: 'Mathematics', url: urls.math, icon: <FunctionsIcon fontSize='inherit' /> },
            { name: 'Computer Science', url: urls.cs, icon: <CodeIcon fontSize='inherit' /> },
          ]}
        />
        <SubjectGroup
          title='Standard Level'
          color={Colors.balanceTurqoise}
          subjects={[
            { name: 'Spanish AB', url: urls.spanish, icon: <TranslateIcon fontSize='inherit' /> },
            { name: 'History', url: urls.history, icon: <HistoryEduIcon fontSize='inherit' /> },
            { name: 'Language A: Literature', url: urls.langlit, icon: <MenuBookIcon fontSize='inherit' /> },
          ]}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <HighlightRow
          label='Extended Essay — Physics'
          color={Colors.hyperlinkBlue}
          icon={<BoltIcon fontSize='small' />}
          body='A research paper comparing the electromagnetic fields produced by coils of different geometries, exploring how winding configuration affects field strength and uniformity. This introduced me to formal scientific writing and independent experimental design.'
        />
        <HighlightRow
          label='CAS — Community Volunteering'
          color={Colors.onlineGreen}
          icon={<VolunteerActivismIcon fontSize='small' />}
          body='As part of the Creativity, Activity, Service requirement, I volunteered in a programme that improved local community spaces — building wooden benches from raw materials, clearing public areas, and contributing to environmental upkeep over an extended period.'
          url={urls.cas}
        />
        <HighlightRow
          label='IA — Calculus Game in C++'
          color={Colors.balanceTurqoise}
          icon={<SportsEsportsIcon fontSize='small' />}
          body='For Computer Science, I built an educational game in C++ using the SFML library that taught introductory calculus concepts through interactive mechanics — combining software development with pedagogy as an Internal Assessment project.'
        />
        <HighlightRow
          label='IA — Arc Length Derivation (HL Math)'
          color={Colors.idleYellow}
          icon={<FunctionsIcon fontSize='small' />}
          body='For Higher Level Mathematics, my Internal Assessment derived a general formula for arc length through first principles — a rigorous exercise in real analysis that deepened my understanding of integration and mathematical proof.'
        />
      </div>
    </div>
  ),
};

export default { ...content };
