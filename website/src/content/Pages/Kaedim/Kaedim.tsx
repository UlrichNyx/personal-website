import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import { logos } from '../../../assets/home/logos/logos';
import ThreeDModel from '../../../comps/3DModel';
import SuicuneModel from '../../../assets/suicune.glb';
import TextLink from '../../../comps/TextLink';

const content = {
  description:`In the latter half of 2023 I was employed as a full-stack developer at a groundbreaking startup based in London which focuses on full 3D model AI generation. 
  During this time, I had the opportunity to collaborate with excellent software and machine learning engineers and have learned a lot in the process. In this section I would like to bniefly showcase Kaedim's product,
  as well as to go through some of the skills or new frameworks I picked up while working there.`,
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'2vh',
        justifyContent: 'center',
        maxWidth:'90vw'
      }}
    >
            <Typography variant='h4' style={{ color: Colors.brillianceCoral, paddingTop:'5vh' }}>
           The New Stack
      </Typography>
      <Typography>These are the new frameworks that I learnt while working at Kaedim.</Typography>
      <LogoSlider logos={['Blender',
  'Discord',
  'Tailwind CSS',
  'ThreeJS',
  'OpenAI',
  'MySQL',
  'Kaedim API',
  'Cypress',
  'Jest', 'CloudFlare', 'ElectronJS']}/>

  <Typography> My work revolved around many fields so I will not go into too much detail however I will make a few clarifications.</Typography>
    <Typography> Regarding <TextLink color={Colors.onlineGreen} url="https://openai.com/blog/openai-api">OpenAI</TextLink>, I am referring to both ChatGPT and Dall-E integrations.</Typography>
      <Typography>In terms of <TextLink color={Colors.brillianceCoral} url="https://www.kaedim3d.com/integrate">Kaedim API</TextLink> , I was often responsible for helping customers integrate the Kaedim pipeline into their solutions.</Typography>
      <Typography>Finally in terms of Discord, I am referring to the <TextLink color={Colors.braveryPurple} url="https://discord.js.org/">Discord.js</TextLink> framework in particular.</Typography>
      <Typography>Below is a display of a 3D model of Suicune (from models-resource.com) using ThreeJS! </Typography>
        <ThreeDModel modelPath={SuicuneModel}/>
        <Typography variant='h4' style={{ color: Colors.brillianceCoral, paddingTop:'5vh' }}>
           What is Kaedim?
      </Typography>
      <Typography>Here is the most recent demo!</Typography>
      <iframe style={{alignSelf:'center', width:'90vw', minHeight:'100vh'}} src="https://www.youtube.com/embed/eOc_aFxux4w?si=ewNKms8d5zfSQt5i" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      <Typography>Hey! This post is still not 100% done. I am planning on updating it a bit once I have rigged the 3D model displayed above so stay tuned! :))  </Typography>
      <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.brillianceCoral,
            textTransform: 'none',
            alignSelf:'center'
          }}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => window.open('https://www.kaedim3d.com/')}
        >
          {' '}
          Kaedim
        </Button>
    </div>
  ),
};

/*
      <Typography>The Stack</Typography>


      <Typography>As you may have gathered, Am I Challenger Yet? is a very simple and straightforward tool which basically allows you to enter your Summoner Name and in return a calculation takes place which shows your current distance from Challenger.</Typography>
      
      <iframe style={{borderRadius:4, borderColor:Colors.idleYellow, alignSelf:'center'}} src="https://www.op.gg/summoners/eune/Suicun%C3%AA-EUNE" width="90%" height="585" scrolling="no"></iframe>
*/


export default { ...content };
