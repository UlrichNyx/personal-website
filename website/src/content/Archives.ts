import Colors from '../styles/Colors';

import { archiveTags } from './Tags';
import wedding from '../assets/homebrew/thumbnail.png';
import nightOwl from '../assets/pixelart/night_owl.png';
import { ProjectProps } from './Projects';

// Unlisted pages — accessible by URL but not shown in any listing
export const archives: ProjectProps[] = [
  {
    title: 'Pixel Art Mastery',
    subtitle: 'My journey so far into pixel art.',
    date: '17/04/2024',
    image: nightOwl,
    color: Colors.onlineGreen,
    tags: [archiveTags.arts[0]],
  },
  {
    title: 'Wedding night in the bowels of hell',
    subtitle: 'A D&D homebrew module.',
    date: '20/03/2023',
    image: wedding,
    color: Colors.dndRed,
    tags: [archiveTags.vgc[0]],
  },
];
