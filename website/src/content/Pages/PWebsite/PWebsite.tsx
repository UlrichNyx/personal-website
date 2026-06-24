import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';
import FolderStructure from '../../../assets/pwebsite/folder-structure.png';
import FolderIcon from '@mui/icons-material/Folder';
import Image from '../../../comps/Image';
import ColorPalette from '../../../comps/ColorPalette';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import LanguageIcon from '@mui/icons-material/Language';

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

const content = {
  description: '',
  sidebar: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stat label='Period' value='2022–present' color={Colors.hyperlinkBlue} />
      <Stat label='Stack' value='React / TS / MUI' color={Colors.hyperlinkBlue} />
      <Stat label='Type' value='Personal Project' color={Colors.onlineGreen} />
      <Stat label='Hosted on' value='Vercel' color={Colors.idleYellow} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>STACK</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='React' icon={<CodeIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
          <Chip label='TypeScript' icon={<CodeIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
          <Chip label='MUI' icon={<PaletteIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
          <Chip label='Vercel' icon={<CloudDoneIcon fontSize='inherit' />} color={Colors.hyperlinkBlue} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        This website is a personal portfolio built from scratch with React, TypeScript, and MUI —
        running continuously since 2022 and evolving alongside each new role and project. The
        architecture is designed around a clean content model: adding a new page requires only a
        data entry and, optionally, a TSX file for custom layout.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 18px', borderLeft: `3px solid ${Colors.hyperlinkBlue}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FolderIcon fontSize='small' style={{ color: Colors.hyperlinkBlue, opacity: 0.8 }} />
          <Typography variant='subtitle1' style={{ color: Colors.hyperlinkBlue, fontWeight: 'bold' }}>Project Structure</Typography>
        </div>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          The source is organised into four top-level folders — each with a clear responsibility.
          Assets are grouped by the screen they belong to. Components are self-contained and
          reusable. Content holds the data layer: page metadata, project entries, and per-page TSX
          files for custom layouts. Screens are the top-level route components rendered by the router.
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '3vw', alignItems: 'flex-start', flexWrap: 'wrap', paddingTop: 4 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { label: 'assets', color: Colors.brillianceCoral },
              { label: 'comps', color: Colors.braveryPurple },
              { label: 'content', color: Colors.idleYellow },
              { label: 'screens', color: Colors.balanceTurqoise },
            ].map(({ label, color }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <FolderIcon fontSize='inherit' style={{ color, opacity: 0.7 }} />
                <Typography variant='body2' style={{ color, fontFamily: 'monospace' }}>{label}</Typography>
              </div>
            ))}
          </div>
          <Image src={FolderStructure} style={{ width: 160, height: 320, borderRadius: 4, opacity: 0.9 }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 18px', borderLeft: `3px solid ${Colors.braveryPurple}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <PaletteIcon fontSize='small' style={{ color: Colors.braveryPurple, opacity: 0.8 }} />
          <Typography variant='subtitle1' style={{ color: Colors.braveryPurple, fontWeight: 'bold' }}>Design System</Typography>
        </div>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          The entire UI runs on a global MUI dark theme — setting the mode once means all
          components adapt automatically, keeping the surface area for manual styling minimal.
          A fixed color palette is shared across every page to ensure visual consistency. You can
          copy any individual color to the clipboard by clicking it.
        </Typography>
        <ColorPalette />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 18px', borderLeft: `3px solid ${Colors.balanceTurqoise}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CodeIcon fontSize='small' style={{ color: Colors.balanceTurqoise, opacity: 0.8 }} />
          <Typography variant='subtitle1' style={{ color: Colors.balanceTurqoise, fontWeight: 'bold' }}>Content Architecture</Typography>
        </div>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Every portfolio entry is driven by a shared data structure — title, subtitle, image,
          colour, tags — rendered by a single <code>ContentPage</code> component that resolves
          the current route, looks up the matching entry, and injects custom JSX if a per-page
          content file exists. Routes follow the pattern:
        </Typography>
        <Code>/portfolio/Personal-Website</Code>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          This means adding a new project is a one-line change to the data file, and any page
          needing a richer layout — interactive components, image sliders, code blocks — gets
          its own TSX file that slots straight into the same shell.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '14px 18px', borderLeft: `3px solid ${Colors.idleYellow}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CloudDoneIcon fontSize='small' style={{ color: Colors.idleYellow, opacity: 0.8 }} />
          <Typography variant='subtitle1' style={{ color: Colors.idleYellow, fontWeight: 'bold' }}>Deployment</Typography>
        </div>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          The site is hosted on{' '}
          <strong style={{ cursor: 'pointer', textDecoration: 'underline', color: Colors.white }} onClick={() => window.open('https://vercel.com/dashboard')}>Vercel</strong>,
          with the GitHub repository wired directly to the production build — every push to
          main ships automatically. The custom domain is managed through Amazon Route 53,
          with DNS certificates configured through Vercel&apos;s domain settings.
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 4 }}>
          <LanguageIcon style={{ color: Colors.hyperlinkBlue, fontSize: 18 }} />
          <Typography
            variant='body2'
            style={{ textDecoration: 'underline', color: Colors.hyperlinkBlue, cursor: 'pointer' }}
            onClick={() => window.open('https://www.fkont.com')}
          >
            fkont.com
          </Typography>
        </div>
      </div>

    </div>
  ),
};

export default { ...content };
