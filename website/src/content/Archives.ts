import Colors from '../styles/Colors';

import { archiveTags } from './Tags';
import website from '../assets/pwebsite/website-thumbnail.jpeg';
import kanagawa from '../assets/recollections/kanagawa.jpeg';
import wedding from '../assets/homebrew/thumbnail.jpeg';
import { ProjectProps } from './Projects';

export const archives: ProjectProps[] = [
  {
    title: 'Personal Website',
    subtitle: 'A deeper look into development.',
    date: '20/12/2022',
    image: website,
    color: Colors.hyperlinkBlue,
    tags: [archiveTags.science[0]],
  },
  {
    title: 'Recollections of a Drowned Mind',
    subtitle: 'A poem collection.',
    date: '18/02/2023',
    image: kanagawa,
    color: 'cornflowerblue',
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
