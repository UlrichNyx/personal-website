import * as React from 'react';
import Colors from '../styles/Colors';
import Sylems from '../assets/home/SylemsNoStem.png';
import Cursor from '../assets/home/cursor.png';
import Image from './Image';
import { Typography } from '@mui/material';

import Din from '../assets/home/din.png';
import Nayru from '../assets/home/nayru.webp';
import Farore from '../assets/home/farore.webp';
import Triforce from '../assets/home/triforce.png';

const LootSecret: React.FunctionComponent = () => {
  const [found, setFound] = React.useState(false);
  const [uncovered, setUncovered] = React.useState(false);

  interface LootKeyType {
    [name: string]: LootPropsType;
  }

  interface LootPropsType {
    description: string;
    color: string;
    image: string;
  }

  const lootProps: LootKeyType = {
    Sylems: {
      description: 'The flower of legends, said to cure any disease!',
      color: Colors.sylemsBlue,
      image: Sylems,
    },
    'Orb of Courage': {
      description: 'A charm of luck from Farore!',
      color: Colors.onlineGreen,
      image: Farore,
    },
    'Orb of Wisdom': {
      description: 'Given to those deemed wise by Nayru!',
      color: Colors.blurple,
      image: Nayru,
    },
    'Orb of Power': {
      description: 'Din has recognized your prowess!',
      color: Colors.dndRed,
      image: Din,
    },
    Triforce: {
      description: 'Wow! That is very rare!',
      color: Colors.idleYellow,
      image: Triforce,
    },
  };
  const [lootIndex, setLootIndex] = React.useState(
    Object.keys(lootProps)[Math.floor(Math.random() * 5)],
  );
  return (
    <div style={{ height: '40vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={Cursor} style={{ width: 32, height: 32 }} />
        <Typography
          className='unselectable'
          style={{ cursor: 'pointer' }}
          onClick={() => setFound(true)}
        >
          You found{' '}
          <strong style={{ color: Colors.sylemsBlue, textDecoration: 'underline' }}>
            something
          </strong>
          !
        </Typography>
      </div>

      {found ? (
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1vw',
              marginTop: '1vh',
            }}
          >
            <Typography>
              You found a rare{' '}
              <strong style={{ color: lootProps[lootIndex].color }}>{lootIndex}</strong>!
            </Typography>
            <Image
              src={lootProps[lootIndex].image}
              style={{ width: 32, height: 32, cursor: 'pointer' }}
              onClick={() => setUncovered(true)}
            />
          </div>
        </div>
      ) : null}

      {uncovered ? (
        <div style={{ marginTop: '1vh' }}>
          <Typography>{lootProps[lootIndex].description}</Typography>
        </div>
      ) : null}
    </div>
  );
};

export default LootSecret;
