import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import { logos } from '../../../assets/home/logos/logos';
import ContentPreview from '../../../comps/ContentPreview';
import { archives } from '../../../content/Archives';

const content = {
  description:
    `Over the Christmas break I worked on a project which I had been thinking of for a while now. I have been playing League of Legends for a good part of my life now.
     After so many years of play I have managed to reach a somewhat professional level of gameplay, peaking at around 700 LP Grandmaster a couple of years ago. All throughout my time climbing in Master+
     I had a few burning questions which were simple (but tedious) to answer. Am I Challenger Yet? How many games until I get Challenger? How many consecutive wins do I need? Another thing that had grasped my interest during this time,
     were the various applications that built around RIOT's API in order to offer statistical analysis tools for player comprehension or in-game overlays which gave slight tactical advantages. This interesting intersection between App development and competitive games is what scratched a curiosity in the back of my head.
     Statistical analysis combined with the complex characteristics of a game such as that of League of Legends. For the purposes of this post, I will keep things simple and only talk about the novel elements I introduced in my development pipeline.`,
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'3vh',
        justifyContent: 'center',
        alignItems:'center'
      }}
    >
      <Typography variant='h4' style={{ color: Colors.idleYellow, paddingTop:'5vh' }}>
           The New Stack
      </Typography>
      <Typography> Knowing that I wanted to challenge myself a bit with this project, I forced myself to use tools I have not used before and dropped my obsession with MaterialUI for another visual component framework.</Typography>
      <Typography> Most of the characteristics of my stack have remained the same however. If you are curious as to what they are then I got just the right thing for you!</Typography>

      <ContentPreview
                  {...archives[0]}
                  target='archives'
                  archive
                  onClick={() => window.open('https://fkont.com/')}
                />
      <LogoSlider logos={['ChakraUI', 'Google Analytics', 'Riot Games API', 'Ko-fi']}/>
      
      <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.balanceTurqoise,
              }}
              onClick={() => window.open('https://chakra-ui.com/')}
            >
              <Typography>ChakraUI</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which served as my new visual component framework. </Typography>
      
        </div>

        <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.idleYellow,
              }}
              onClick={() => window.open('https://analytics.google.com/')}
            >
              <Typography>Google Analytics</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which allowed me to gain insights on my tool&#39;s traffic and usage. </Typography>
      
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.dndRed,
              }}
              onClick={() => window.open('https://developer.riotgames.com/')}
            >
              <Typography>Riot Games API</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which provided me with the necessary data to work with. </Typography>
      
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
            <div
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: Colors.hyperlinkBlue,
              }}
              onClick={() => window.open('https://ko-fi.com/')}
            >
              <Typography>Ko-fi</Typography>
            </div>
            <Typography style={{textDecoration:'none', color:'white', marginLeft:5}}>{' '}- Which would allow me to earn donations to keep the service running. </Typography>
      
        </div>
        <div style={{marginTop:'5vh'}}/>
        <Typography> ChakraUI was a framework that I became aware of because of the wonderful <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://www.craftz.dog/')}>Takuya Matsuyama</span>.</Typography>
        <Typography> As for Ko-fi, it is a similar donation service to that of <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.brillianceCoral, textDecoration:'underline'}} onClick={() => window.open('https://www.patreon.com/')}>Patreon</span> which I learned about from the almighty <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://piratesoftware.wiki/wiki/Thor')}>Jason Thor Hall</span>.</Typography>
        <Typography> Both are equally amazing content creators in their own unique way so I would definitely recommend checking them out!</Typography>
        <Typography>Another part which was relatively novel to me was setting up AWS from front to back. Throughout the DevOps process I used a multitude of AWS tools namely:</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.blurple, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/route53/')}>Route53</span> was used in order to register the website&#39;s domain.</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.dndRed, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/certificate-manager/')}>Certificate Manager</span> was used to create a proper SSL certificate.</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.vsBlue, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/vpc/')}>VPC</span> which allowed for IPv4 and IPv6 connections.</Typography>
        <Typography> <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.idleYellow, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/ec2/')}>EC2</span> was used in order to keep the server running, set up load balancers etc.</Typography>
        
        <Typography> I even used <span style={{cursor:'pointer', fontWeight:'bold', color: Colors.onlineGreen, textDecoration:'underline'}} onClick={() => window.open('https://aws.amazon.com/aws-cost-management/aws-billing/')}>Billing and Cost Management</span>  to set up a budget alert.</Typography>

        <Typography>Finally the node.js package I used which facilitated the app running as a background process in a production environment was pm2.</Typography>
        <Typography>In fact, setting it up was super easy, all you have to do is install it and then just hit:</Typography>

        <Code>
          {'>   '}
        pm2 start app.js
        </Code>
        <Typography variant='h4' style={{ color: Colors.idleYellow, paddingTop:'5vh' }}>
          The Calculations
      </Typography>
      <Typography>...</Typography>
        <div style={{marginTop:'5vh'}}/>
        <Typography>Hey! This post is still under construction. In order to check out the product please click below :3  </Typography>
      <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.idleYellow,
            textTransform: 'none',
            alignSelf:'center'
          }}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => window.open('https://amichallengeryet.com/')}
        >
          {' '}
          Am I Challenger Yet?
        </Button>
    </div>
  ),
};

/*


      <Typography>As you may have gathered, Am I Challenger Yet? is a very simple and straightforward tool which basically allows you to enter your Summoner Name and in return a calculation takes place which shows your current distance from Challenger.</Typography>
      
      <iframe style={{borderRadius:4, borderColor:Colors.idleYellow, alignSelf:'center'}} src="https://www.op.gg/summoners/eune/Suicun%C3%AA-EUNE" width="90%" height="585" scrolling="no"></iframe>
*/


export default { ...content };
