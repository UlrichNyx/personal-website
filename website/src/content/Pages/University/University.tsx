import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const moduleURL = 'https://www.southampton.ac.uk/courses/modules/';

const modules = {
  'Year 1': {
    color: Colors.vsBlue,
    items: [
      { name: 'Computer Systems I', code: 'COMP1203' },
      { name: 'Foundations of Computer Science', code: 'COMP1215' },
      { name: 'Professional Development', code: 'COMP1205' },
      { name: 'Programming I', code: 'COMP1202' },
      { name: 'Algorithmics', code: 'COMP1201' },
      { name: 'Data Management', code: 'COMP1204' },
      { name: 'Software Modelling & Design', code: 'COMP1216' },
      { name: 'Programming II', code: 'COMP2209' },
    ],
  },
  'Year 2': {
    color: Colors.hyperlinkBlue,
    items: [
      { name: 'Intelligent Systems', code: 'COMP2208' },
      { name: 'Interaction Design', code: 'COMP2213' },
      { name: 'Programming III', code: 'COMP2209' },
      { name: 'Theory of Computing', code: 'COMP2210' },
      { name: 'Advanced Software Modelling & Design', code: 'COMP2214' },
      { name: 'Programming Language Concepts', code: 'COMP2212' },
      { name: 'Distributed Systems and Networks', code: 'COMP2207' },
      { name: 'Software Engineering Group Project', code: 'COMP2211' },
    ],
  },
  'Year 3': {
    color: Colors.balanceTurqoise,
    items: [
      { name: 'Engineering Management and Law', code: 'COMP3219' },
      { name: 'Game Design and Development', code: 'COMP3218' },
      { name: 'Machine Learning Technologies', code: 'COMP3222' },
      { name: 'Computational Biology', code: 'COMP3212' },
      { name: 'Natural Language Processing', code: 'COMP3225' },
      { name: 'Part III Individual Project', code: 'COMP3200' },
    ],
  },
  'Year 4': {
    color: Colors.blurple,
    items: [
      { name: 'Intelligent Agents', code: 'COMP6203' },
      { name: 'Group Design Project', code: 'FEEG6013' },
      { name: 'Biometrics', code: 'COMP6211' },
      { name: 'Biologically Inspired Robotics', code: 'ELEC6212' },
      { name: 'Image Processing', code: 'ELEC6213' },
      { name: 'Algorithmic Game Theory', code: 'COMP6207' },
    ],
  },
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

const ModuleLink = ({ name, code, color }: { name: string; code: string; color: string }): JSX.Element => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  return (
    <div
      onClick={() => window.open(moduleURL + code.trim(), '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '7px 14px',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
        <Typography variant='caption' style={{ color, opacity: 0.55, fontFamily: 'monospace', flexShrink: 0 }}>
          {code.trim()}
        </Typography>
        <Typography variant='body2' style={{ color: hovered ? color : 'inherit', transition: 'color 0.15s ease', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {name}
        </Typography>
      </div>
      <Typography
        variant='caption'
        style={{
          color,
          opacity: hovered ? 1 : 0.2,
          transform: hovered ? 'translateX(3px)' : 'none',
          transition: 'opacity 0.15s ease, transform 0.15s ease',
          flexShrink: 0,
        }}
      >
        →
      </Typography>
    </div>
  );
};

const YearGroup = ({
  year,
  color,
  items,
}: {
  year: string;
  color: string;
  items: Array<{ name: string; code: string }>;
}): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 220 }}>
    <Typography variant='caption' style={{ color, letterSpacing: 1, opacity: 0.8 }}>
      {year.toUpperCase()}
    </Typography>
    {items.map((m) => (
      <ModuleLink key={m.code} name={m.name} code={m.code} color={color} />
    ))}
  </div>
);

const content = {
  description: '',
  sidebar: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stat label='Period' value='2018–2022' color={Colors.vsBlue} />
      <Stat label='Location' value='Southampton, UK' color={Colors.vsBlue} />
      <Stat label='Degree' value='MEng Computer Science' color={Colors.hyperlinkBlue} />
      <Stat label='Result' value='First Class Honours' color={Colors.idleYellow} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>FOCUS AREAS</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='Machine Learning' icon={<PsychologyIcon fontSize='inherit' />} color={Colors.vsBlue} />
          <Chip label='Game Design' icon={<SportsEsportsIcon fontSize='inherit' />} color={Colors.vsBlue} />
          <Chip label='Distributed Systems' icon={<AccountTreeIcon fontSize='inherit' />} color={Colors.vsBlue} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        In September 2018 I began my MEng in Computer Science at the University of Southampton.
        Over four years of coursework, group projects, and an individual dissertation, I developed a
        broad foundation across systems, algorithms, AI, and software engineering — graduating with
        First Class Honours. Every module I undertook across all four years is listed below.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {Object.entries(modules).map(([year, { color, items }]) => (
          <YearGroup key={year} year={year} color={color} items={items} />
        ))}
      </div>

    </div>
  ),
};

export default { ...content };
