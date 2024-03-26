import { Typography } from '@mui/material';
import Screenshot from '../../../assets/crystalai/screenshot.png';
import LogoSlider from '../../../comps/LogoSlider';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';

const content = {
  description: `This is a project that I had been wanting to do for a while now. I drew inspiration from the multitude of YouTube videos where an AI algorithm is trained to beat a certain video game. 
  The gist of this project is, I am going to be using a reinforcement learning approach in order to beat Pokemon Crystal!`,
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5vh',
        marginTop: '5vh',
        justifyContent: 'center',
        maxWidth: '90vw',
      }}
    >
      <Typography variant='h4' style={{ color: Colors.blurple, paddingTop: '5vh' }}>
        The New Stack
      </Typography>
      <LogoSlider logos={['PyBoy', 'PyTorch']} />
      <Typography>
        This is currently a project in the making, so I will make sure to update it as progress goes
        along!
      </Typography>

      <Typography variant='h4' style={{ color: Colors.blurple, paddingTop: '5vh' }}>
        Interfacing the emulator
      </Typography>
      <Typography>
        In order to begin working, we will need the emulator and a .rom file of the game!
      </Typography>
      <Typography>
        For the emulator, I am going to be using PyBoy which offers a lot of built in functions that
        will make our lives easier.
      </Typography>
      <Typography>As for the .rom file, that is a very simple Google search :3</Typography>
      <Typography>Here is some code to get PyBoy started up!</Typography>
      <Code language='python'>{`
      def setup_emulator():
          pyboy = PyBoy('pokemon_crystal.gbc')
          pyboy.set_emulation_speed(10)
          pokemon = pyboy.game_wrapper
          pokemon.start_game()
          return pyboy`}</Code>
      <img src={Screenshot} style={{ borderRadius: 4 }} />
      <Typography>
        The way I have thought of splitting up the classes of the project is as follows:
      </Typography>
      <Typography>
        <span style={{ fontWeight: 'bold' }}>Pyboy Interface</span>- There needs to be a small
        interface between pyboy and my program due to how ticking works in the emulator
      </Typography>
      <Typography>
        Essentially, every time the tick() function is called, the emulator plays exactly the next
        frame of the game.
      </Typography>
      <Typography>
        In different parts of the game, according to the input we want to achieve, we might need to
        press a button, tick for a certain amount (thus holding the button for a certain amount)
        then release.
      </Typography>
      <Typography>
        Creating an interface will allow us to do this multiple times with little to no code
        duplication.
      </Typography>
      <Typography>
        As you can see it has not yet managed to leave the room yet :P (but it got close!)
      </Typography>

      <Typography>
        The next class we need to think about is the AI model. For this, we will use a direct
        example from pytorch&#39;s reinforcement learning
      </Typography>
      <Code language='python'>
        {`
      
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import pyboy_interface

# Setting up the environment
env = pyboy_interface.setup_emulator()

action_space = [0,1,2,3,4,5,]

# Building the model
class PolicyNet(nn.Module):
    def __init__(self):
        super(PolicyNet, self).__init__()
        self.fc = nn.Sequential(
            nn.Linear(len(env.game_area()), len(env.game_area())),
            nn.ReLU(),
            nn.Linear(len(env.game_area()), len(action_space)),
            nn.Softmax(dim=-1)
        )
    
    def forward(self, x):
        return self.fc(x)

# Initializing the model and optimizer
policy_net = PolicyNet()
optimizer = optim.Adam(policy_net.parameters(), lr=1e-2)


# Training loop
for episode in range(1000):
    env.game_wrapper.reset_game()
    done = False
    while not done:
        env.tick()
        state = env.game_area().astype('int32')
        state = torch.FloatTensor(state).unsqueeze(0)
        action_probs = policy_net(state)
        action = np.random.choice(np.arange(len(action_space)), p=action_probs.detach().numpy()[0][0])
        # Find max probability and execute command
        pyboy_interface.make_choice(env, action)
        # Here we would calculate the loss and update the model
        
        # The loss function needs to reflect a change in pixel values

        # If the pixel values have changed from the previous tick, then we have done well



pyboy.stop()`}
      </Code>
      <Typography>
        In the code above, I build a model using some standard settings and have set the main game
        loop for that model, including feeding it the input and it giving me output in return (a
        number from 0 to 5 representing the inputs &#34;A&#34;, &#34;B&#34;, &#34;UP&#34;,
        &#34;DOWN&#34;, &#34;LEFT&#34;, &#34;RIGHT&#34;). (But no fitness function yet!)
      </Typography>
      <Typography>
        The input I am giving to the model at the moment is the 32x32 array of pixels that denote
        the game area, effectively the pixels surrounding the player.
      </Typography>
      <Typography>
        The next goal is to write a proper fitness function which will allow the player to traverse
        the map efficiently by rewarding a change of pixels!
      </Typography>
    </div>
  ),
};

export default { ...content };
