import React from 'react';
import Typography from '@mui/material/Typography';
import Screenshot from '../../../assets/crystalai/screenshot.png';
import LogoSlider from '../../../comps/LogoSlider';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';

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

const StatDivider = (): JSX.Element => (
  <div style={{ width: 1, height: 32, backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'center' }} />
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

const SectionHeader = ({ title, color }: { title: string; color: string }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{ width: 3, height: 24, backgroundColor: color, borderRadius: 2 }} />
    <Typography variant='h6' style={{ color, fontWeight: 'bold' }}>
      {title}
    </Typography>
  </div>
);

const content = {
  description: '',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', flexWrap: 'wrap', alignItems: 'center' }}>
        <Stat label='Period' value='2023–2024' color={Colors.blurple} />
        <StatDivider />
        <Stat label='Domain' value='Reinforcement Learning' color={Colors.blurple} />
        <StatDivider />
        <Stat label='Game' value='Pokémon Crystal' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Status' value='In Progress' color={Colors.dndRed} />
        <StatDivider />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Typography variant='caption' style={{ opacity: 0.4, letterSpacing: 1 }}>STACK</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Chip label='PyBoy' icon={<SportsEsportsIcon fontSize='inherit' />} color={Colors.blurple} />
            <Chip label='PyTorch' icon={<PsychologyIcon fontSize='inherit' />} color={Colors.blurple} />
            <Chip label='Python' icon={<CodeIcon fontSize='inherit' />} color={Colors.blurple} />
          </div>
        </div>
      </div>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Inspired by YouTube videos of AI algorithms trained to beat video games, this project uses
        a reinforcement learning approach to beat Pok&eacute;mon Crystal using PyBoy as the emulator
        and PyTorch for the model. This is a project in the making — updates will be posted as
        progress continues.
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
        <SectionHeader title='The New Stack' color={Colors.blurple} />
        <LogoSlider logos={['PyBoy', 'PyTorch']} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
        <SectionHeader title='Interfacing the emulator' color={Colors.blurple} />
        <Typography>
          PyBoy offers built-in functions that make interacting with the emulator significantly easier.
          Here is some code to get PyBoy started:
        </Typography>
        <Code language='python'>{`def setup_emulator():
    pyboy = PyBoy('pokemon_crystal.gbc')
    pyboy.set_emulation_speed(10)
    pokemon = pyboy.game_wrapper
    pokemon.start_game()
    return pyboy`}</Code>
        <img src={Screenshot} style={{ borderRadius: 4 }} />
        <Typography>
          Every call to <code>tick()</code> advances the emulator by exactly one frame. A small
          interface class handles button presses and releases cleanly across the codebase.
        </Typography>
        <Typography>
          As you can see it has not yet managed to leave the room yet :P (but it got close!)
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
        <SectionHeader title='The AI Model' color={Colors.blurple} />
        <Typography>
          Using a direct example from PyTorch&apos;s reinforcement learning documentation as the
          starting point:
        </Typography>
        <Code language='python'>
          {`import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import pyboy_interface

env = pyboy_interface.setup_emulator()
action_space = [0,1,2,3,4,5]

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

policy_net = PolicyNet()
optimizer = optim.Adam(policy_net.parameters(), lr=1e-2)

for episode in range(1000):
    env.game_wrapper.reset_game()
    done = False
    while not done:
        env.tick()
        state = env.game_area().astype('int32')
        state = torch.FloatTensor(state).unsqueeze(0)
        action_probs = policy_net(state)
        action = np.random.choice(
            np.arange(len(action_space)),
            p=action_probs.detach().numpy()[0][0]
        )
        pyboy_interface.make_choice(env, action)

pyboy.stop()`}
        </Code>
        <Typography>
          The model receives a 32x32 pixel array of the game area as input and outputs an action
          (0–5 mapping to A, B, UP, DOWN, LEFT, RIGHT). The next goal is a proper fitness function
          that rewards pixel-value changes — effectively rewarding movement.
        </Typography>
      </div>

    </div>
  ),
};

export default { ...content };
