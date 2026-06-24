import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import TabView, { TabType } from './TabView';
import TheatersIcon from '@mui/icons-material/Theaters';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const tabs: TabType[] = [
  { title: 'Mangas', color: Colors.braveryPurple, icon: <FilterDramaIcon /> },
  { title: 'Books', color: Colors.onlineGreen, icon: <MenuBookIcon /> },
  { title: 'Anime', color: Colors.brillianceCoral, icon: <CatchingPokemonIcon /> },
  { title: 'Movies', color: Colors.balanceTurqoise, icon: <TheatersIcon /> },
  { title: 'Series', color: Colors.idleYellow, icon: <PhotoCameraIcon /> },
  { title: 'Music', color: Colors.vsBlue, icon: <LibraryMusicIcon /> },
];

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

const content = {
  description: '',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', width: '100%' }}>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', flexWrap: 'wrap', alignItems: 'center' }}>
        <Stat label='Updated' value='Ongoing' color={Colors.braveryPurple} />
        <StatDivider />
        <Stat label='Type' value='Media Collection' color={Colors.braveryPurple} />
        <StatDivider />
        <Stat label='Categories' value='6' color={Colors.idleYellow} />
        <StatDivider />
        <Stat label='Rating System' value='Personal' color={Colors.onlineGreen} />
      </div>

      <Typography style={{ opacity: 0.75, lineHeight: 1.7 }}>
        Every piece of media I have a genuine interest in, categorised and rated. Anything from
        movies and anime to books, manga, series, and music. A significant part of the knowledge and
        culture I wish to retain can be found here.
      </Typography>

      <TabView tabs={tabs} hideFilters />

    </div>
  ),
};

export default { ...content };
