import { Typography } from '@mui/material';
import Screenshot from '../../../assets/crystalai/screenshot.png';
import LogoSlider from '../../../comps/LogoSlider';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';

const content = {
  description:`This is a project that I had been wanting to do for a while now. I drew inspiration from the multitude of YouTube videos where an AI algorithm is trained to beat a certain video game. 
  The gist of this project is, I am going to be using a reinforcement learning approach in order to beat Pokemon Crystal!`,
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'5vh',
        marginTop:'5vh',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h4' style={{ color: Colors.blurple, paddingTop:'5vh' }}>
           The New Stack
      </Typography>
      <LogoSlider logos={
  ['PyBoy', 'PyTorch']
      }/>
      <Typography>This is currently a project in the making, so I will make sure to update it as progress goes along!</Typography>

      <Typography variant='h4' style={{ color: Colors.blurple, paddingTop:'5vh' }}>
           Interfacing the emulator
      </Typography>
      <Typography>In order to begin working, we will need the emulator and a .rom file of the game!</Typography>
      <Typography>For the emulator, I am going to be using PyBoy which offers a lot of built in functions that will make our lives easier.</Typography>
      <Typography>As for the .rom file, that is a very simple Google search :3</Typography>
      <Typography>Here is some code to get PyBoy started up!</Typography>
      <Code language="python">{`
      def setup_emulator():
          pyboy = PyBoy('pokemon_crystal.gbc')
          pyboy.set_emulation_speed(10)
          pokemon = pyboy.game_wrapper
          pokemon.start_game()
          return pyboy`}</Code>
      <img src={Screenshot} style={{borderRadius:4}}/>
      <Typography>As you can see it has not yet managed to leave the room yet :P (but it got close!)</Typography>
    </div>
  ),
};


export default { ...content };
