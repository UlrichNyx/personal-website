import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import Image from '../../../comps/Image';
import TextLink from '../../../comps/TextLink';
import Screenshot from '../../../assets/amichallenger.png';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CloudIcon from '@mui/icons-material/Cloud';
import ApiIcon from '@mui/icons-material/Api';
import BarChartIcon from '@mui/icons-material/BarChart';

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
      <Stat label='Period' value='2022–2023' color={Colors.idleYellow} />
      <Stat label='Type' value='Side Project' color={Colors.idleYellow} />
      <Stat label='Live at' value='amichallengeryet.com' color={Colors.onlineGreen} url='https://amichallengeryet.com/' />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>STACK</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          <Chip label='ChakraUI' icon={<SportsEsportsIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='RIOT API' icon={<ApiIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='AWS' icon={<CloudIcon fontSize='inherit' />} color={Colors.idleYellow} />
          <Chip label='Google Analytics' icon={<BarChartIcon fontSize='inherit' />} color={Colors.idleYellow} />
        </div>
      </div>
    </div>
  ),
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Over the Christmas break I worked on a project I had been thinking about for a while. After
        years of playing League of Legends and reaching around 700 LP Grandmaster, I had a few burning
        questions: Am I Challenger Yet? How many games until I get there? How many consecutive wins do
        I need? This tool answers them — and introduced me to the RIOT API ecosystem.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.idleYellow}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.idleYellow, fontWeight: 'bold' }}>The Stack</Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Wanting to challenge myself, I dropped my usual MUI setup for something new.
        </Typography>
        <LogoSlider show={true} logos={['ChakraUI', 'Google Analytics', 'Riot Games API', 'Ko-fi', 'AWS']} />
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.8 }}>
          <TextLink color={Colors.balanceTurqoise} url='https://chakra-ui.com/'>ChakraUI</TextLink> — visual component framework, discovered through{' '}
          <TextLink color={Colors.idleYellow} url='https://www.craftz.dog/'>Takuya Matsuyama</TextLink>.{' '}
          <TextLink color={Colors.dndRed} url='https://developer.riotgames.com/'>Riot Games API</TextLink> — player and rank data.{' '}
          <TextLink color={Colors.idleYellow} url='https://analytics.google.com/'>Google Analytics</TextLink> — traffic and usage insights.{' '}
          <TextLink color={Colors.hyperlinkBlue} url='https://ko-fi.com/'>Ko-fi</TextLink> — keeps the service running.
        </Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          AWS handled the full deployment stack:{' '}
          <TextLink color={Colors.blurple} url='https://aws.amazon.com/route53/'>Route 53</TextLink> for domain registration,{' '}
          <TextLink color={Colors.dndRed} url='https://aws.amazon.com/certificate-manager/'>Certificate Manager</TextLink> for SSL,{' '}
          <TextLink color={Colors.vsBlue} url='https://aws.amazon.com/vpc/'>VPC</TextLink> for IPv4/IPv6,{' '}
          and <TextLink color={Colors.idleYellow} url='https://aws.amazon.com/ec2/'>EC2</TextLink> for the server and load balancers.
          The Node.js package <strong>pm2</strong> runs the app as a background process in production:
        </Typography>
        <Code>{'>   pm2 start app.js'}</Code>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.balanceTurqoise}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.balanceTurqoise, fontWeight: 'bold' }}>The Calculations</Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          The backend makes 4 RIOT API calls. First, the LP cutoff for Challenger:
        </Typography>
        <Code>{'https://${server}.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${api_key}'}</Code>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Then the player&apos;s identity and rank:
        </Typography>
        <Code>{'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${api_key}'}</Code>
        <Code>{'https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${api_key}'}</Code>
        <Code>{'https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${api_key}'}</Code>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Iron IV to Master = <strong>4 divisions × 100 LP × 7 tiers = 2800 LP</strong>. Total LP to
          Challenger = 2800 + LP target. The percentage shown is the player&apos;s progress toward
          that total.
        </Typography>
        <Image src={Screenshot} style={{ borderRadius: 6, maxWidth: '100%' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '14px 18px', borderLeft: `3px solid ${Colors.onlineGreen}`, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <Typography variant='subtitle1' style={{ color: Colors.onlineGreen, fontWeight: 'bold' }}>What&apos;s Next</Typography>
        <Typography variant='body2' style={{ opacity: 0.65, lineHeight: 1.7 }}>
          Serverless via <TextLink color={Colors.idleYellow} url='https://aws.amazon.com/lambda/'>AWS Lambda</TextLink> would be a natural next step, removing the need for a persistent EC2 instance.
          Other planned improvements: Riot account login with caching, autocomplete on the search bar,
          win-rate projections, and a React Native port. Inspired by{' '}
          <TextLink color={Colors.idleYellow} url='https://www.op.gg/'>op.gg</TextLink>,{' '}
          <TextLink color={Colors.idleYellow} url='https://u.gg/'>u.gg</TextLink>, and{' '}
          <TextLink color={Colors.idleYellow} url='https://porofessor.gg/'>Porofessor</TextLink>.
        </Typography>
      </div>

    </div>
  ),
};

export default { ...content };
