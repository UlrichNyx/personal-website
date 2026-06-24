import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import { images } from './Images';
import ImageSlider from '../../../comps/ImageSlider';

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

const Chip = ({ label, color }: { label: string; color: string }): JSX.Element => {
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
      <Stat label='Period' value='2022' color={Colors.onlineGreen} />
      <Stat label='Type' value='Internship' color={Colors.onlineGreen} />
      <Stat label='Domain' value='EdTech / Gamification' color={Colors.hyperlinkBlue} />
      <Stat label='Location' value='Southampton, UK' color={Colors.idleYellow} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>STACK</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='React' color={Colors.onlineGreen} />
          <Chip label='MUI' color={Colors.onlineGreen} />
          <Chip label='Gamification' color={Colors.onlineGreen} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        An internship directly after graduation focused on applying gamification to education. The
        goal was to build a Kahoot-style platform where students create accounts and compete on
        subject-based quizzes. I was primarily responsible for the front-end and contributed to
        the research and documentation side of the project.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.braveryPurple}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.braveryPurple, fontWeight: 'bold' }}>Front-End</Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Built with React and MUI, the front-end covered the full student journey — registration,
          login, quiz lobby, live question rounds with a countdown timer, and a post-game leaderboard.
          The interface was designed to feel competitive and responsive, adapting to different screen sizes.
        </Typography>
        <ImageSlider images={images} color={Colors.braveryPurple} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.onlineGreen}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.onlineGreen, fontWeight: 'bold' }}>Research & Conference</Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          The project included a literary review on gamification in education and a focus group
          study on how students perceive leaderboards, road maps, and other game mechanics. Key
          findings from the study:
        </Typography>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            'Leaderboards are best limited to the top 5 rather than the full cohort',
            'Users should be able to opt out of leaderboard visibility',
            'Road maps were the most positively received mechanic',
          ].map((point) => (
            <li key={point}>
              <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>{point}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          As part of the project&apos;s funding, the team presented findings at the{' '}
          <strong
            style={{ color: Colors.onlineGreen, cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => window.open('https://www.southampton.ac.uk/blog/sussed-news/2022/09/08/2022-chep-festival-of-learning-and-teaching-one-week-to-go/')}
          >
            CHEP Conference of Learning
          </strong>
          {' '}in Southampton, September 2022. A recording of the presentation is available below.
        </Typography>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 6, overflow: 'hidden' }}>
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            src='https://www.youtube.com/embed/t6JUlq-ywug?start=1443'
            title='CHEP 2022 presentation'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true}
          />
        </div>
      </div>

    </div>
  ),
};

export default { ...content };
