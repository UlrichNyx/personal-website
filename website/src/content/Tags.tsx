import Colors from '../styles/Colors';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

/*
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import AnimationIcon from '@mui/icons-material/Animation'
import BoltIcon from '@mui/icons-material/Bolt'
import ScienceIcon from '@mui/icons-material/Science'
import BiotechIcon from '@mui/icons-material/Biotech'
import PublicIcon from '@mui/icons-material/Public'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CalculateIcon from '@mui/icons-material/Calculate'
import LandscapeIcon from '@mui/icons-material/Landscape'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'

import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import SetMealIcon from '@mui/icons-material/SetMeal'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby'

import GamesIcon from '@mui/icons-material/Games'
import HistoryIcon from '@mui/icons-material/History'
import GavelIcon from '@mui/icons-material/Gavel'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'

import CheckroomIcon from '@mui/icons-material/Checkroom'
import NightlifeIcon from '@mui/icons-material/Nightlife'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import RestaurantIcon from '@mui/icons-material/Restaurant'

*/
import { TagType } from '../comps/Tag';
// Images
import DND from '../assets/tags/dnd.jpeg';

/*
import League from '../assets/lol.png'
import Valorant from '../assets/valorant.png'
import MTG from '../assets/mtg.png'
import WOW from '../assets/wow.png'
import Pokemon from '../assets/pokemon.jpeg'
import Minecraft from '../assets/minecraft.png'
import Genshin from '../assets/genshin.jpeg'
import Twitch from '../assets/twitch.png'

*/
export const tags = [
  {
    label: 'Game Dev',
    color: Colors.dndRed,
    isActive: true,
    icon: <VideogameAssetIcon style={{ color: 'white' }} />,
  },
  {
    label: 'App Dev',
    color: Colors.onlineGreen,
    isActive: true,
    icon: <PhoneIphoneIcon style={{ color: 'white' }} />,
  },
  {
    label: 'Software Eng',
    color: Colors.sylemsBlue,
    isActive: true,
    icon: <CodeIcon style={{ color: 'white' }} />,
  },
];

export const archiveTags: { [key: string]: TagType[] } = {
  science: [
    {
      label: 'Computer Science',
      color: Colors.sylemsBlue,
      isActive: true,
      icon: <TerminalIcon style={{ color: 'white' }} />,
    },
  ],

  vgc: [
    {
      label: 'Dungeons & Dragons',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: DND,
    },
  ],
  arts: [
    {
      label: 'The Library',
      color: Colors.onlineGreen,
      isActive: true,
      icon: <LocalLibraryIcon style={{ color: 'white' }} />,
    },
  ],
  wellbeing: [
    {
      label: 'Gym',
      color: Colors.idleYellow,
      isActive: true,
      icon: <FitnessCenterIcon style={{ color: 'white' }} />,
    },
  ],
  general: [
    {
      label: 'Travel',
      color: Colors.sylemsBlue,
      isActive: true,
      icon: <LocalAirportIcon style={{ color: 'white' }} />,
    },
  ],
};

/*  
      // SCIENCES
      {
      label: 'Electrical Engineering',
      color: Colors.idleYellow,
      isActive: true,
      icon: <BatteryChargingFullIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Physics',
      color: Colors.dndRed,
      isActive: true,
      icon: <BoltIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Chemistry',
      color: Colors.braveryPurple,
      isActive: true,
      icon: <ScienceIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Biology',
      color: Colors.onlineGreen,
      isActive: true,
      icon: <BiotechIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Mathematics',
      color: Colors.blurple,
      isActive: true,
      icon: <CalculateIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Earth Science',
      color: Colors.brillianceCoral,
      isActive: true,
      icon: <LandscapeIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Astronomy',
      color: Colors.hyperlinkBlue,
      isActive: true,
      icon: <AutoAwesomeIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Geography',
      color: Colors.balanceTurqoise,
      isActive: true,
      icon: <PublicIcon style={{ color: 'white' }} />,
    },

    /// VGC

        {
      label: 'League of Legends',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: League,
    },
    {
      label: 'Valorant',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: Valorant,
    },
    {
      label: 'Magic: The Gathering',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: MTG,
    },
    {
      label: 'World of Warcraft',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: WOW,
    },
    {
      label: 'Pokémon',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: Pokemon,
    },
    {
      label: 'Minecraft',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: Minecraft,
    },
    {
      label: 'Genshin Impact',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: Genshin,
    },

    // ARTS 

        {
      label: 'Visual Arts',
      color: Colors.streamerPurple,
      isActive: true,
      icon: <AnimationIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Music',
      color: Colors.sylemsBlue,
      isActive: true,
      icon: <MusicNoteIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Japanese',
      color: Colors.brillianceCoral,
      isActive: true,
      icon: <CurrencyYenIcon style={{ color: 'white' }} />,
    },

    // WELLBEING

        {
      label: 'Meditation',
      color: Colors.streamerPurple,
      isActive: true,
      icon: <SelfImprovementIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Diet',
      color: Colors.brillianceCoral,
      isActive: true,
      icon: <SetMealIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Aikido',
      color: Colors.sylemsBlue,
      isActive: true,
      icon: <DirectionsWalkIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Kendo',
      color: Colors.blurple,
      isActive: true,
    },
    {
      label: 'Horse Riding',
      color: Colors.boostPink,
      isActive: true,
      icon: <BedroomBabyIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Kyūdō',
      color: Colors.idleYellow,
      isActive: true,
    },

    // LIFE AND GENERAL

        {
      label: 'Cooking',
      color: Colors.onlineGreen,
      isActive: true,
      icon: <RestaurantIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Cleaning',
      color: Colors.balanceTurqoise,
      isActive: true,
      icon: <CleaningServicesIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Deportment',
      color: Colors.brillianceCoral,
      isActive: true,
    },
    {
      label: 'Drinking',
      color: Colors.streamerPurple,
      isActive: true,
      icon: <NightlifeIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Styling',
      color: Colors.idleYellow,
      isActive: true,
      icon: <CheckroomIcon style={{ color: 'white' }} />,
    },
    {
      label: 'Skating',
      color: Colors.blurple,
      isActive: true,
    },
    {
      label: 'Twitch/Podcast',
      color: Colors.vsAlmostBlack,
      isActive: true,
      avatar: Twitch,
    },
    {
      label: 'Lifestyle',
      color: Colors.onlineGreen,
      isActive: true,
    },
*/
