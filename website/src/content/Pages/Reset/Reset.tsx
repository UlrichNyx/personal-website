import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ImageSlider from '../../../comps/ImageSlider';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import StorageIcon from '@mui/icons-material/Storage';
import { adminImages, mobileImages } from './Images';
import LogoSlider from '../../../comps/LogoSlider';

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

const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 16,
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.08)',
  backgroundColor: 'rgba(255,255,255,0.03)',
  overflow: 'hidden',
};

const CardHeader = ({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
    <span style={{ color, display: 'flex', fontSize: 18 }}>{icon}</span>
    <Typography variant='subtitle1' style={{ color, fontWeight: 600 }}>{title}</Typography>
  </div>
);

const content = {
  description: '',
  sidebar: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stat label='Period' value='2022–2023' color={Colors.boostPink} />
      <Stat label='Role' value='Full-Stack Developer' color={Colors.boostPink} />
      <Stat label='Domain' value='Fitness & Wellbeing' color={Colors.hyperlinkBlue} />
      <Stat label='Type' value='Professional' color={Colors.onlineGreen} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>STACK</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='React' icon={<DesktopWindowsIcon fontSize='inherit' />} color={Colors.boostPink} />
          <Chip label='React Native' icon={<PhoneIphoneIcon fontSize='inherit' />} color={Colors.boostPink} />
          <Chip label='Node.js' icon={<StorageIcon fontSize='inherit' />} color={Colors.boostPink} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Reset is a fitness and wellbeing application I worked on full-stack, collaborating closely
        with the employer throughout the process. The project delivered three interconnected pieces:
        an admin web app, a customer-facing mobile app, and the backend server powering both.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', width: '100%' }}>
        <div style={cardStyle}>
          <CardHeader icon={<DesktopWindowsIcon fontSize='inherit' />} title='Admin App' color={Colors.boostPink} />
          <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
            Built in React, the admin app lets Reset employees create, edit, and manage content
            visible on the mobile app — including tags, videos, and a built-in content editor.
          </Typography>
          <ImageSlider images={adminImages} color={Colors.boostPink} />
        </div>

        <div style={cardStyle}>
          <CardHeader icon={<PhoneIphoneIcon fontSize='inherit' />} title='Mobile App' color={Colors.braveryPurple} />
          <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
            Built in React Native. Customers can create an account, set up a personalised profile,
            and browse content defined by admins.
          </Typography>
          <ImageSlider images={mobileImages} color={Colors.braveryPurple} />
        </div>
      </div>

      {/* <div style={{ ...cardStyle, minWidth: 'unset' }}>
        <CardHeader icon={<StorageIcon fontSize='inherit' />} title='Server' color={Colors.blurple} />
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          The backend is a Node.js + Express REST API serving both the admin web app and the
          customer mobile app from a single source of truth. Data is persisted in MongoDB, with
          Mongoose schemas defining the content model — videos, tags, user profiles, and
          subscription states.
        </Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Key capabilities include JWT-based authentication, role-aware middleware distinguishing
          admin and customer sessions, automated transactional emails via NodeMailer, and a Stripe
          integration handling subscription creation, webhook events, and payment lifecycle
          management. The server was containerised with Docker for consistent deployment across
          environments.
        </Typography>
        <LogoSlider show={true} logos={['React.js', 'Node.js', 'MongoDB', 'Docker', 'TypeScript', 'NodeMailer']} />
      </div> */}

    </div>
  ),
};

export default { ...content };
