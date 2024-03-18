import Colors from '../styles/Colors';
import Reset from '../assets/reset/reset.jpg';
import Space from '../assets/learningarcade/space.png';
import Southampton from '../assets/university/southampton.png';
import IB from '../assets/ib/ib.png';
import HarvardX from '../assets/harvardx/harvardx.jpeg';
import ACT from '../assets/act/act.jpeg';
import FLL from '../assets/fll/fll.png';
import Sylems from '../assets/sylems/sylems-logo.png';
import Vereselyum from '../assets/logo.png';
import AmIChallengerYet from '../assets/emblem-challenger.png';
import Kaedim from '../assets/kaedim/kaedim.jpg';
import { tags } from './Tags';
import { TagType } from '../comps/Tag';

export interface ProjectProps {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  color: string;
  tags: TagType[];
  backgroundColor?: string;
}

export const projects: ProjectProps[] = [
  {
    title: 'Vereselyum',
    subtitle: 'Unity Game Dev',
    date: '2023',
    image: Vereselyum,
    color: Colors.blurple,
    tags: [tags[0], tags[1], tags[2]],
    backgroundColor: Colors.vsAlmostBlack,
  },
  {
  title: 'Am I Challenger Yet',
  subtitle: 'Riot API Integration',
  date: '2024',
  image: AmIChallengerYet,
  color: Colors.idleYellow,
  tags: [tags[1], tags[2]],
  backgroundColor: Colors.vsBlack,
},
{
  title: 'Kaedim',
  subtitle: '3D Model Generation',
  date: '2023',
  image: Kaedim,
  color: Colors.brillianceCoral,
  tags: [tags[1]],
},
  {
    title: 'Learning Arcade',
    subtitle: 'Gamified learning',
    date: '2022-2023',
    image: Space,
    backgroundColor: Colors.vsAlmostBlack,
    color: Colors.onlineGreen,
    tags: [tags[0], tags[1]],
  },
  
  {
    title: 'Reset',
    subtitle: 'Fitness & Wellbeing',
    date: '2021-2023',
    image: Reset,
    color: Colors.boostPink,
    tags: [tags[1]],
  },


  {
    title: 'University of Southampton',
    subtitle: 'MEng in Computer Science',
    date: '2018-2022',
    image: Southampton,
    color: Colors.vsBlue,
    tags: [tags[0], tags[1], tags[2]],
  },


  {
    title: 'IB Diploma',
    subtitle: 'Secondary Education',
    date: '2016-2018',
    image: IB,
    color: Colors.hyperlinkBlue,
    backgroundColor: Colors.white,
    tags: [tags[0], tags[2]],
  },
  {
    title: 'HarvardX',
    subtitle: 'Intro to CS & Game Dev',
    date: '2018-2020',
    image: HarvardX,
    color: Colors.idleYellow,
    tags: [tags[0], tags[2]],
  },
  {
    title: 'ACT',
    subtitle: 'Intro to Robotics',
    date: '2017',
    image: ACT,
    color: Colors.dndRed,
    tags: [tags[2]],
  },
  {
    title: 'FLL',
    subtitle: 'First Lego League',
    date: '2013-2016',
    image: FLL,
    color: Colors.blurple,
    backgroundColor: Colors.white,
    tags: [tags[2]],
  },

];

export const includesTime = (value: string, time: string): boolean => {
  if (time.includes('-')) {
    const values = time.split('-');
    const numbers = values.map((v) => parseInt(v));
    if (value.includes('-')) {
      const tempValues = value.split('-');
      const tempNumbers = tempValues.map((v) => parseInt(v));
      for (const v of tempNumbers) {
        for (let i = 0; i <= numbers[1] - numbers[0]; i++) {
          if (numbers[0] + i === v) {
            return true;
          }
        }
      }
      return false;
    } else {
      for (let i = 0; i <= numbers[1] - numbers[0]; i++) {
        if (numbers[0] + i === parseInt(value)) {
          return true;
        }
      }
    }
    return false;
  } else {
    if (value.includes('-')) {
      const values = value.split('-');
      const numbers = values.map((v) => parseInt(v));
      for (let i = 0; i <= numbers[1] - numbers[0]; i++) {
        if (numbers[0] + i === parseInt(time)) {
          return true;
        }
      }
      return false;
    } else {
      return value === time;
    }
  }
};
