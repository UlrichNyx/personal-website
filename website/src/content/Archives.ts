import Colors from '../styles/Colors';

import { archiveTags } from './Tags';
import website from '../assets/pwebsite/website-thumbnail.png';
import { ProjectProps } from './Projects';

export const archives: ProjectProps[] = [
  {
    title: 'Personal Website',
    subtitle: 'A deeper look into development',
    date: '20/12/2022',
    image: website,
    color: Colors.hyperlinkBlue,
    tags: [archiveTags.science[0]],
  },
];
