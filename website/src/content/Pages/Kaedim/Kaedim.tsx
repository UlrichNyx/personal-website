import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import ThreeDModel from '../../../comps/3DModel';
import SuicuneModel from '../../../assets/suicune.glb';
import TextLink from '../../../comps/TextLink';
import View3DIcon from '@mui/icons-material/ViewInAr';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

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
      <Stat label='Period' value='2023' color={Colors.brillianceCoral} />
      <Stat label='Location' value='London, UK' color={Colors.brillianceCoral} />
      <Stat label='Role' value='Full-Stack Developer' color={Colors.hyperlinkBlue} />
      <Stat label='Domain' value='3D AI Generation' color={Colors.idleYellow} />
      <Stat label='Website' value='kaedim3d.com' color={Colors.onlineGreen} url='https://www.kaedim3d.com/' />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>STACK</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='ThreeJS' icon={<View3DIcon fontSize='inherit' />} color={Colors.brillianceCoral} />
          <Chip label='MySQL' icon={<StorageIcon fontSize='inherit' />} color={Colors.brillianceCoral} />
          <Chip label='ElectronJS' icon={<CodeIcon fontSize='inherit' />} color={Colors.brillianceCoral} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        In the latter half of 2023 I worked as a full-stack developer at Kaedim, a startup based
        in London focused on AI-powered 3D model generation from 2D images. I collaborated with
        software and machine learning engineers and picked up a range of new frameworks in the process.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.brillianceCoral}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.brillianceCoral, fontWeight: 'bold' }}>The Stack</Typography>
        <LogoSlider show={true} logos={['Blender', 'Discord', 'Tailwind CSS', 'ThreeJS', 'OpenAI', 'MySQL', 'Kaedim API', 'Cypress', 'Jest', 'CloudFlare', 'ElectronJS']} />
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.8 }}>
          <TextLink color={Colors.onlineGreen} url='https://openai.com/blog/openai-api'>OpenAI</TextLink> covers both ChatGPT and DALL·E integrations.{' '}
          <TextLink color={Colors.brillianceCoral} url='https://www.kaedim3d.com/integrate'>Kaedim API</TextLink> involved helping customers integrate the generation pipeline into their own solutions.{' '}
          <TextLink color={Colors.braveryPurple} url='https://discord.js.org/'>Discord.js</TextLink> powered the Discord bot integration.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.hyperlinkBlue}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.hyperlinkBlue, fontWeight: 'bold' }}>3D Viewer</Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          ThreeJS powers Kaedim&apos;s in-browser model viewer. Below is an interactive render of
          Suicune (via models-resource.com) — drag to orbit, scroll to zoom.
        </Typography>
        <ThreeDModel modelPath={SuicuneModel} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.idleYellow}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.idleYellow, fontWeight: 'bold' }}>What is Kaedim?</Typography>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 6, overflow: 'hidden' }}>
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            src='https://www.youtube.com/embed/eOc_aFxux4w?si=ewNKms8d5zfSQt5i'
            title='Kaedim demo'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen={true}
          />
        </div>
      </div>

    </div>
  ),
};

export default { ...content };
