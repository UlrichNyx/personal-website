import Colors from '../../../styles/Colors';
import TabView, { TabType } from './TabView';
import TheatersIcon from '@mui/icons-material/Theaters';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const tabs: TabType[] = [
  {
    title: 'Mangas',
    color: Colors.braveryPurple,
    icon: <FilterDramaIcon />,
  },
  {
    title: 'Books',
    color: Colors.onlineGreen,
    icon: <MenuBookIcon />,
  },
  {
    title: 'Anime',
    color: Colors.brillianceCoral,
    icon: <CatchingPokemonIcon />,
  },
  {
    title: 'Movies',
    color: Colors.balanceTurqoise,
    icon: <TheatersIcon />,
  },
  {
    title: 'Series',
    color: Colors.idleYellow,
    icon: <PhotoCameraIcon />,
  },
  {
    title: 'Music',
    color: Colors.vsBlue,
    icon: <LibraryMusicIcon />,
  },
];

const content = {
  description:
    'This is the section of my website in which I will try to categorize every single piece of media I have a genuine interest in. Anything ranging from movies to video games to books to news articles. A significant part of the knowledge I wish to retain can be found here. I am striving to appoint a certain rating to each of these as I go along watching/listening/reading!',
  html: (
    <div style={{ width: '100%', marginTop: '5vh' }}>
      <TabView tabs={tabs} hideFilters />
    </div>
  ),
};

export default { ...content };
