import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import { logos } from '../../../assets/home/logos/logos';

const content = {
  description:
    `Over the Christmas break I worked on a project which I had been thinking of for a while now. I have been playing League of Legends for a good part of my life now.
     After so many years of play I have managed to reach a somewhat professional level of gameplay, peaking at around 700 LP Grandmaster a couple of years ago. All throughout my time climbing in Master+
     I had a few burning questions which were simple (but tedious) to answer. Am I Challenger Yet? How many games until I get Challenger? How many consecutive wins do I need? Another thing that had grasped my interest during this time,
     were the various applications that built around RIOT's API. Websites like op.gg or in-game overlays like Porofessor. This interesting intersection between App development and competitive games is what scratched a curiosity in the back of my head.
     Statistical analysis combined with the complex characteristics of a game such as that of League of Legends. For the purposes of this post, I will keep things simple and only talk about the novel elements I introduced in my development pipeline\
    (as others are quite redundant and can be seen in other posts such as my Personal Website one).`,
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'2vh',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h4' style={{ color: Colors.idleYellow, paddingTop:'5vh' }}>
            1. The New Stack
      </Typography>
      <LogoSlider logos={['ChakraUI', 'Google Analytics', 'Riot Games API', 'Ko-fi']}/>
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
      <Typography>The Stack</Typography>


      <Typography>As you may have gathered, Am I Challenger Yet? is a very simple and straightforward tool which basically allows you to enter your Summoner Name and in return a calculation takes place which shows your current distance from Challenger.</Typography>
      
      <iframe style={{borderRadius:4, borderColor:Colors.idleYellow, alignSelf:'center'}} src="https://www.op.gg/summoners/eune/Suicun%C3%AA-EUNE" width="90%" height="585" scrolling="no"></iframe>
*/


export default { ...content };
