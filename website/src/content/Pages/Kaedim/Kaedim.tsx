import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Code from '../../../comps/Code';
import LogoSlider from '../../../comps/LogoSlider';
import { logos } from '../../../assets/home/logos/logos';
import ThreeDModel from '../../../comps/3DModel';
import SuicuneModel from '../../../assets/suicune.glb';

const content = {
  description:'',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'2vh',
        justifyContent: 'center',
      }}
    >
      <Typography>Below is a display of a 3D model of Suicune (from models-resource.com) using ThreeJS! </Typography>
        <ThreeDModel modelPath={SuicuneModel}/>
      <Typography>Hey! This post is still under construction. In order to check out Kaedim please click below :3  </Typography>
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
