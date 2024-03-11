import React, { ReactElement } from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../../styles/Colors';
import { archives } from '../../../../content/Archives';

import { Divider, colors } from '@mui/material';
import TriforceDivider from '../../../../comps/TriforceDivider';

import Image from '../../../../comps/Image';
import Spoiler from '../../../../comps/Spoiler';
import PromAndZeus from '../../../../assets/homebrew/pnz.jpeg';
import MotherSah from '../../../../assets/homebrew/mother-shahraz.jpeg';
import LadyPortrait from '../../../../assets/homebrew/lady-portrait.jpeg';
import LadySinisterSB from '../../../../assets/homebrew/lady-sinister.png';
import Marcus from '../../../../assets/homebrew/marcus-portrait.png';
import Tibalt from '../../../../assets/homebrew/tibalt.png';
import Illidan from '../../../../assets/homebrew/illidan.jpeg';
import Enellava from '../../../../assets/homebrew/street1.png';
import Letter from '../../../../assets/homebrew/letter.jpeg';
import SBLord from '../../../../assets/homebrew/lord-sinister.png';
import MarcusSB from '../../../../assets/homebrew/marcus.png';
import ServantSB from '../../../../assets/homebrew/servant.png';
import Servant from '../../../../assets/homebrew/servant-portrait.png';
import './Style.css';
import './Font.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import PrometheusSB from '../../../../assets/homebrew/prometheus.png';
import FelVoidwalker from '../../../../assets/homebrew/voidwalker.png';
import Prometheus from '../../../../assets/homebrew/prometheuspic.png';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Aurelia from '../../../../assets/homebrew/astralelf.png';
import Delilah from '../../../../assets/homebrew/delilah.png';
import Esmeralda from '../../../../assets/homebrew/drow.png';
import Miranda from '../../../../assets/homebrew/miranda.png';
import Okami from '../../../../assets/homebrew/okami.png';
import Nareen from '../../../../assets/homebrew/purple_tiefling.png';
import Alwyn from '../../../../assets/homebrew/alwyn.png';
import Wolfgang from '../../../../assets/homebrew/centaur.png';
import Abelardo from '../../../../assets/homebrew/yuanti.png';
import Kaiden from '../../../../assets/homebrew/fairy.png';
import Edward from '../../../../assets/homebrew/goliath.png';
import Seth from '../../../../assets/homebrew/changeling.png';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Map from '../../../../assets/homebrew/map.png';
import Timeline from './Timeline';
import dragonDivider from '../../../../assets/homebrew/dragon.png';

import PalaceIcon from '../../../../assets/homebrew/federal-palace-of-switzerland.png';
import SightseeingIcon from '../../../../assets/homebrew/transport.png';
import HeartIcon from '../../../../assets/homebrew/heart.png';
import DinnerIcon from '../../../../assets/homebrew/eat.png';
import SleepIcon from '../../../../assets/homebrew/night.png';
import BossIcon from '../../../../assets/homebrew/final-boss.png';
import MarriageIcon from '../../../../assets/homebrew/rings.png';

import ArrivingImage from '../../../../assets/homebrew/arriving.png';
import SightseeingImage from '../../../../assets/homebrew/sightseeing.png';
import CourtingImage from '../../../../assets/homebrew/courting.png';
import DinnerImage from '../../../../assets/homebrew/dinner.png';
import SleepingImage from '../../../../assets/homebrew/sleeping.png';
import WeddingImage from '../../../../assets/homebrew/wedding.png';
import FinalBossImage from '../../../../assets/homebrew/final_boss_wallpaper.png';
import Underbelly from '../../../../assets/homebrew/underbelly.png';

const chapters = [
  'Motivation',
  'Excerpt',
  'Introduction',
  'The Invitation Letter',
  'Characters & Creatures',
  'Locations & Items',
  'Events & Timeline',
  'Music & Ambience',
  'Tools & Resources',
  'Conclusion',
];

interface childrenType {
  number: number;
  gender: 'female' | 'male';
  sexuality: 'heterosexual';
}
interface childrenNameType {
  [name: string]: childrenType;
}

const attributions = [            <a key="1" href="https://www.flaticon.com/free-icons/switzerland" style={{color: Colors.dndRed}} title="switzerland icons">Switzerland icons created by Eucalyp - Flaticon</a>,
<a key="2" href="https://www.flaticon.com/free-icons/sightseeing" style={{color: Colors.dndRed}} title="sightseeing icons">Sightseeing icons created by piksart - Flaticon</a>,
<a key="3" href="https://www.flaticon.com/free-icons/heart" style={{color: Colors.dndRed}} title="heart icons">Heart icons created by Vlad Szirka - Flaticon</a>,
<a key="4" href="https://www.flaticon.com/free-icons/eat" style={{color: Colors.dndRed}} title="eat icons">Eat icons created by Freepik - Flaticon</a>,
<a key="5" href="https://www.flaticon.com/free-icons/sleep" style={{color: Colors.dndRed}} title="sleep icons">Sleep icons created by Freepik - Flaticon</a>,
<a key="6" href="https://www.flaticon.com/free-icons/marriage" style={{color: Colors.dndRed}} title="marriage icons">Marriage icons created by Freepik - Flaticon</a>,
<a key="7" href="https://www.flaticon.com/free-icons/enemy" style={{color: Colors.dndRed}} title="enemy icons">Enemy icons created by Freepik - Flaticon</a>];


const childrenData: childrenNameType = {
  Aurelia: { number: 1, gender: 'female', sexuality: 'heterosexual' },
  Delilah: { number: 2, gender: 'female', sexuality: 'heterosexual' },
  Esmeralda: { number: 4, gender: 'female', sexuality: 'heterosexual' },
  Miranda: { number: 6, gender: 'female', sexuality: 'heterosexual' },
  Okami: { number: 8, gender: 'female', sexuality: 'heterosexual' },
  Nareen: { number: 12, gender: 'female', sexuality: 'heterosexual' },
  Alwyn: { number: 3, gender: 'male', sexuality: 'heterosexual' },
  Wolfgang: { number: 3, gender: 'male', sexuality: 'heterosexual' },
  Abelardo: { number: 7, gender: 'male', sexuality: 'heterosexual' },
  Kaiden: { number: 3, gender: 'male', sexuality: 'heterosexual' },
  Edward: { number: 3, gender: 'male', sexuality: 'heterosexual' },
  Seth: { number: 3, gender: 'male', sexuality: 'heterosexual' },
};

const VDivider: React.FunctionComponent = () => {
  const color = Colors.dndRed;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1vh',
        margin: '5vh 0vw 5vh 0vw',
      }}
    >
      <div style={{ height: 10, width: 1, backgroundColor: color }} />
      <div
        style={{ height: 10, width: 10, border: '1px solid', borderColor: color, rotate: '45deg' }}
      />
      <div style={{ height: 10, width: 1, backgroundColor: color }} />
    </div>
  );
};

const DragonDivider: React.FunctionComponent = () => {
  return (
<img src={dragonDivider} style={{maxWidth:'100vw'}}/>
  );
};

const Homebrew: React.FunctionComponent = () => {
  const cont = archives[2];

  const handleChange = (event: SelectChangeEvent): void => {
    setChildName(event.target.value);
  };

  const [playerName, setPlayerName] = React.useState('Aenemon');
  const [childName, setChildName] = React.useState('Miranda');

  const [selectedTime, setSelectedTime] = React.useState(0);

  const [childSB, setChildSB] = React.useState(-1);
  const [mapIndex, setMapIndex] = React.useState(0);

  const timelineItems = [
    {
      name: 'Arrival at the Palace',
      image: ArrivingImage,
      icon: PalaceIcon,
      description: `Lord and Lady have invited the most influential criminals for all over the world for this special event. 
      All guests arrive to the main gate using their vehicle of choice. Upon arrival, a tiefling servant offers to take their vehicle and park it off somewhere else. 
      Marcus, the Head of Staff greets all important visitors (especially the suitors) at the gate. A youthful and respectful man with a refined grace offers them refreshments.
      Players may or may not notice the staff all wearing the same golden ring depicting a dragon. 
      Marcus explains that the guests are expected to stay here until the morning of the next day when the ceremony will take place and that for now there is lots to do and see while they're here.`,
    },
    { name: 'Exploring the Palace', icon:SightseeingIcon, image: SightseeingImage, 
    description: `Marcus guides all of the guests inwards towards the palace. Marcus informs the players that Lord and Lady are currently busy in the throne room (E9)
     and that they will have time to see them later. As for now he offers a sightseeing tour for the players that starts at E2, proceeds to E8 and then finally to E7.
     Throughout the tour, Marcus will answer all questions the players make (as long as they are respectful and not confidential) and will give a brief overview of the different
     depictions and historical art that the palace hosts in its glass walls, paintings, pottery etc. Marcus will also delve into the personalities of Lord and Lady in respect to their rooms.
     Marcus may also talk about his personal relationship with Lord and Lady if he feels safe to do so.` },
    {
      name: 'Courting the matches',
      image: CourtingImage,
      icon: HeartIcon,
      description: `After the tour is complete, Marcus will lead all of the players back to the Main Hall and will let them know that their matches are waiting for them in their respective rooms (E3, E4, E5, E6).
      Players now have a choice and can choose to either mingle with the crowd in the main hall or if they wish, to meet their match. Players who choose to mingle with the crowd will get to socialize with criminals
      from all over the world and hear of their exploits (and perhaps share their own exploits as well!). Players who choose to meet their significant other will at first get to experience a one on one conversation with
      their assigned Sinister offspring in which they might either bond or completely end up hating each other. Players who get along with their match might choose to dance with their match at the Main Hall or perhaps 
      engage in an activity they both share a common interest to. For example, Esmeralda might challenge a player to a drawing competition, Okami a physical contest and so on. There is no real disadvantage to choosing to not
      meet your match other than their possible disliking of that fact as well as the lack of information a player might get in regards to their in-laws (which will prove useful in order to gain their liking!)`,
    },
    {
      name: 'Dinner with the In-Laws',
      image: DinnerImage,
      icon: DinnerIcon,
      description: `After a few hours of exposition, the characters are all summoned to the main hall by servants and Marcus takes them to the throne room to finally meet their in-laws.
      In the throne room, there are other guests seated at tables ready for a dinner procession. Lord and Lady finally meet the players and try to keep a sense of superiority to them. 
      Lord will very often patronize the players and pretend like they are children who know nothing about the world. Lady will try to pry into their personal matters, gossip regarding them as well as
      make talk of their vulnerability (what the players are afraid of losing). Players who did a lot of mingling in the previous section might find that the gossip they shared with others has already found its way to Lady.
      The players are seated in the same dinner table as that of Lord and Lady (although the seating is done in such a way that shows Lord and Lady are clearly at a position of power here). The players themselves are seated side by side,
      on their opposite side, they are seated with their Sinister match. Lord at this point makes a toast to the couples and the players are now expected to sit through a 3-course meal, an appetizer, a main dish and a desert.
      During the actual dining, their table manners as well as conversational skills will be put to the test. Lord will be particularly condescending to anyone lacking respect while Lady might try to embarass or seduce player characters.
      
      At any point during the course, you might choose to roll a d10, upon rolling a 7 or higher, a servant who is carrying dishes or refilling drinks will slip up in one way or another (drop the dish, spill a drink on a guest etc.)
      This is a chance to exhibit Lord's wrathful side and to show Marcus' evident discomfort as well as the inhumane way the staff are treated. The punishment is up to you but make sure to make it evident that Lord is by no means a good guy.
      As for the choice of the meals themselves that is another aspect I leave up to you! Make sure it's fancy and perhaps revolting if you wish.
      
      Some conversation topics that Lord might touch upon would be philosophy, art, history, racism.
      Lady's conversational topics revolve either around exotic animals, plants or personal gossip related to the players.
      Conversational topics from the offspring depends highly on the individual.
      `,
    },
    {
      name: 'All is Quiet in Enellava',
      image: SleepingImage,
      icon: SleepIcon,
      description: `Once the desert is finished, players are prompted to return to the room with their significant other and rest for the night. 
      Players might very well choose to ignore this and either continue to mingle until the next morning (with the very few guests who are still awake) or perhaps to escape from the watchful eye of their match and explore around.
      Regardless of what they choose, the offspring will at least TRY to fall asleep so that they can rest so this gives players with no spells a chance to act sneakily even if the circumstances don't allow it.
      In this section of the story, NPCs behave very differently depending on if they come upon the players.

      If Marcus sees players moving around he will at first try to prompt them back to their room, however, depending on the level of safety he feels towards the player, he might choose to share his personal story in hushed tones.
      If the player expresses a desire to help Marcus, he will reveal to the player that he actually has a plan to crash the wedding with explosives which he has set all over the room.
      Marcus explains that the rings which servants wear will also be offered to them in the wedding ceremony and he explains the magic behind the rings, warning them to not accept them at any cost.
      Marcus also reveals to the players that he plans to set off the explosives at that specific moment in which they are offered their rings.

      Note that if this conversation does not take place, Marcus will stall during the ceremony, allowing for a unique interaction in which players are temporarily subdued under the ring's influence.

      If a player chooses to visit Lady's quarters they might run into her looking into her scrying orb or perhaps courting one of her guinea pigs. Depending on her liking of the player,
      Lady might admonish their sneaky behavior but might also be attracted to it, prompting the player to flirt with her. Lady of course has no boundaries other than that she will try to subndue anyone who means harm towards Lord or her Offspring.
      A player who comes into contact with Lady inside of her room is affected by her miasma, essentially causing them to enter a drugged state in which they barely have consciousness. 

      In this case, Lady disposes of players by letting the servants carry them back to their room.
      The effect of the miasma can be resisted after rolling a DC15 Constitution saving throw, in which case the player sustains consciousness and memory.

      If a player chooses to visit Lord's quarters, they will find him soundly sleeping in his bed in an almost pharaoh-like position. 
      If a player chooses to wake Lord up, they will find a very agitated and bloodthirsty Lord who is very eager to throw insults and threats at them.

      Prometheus, the friendly fire might try to easen Lord's bad mood but at this point the players must also try to soothe him either through charisma, an item, a lullaby etc.

      
      `,
    },
    {
      name: 'The Marriage ceremony',
      image: WeddingImage,
      icon: MarriageIcon,
      description: 'This is a small description',
    },
    { name: 'The Final Showdown', image: FinalBossImage, icon: BossIcon, description: 'This is a small description' },
  ];

  const produceNumber = (num: number): string => {
    let suffix = 'th';
    if (num === 1) {
      suffix = 'st';
    } else if (num === 2) {
      suffix = 'nd';
    } else if (num === 3) {
      suffix = 'rd';
    }
    return num.toString() + suffix;
  };

  const titlesRef = React.useRef<Array<HTMLSpanElement | null>>([]);
  const scrollTo = (index: number): void => {
    const i = index;
    if (titlesRef !== null) {
      if (titlesRef.current !== null) {
        if (titlesRef.current[i] !== null) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          titlesRef.current[i]!.scrollIntoView(true); 
        }
      }
    }
  };

  interface ChapterProps {
    index: number;
  }

  const ChapterHeader = ({ index }: ChapterProps): ReactElement => {
    return (
      <Typography
        ref={(el) => titlesRef.current.push(el)}
        variant='h4'
        style={{
          color: cont.color,
          scrollMargin: 100,
          marginTop: '5vh',

          fontWeight: 'bold',
          fontFamily: 'inherit',
          maxWidth: '80%',
        }}
      >
        {index + 1}. {chapters[index]}
      </Typography>
    );
  };

  return (
    <div className='screen-container'>
      <div
        className='content-box'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1vh',
          alignItems: 'center',
        }}
      >
        <Image
          src={cont.image}
          style={{
            width: 940,
            height: 540,
            maxWidth: '98vw',
            maxHeight: '50vh',
            borderRadius: 4,
          }}
        />
        <Typography variant='h3' style={{ color: cont.color, fontFamily: 'inherit' }}>
          {cont.title}
        </Typography>
        <Typography variant='h4' style={{ fontFamily: 'inherit' }}>
          {cont.subtitle}
        </Typography>
        <Typography variant='h5' style={{ color: Colors.vsGray }}>
          {cont.date}
        </Typography>
        <TriforceDivider color={Colors.dndRed} />
        <Typography style={{ maxWidth: '80%', textAlign: 'justify' }}>
          {content.description}
        </Typography>
        <VDivider />
        <Typography
          variant='h4'
          style={{
            color: cont.color,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'inherit',
          }}
        >
          Table of Contents
        </Typography>
        <ol>
          {chapters.map((item, index) => (
            <li
              key={index}
              style={{
                fontSize: 20,
                cursor: 'pointer',
                margin: 10,
              }}
              onClick={() => scrollTo(index)}
            >
              <Typography variant='h6' style={{ textAlign: 'left' }}>
                {item}
              </Typography>
            </li>
          ))}
        </ol>
        <VDivider />

        <ChapterHeader index={0} />
        <TriforceDivider color={Colors.dndRed} />
        <Typography style={{ maxWidth: '80%', textAlign: 'justify' }}>
          There have been multiple sources that have contributed to this idea of a homebrew. However
          the main three include:
        </Typography>
        <div style={{ maxWidth: '70vw' }}>
          <ul
            style={{
              textAlign: 'left',
            }}
          >
            <li>
              <div style={{ width: '70vw' }}>
                <Typography>One Piece</Typography>
                <Spoiler>
                  <Typography>
                    Whole Cake Island was an amazing arc that I happened to be watching at the time.
                    Sanji&#39;s sinister wedding invitation which he had to respond to out of
                    necessity inspired me to think of a situation in which my players are invited to
                    the dnd game through letters to their own weddings. The arc&#39;s unique and
                    Alice in Wonderland-like characters also inpsired me for some character creation
                    of my own, in particular, the character of Prometheus the animated flame, mixed
                    with the goofy personality of Zeus the thunder cloud.
                  </Typography>

                  <Image src={PromAndZeus} style={{}} />
                  <Typography variant='caption'>
                    {' '}
                    Prometheus and Zeus from the manga panels.{' '}
                  </Typography>
                </Spoiler>
              </div>
            </li>
            <li>
              <div style={{ width: '70vw' }}>
                <Typography>World of Warcraft</Typography>
                <Spoiler>
                  <Typography>
                    When I was first thinking for the concept of Lord and Lady Sinister, I knew I
                    wanted to do something akin to tieflings from DND. I wanted them to be
                    contrasting images; Lord infatuated with Death and Lady infatuated with Life.
                    Upon thinking of this archetype, I realized that I have seen this somewhere
                    before. The Bosses at the Black Temple. Illidan of course being the herald of
                    death and Mother Shahraz being the herald of life.
                  </Typography>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '1vw',
                      justifyContent: 'center',
                    }}
                  >
                    <Image src={MotherSah} style={{ maxWidth: '40%', borderRadius: 4 }} />
                    <Image src={Illidan} style={{ maxWidth: '40%', borderRadius: 4 }} />
                  </div>

                  <Typography variant='caption'>
                    {' '}
                    Mother Shahraz and Illidan Stormrage from the Black Temple raid in the Burning
                    Crusade expansion of World of Warcraft.{' '}
                  </Typography>
                </Spoiler>
              </div>
            </li>
            <li>
              <div style={{ width: '70vw' }}>
                <Typography>The Menu (2022)</Typography>
                <Spoiler>
                  {' '}
                  <Typography>
                    {' '}
                    This movie came completely out of left-field for me. I really liked the
                    combination of this sense of dread that thrillers often tend to have paired with
                    the stern, high profile dishes served in the film. Although it did not inspire
                    much in terms of the oneshot itself, it gave me the idea of having a dinner
                    sequence in which players re-enact a very formal and high class meal while their
                    soon to be Parents-In-Law try to pry them for their backstories/ judge them
                    based on their manners, sophistication etc.
                  </Typography>
                  <iframe
                    width='900'
                    style={{ maxWidth: '95%', height: '40vh' }}
                    src='https://www.youtube.com/embed/C_uTkUGcHv4'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                  ></iframe>
                </Spoiler>
              </div>
            </li>
          </ul>
        </div>

        <Typography style={{ maxWidth: '80%', textAlign: 'justify' }}>
          This unholy combination of sources led to the creation of a unique experience for my
          players which I am very glad to be presenting to you now! The general idea of this
          homebrew was to create something special for my players who I know personally for a long
          time now. If you are in a similar situation, I highly encourage you to take that extra
          step as well as my experience tells me it makes up for one really great session!
        </Typography>

        <ChapterHeader index={1} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{
            maxWidth: '80%',
            fontFamily: 'Dungeon',
            display: 'flex',
            fontSize: 24,
            flexDirection: 'column',
            gap: '1vh',
            textAlign: 'justify',
          }}
        >
          <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
            &#34;Ah yes, the infamous Lord and Lady Sinister, the evil yet benevolent anonymous
            tyrants who have been ruling over the lavish city of Enellava for some decades now.
          </Typography>
          <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
            Quite unfortunate that you would receive a personal invitation from them I must say.
            There is no reason for panic, however. If you play your cards just right, you might be
            able to get out of the palace alive!
          </Typography>
          <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
            But a friendly warning from me to you. Not many people know of this rumor, but it is
            said that Lord and Lady have been ruling over Enellava ever since its construction,
            thousands of years ago. I am afraid your soon to be Father In Law is an eternal being
            obsessed with deadly weapons and grim philosophies and your Mother In Law is an also
            equally eternal being with a taste for extreme hedonism and uncomforting gossip.
          </Typography>
          <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
            I am putting extra emphasis on the eternal part. Before you think you have outsmarted
            them in some way, just remember, that the person across from you has possibly lived for
            thousands of years. If not, then their identity, their very existence is still as
            mysterious and mind boggling as the secrets of the universe.&#34;
          </Typography>
          <Typography style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
            - Your dearest friend, Aenemon
          </Typography>
        </div>

        <ChapterHeader index={2} />
        <TriforceDivider color={Colors.dndRed} />

        <Typography style={{ maxWidth: '80%', textAlign: 'justify' }}>
          {' '}
          The very essence of this setting revolves around an inspiration for the well known era of
          the Roaring 20s (1920s). Many great stories were written for this era, such as{' '}
          <span
            style={{ color: Colors.dndRed, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => window.open('https://en.wikipedia.org/wiki/The_Great_Gatsby')}
          >
            The Great Gatsby
          </span>
          ,{' '}
          <span
            style={{ color: Colors.dndRed, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => window.open('https://en.wikipedia.org/wiki/Anything_Goes')}
          >
            Anything Goes
          </span>
          ,{' '}
          <span
            style={{ color: Colors.dndRed, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => window.open('https://en.wikipedia.org/wiki/The_Sun_Also_Rises')}
          >
            The Sun also Rises
          </span>
          . A very interesting and modern rendition of it that I have seen recently is that of the
          New Capenna set, from{' '}
          <span
            style={{ color: Colors.dndRed, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() =>
              window.open('https://magic.wizards.com/en/products/streets-of-new-capenna')
            }
          >
            Magic: The Gathering
          </span>
          . I could go on and on about what makes this setting magical, but the very gist of it lies
          in the hedonistic and grim reality that the society of that time displays. Much like in
          cyberpunk settings, the Roaring 20s were known for their excessiveness. Vain displays of
          wealth, substance abuse, a great spike in crime as a direct reflection of the world. These
          are the things that shape that era.
        </Typography>

        <Typography style={{ maxWidth: '80%' }}>
          The seaside city of Enellava has no criminal underbelly as it is in its entirety exactly
          that. <span style={{ fontWeight: 'bold' }}>A criminal underbelly.</span>
        </Typography>
        <Image
          src={Enellava}
          style={{
            maxWidth: '98vw',
            maxHeight: '70vh',
            borderRadius: 4,
          }}
        />
        <Typography variant='caption'>
          Courtesy of{' '}
          <span
            style={{
              color: Colors.dndRed,
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'underline  ',
            }}
            onClick={() => window.open('https://openai.com/dall-e-2')}
          >
            DALL·E.
          </span>
        </Typography>
        <Typography style={{ maxWidth: '80%' }}>
          {' '}
          For this exact reason, your players must fit the description of criminals. Have your
          players not necessarily roll a character sheet just yet but definitely answer some
          questions. More specifically:
        </Typography>
        <ol style={{ textAlign: 'left' }}>
          <li>Full Name</li>
          <li>Race</li>
          <li>Gender</li>
          <li>Sexuality</li>
        </ol>
        <Typography style={{ maxWidth: '80%' }}>
          You must also inform your players of the following traits for their characters:
        </Typography>
        <ol style={{ textAlign: 'left' }}>
          <li>Needs to have a criminal background (preferably something that implies a network)</li>
          <li>Give me something your character would be afraid of losing</li>
          <li>
            Since the setting is noir, think of something which would fit in a 1920s story (or
            don&#39;t)
          </li>
        </ol>
        <Typography>Why are these important to know? Well...</Typography>

        <ChapterHeader index={3} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '1vw', justifyContent: 'center' }}
        >
          <TextField
            label='Player Name'
            variant='outlined'
            defaultValue={'Aenemon'}
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Sinister Child</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={childName}
              label='Sinister Children'
              onChange={handleChange}
            >
              {Object.keys(childrenData).map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Image
          src={Letter}
          style={{ minWidth: '50vw', maxWidth: '90vw', height: '50vh', borderRadius: 4 }}
        />
        <Typography
          style={{ fontFamily: 'Dungeon', fontSize: 24, textAlign: 'justify', maxWidth: '80%' }}
        >
          &#34;You are formally invited to Lord & Lady&apos;s special wedding, joining the lives of:
        </Typography>
        <Typography
          style={{ fontFamily: 'Dungeon', fontSize: 24, textAlign: 'justify', maxWidth: '80%' }}
        >
          {playerName} & {childName}, {produceNumber(childrenData[childName].number)}{' '}
          {childrenData[childName].gender === 'female' ? 'daughter' : 'son'} of the Sinister hosted
          in the lavish palace of Enellava tomorrow at noon.&#34;
        </Typography>
        <Typography
          style={{ fontFamily: 'Dungeon', fontSize: 24, textAlign: 'justify', maxWidth: '80%' }}
        >
          - Lord and Lady Sinister
        </Typography>
        <DragonDivider />
        <div
          style={{
            maxWidth: '80%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1vh',
            textAlign: 'justify',
          }}
        >
          <Typography>
            {' '}
            You did not read it wrong. The players do in fact get invited to their own wedding. For
            reasons which, as our friend Aenemon pointed out earlier, they are incapable of
            avoiding. Now let us run through the characteristics I mentioned earlier and see why it
            is important for you to know them before the campaign begins:
          </Typography>

          <Typography>
            {' '}
            <span style={{ color: Colors.dndRed, fontWeight: 'bold' }}>Full name</span> is
            self-explanatory, you cannot write a character&#39;s full name on the invitation letter
            without knowing it. Of course you could write a generic letter that just refers to the
            player as &#34;You&#34; but I feel like that would lack the dramatic effect and formal
            character that this version of the letter has.
          </Typography>

          <Typography>
            <span style={{ color: Colors.dndRed, fontWeight: 'bold' }}>Race</span> can be used to
            make a quick and easy shallow match of the players with the offspring of Lord and Lady.
            Some race matches I find particularly interesting/funny to have. For example, matching a
            (typically) tall elf with a (typically) short gnome or an orc (who, according to
            Forgotten Realms lore, due to an old dispute, inherently hate the elves). It all depends
            on what kind of character dynamics you want your players to have with their newly found
            significant other, but other than that do not feel restricted by the choice of race.
            Remember, you are the one making the rules here, even if we are technically playing 5e.{' '}
          </Typography>
          <Typography>
            <span style={{ color: Colors.dndRed, fontWeight: 'bold' }}>Gender, Sexuality</span> are
            obviously used in order to make a proper match with the appropriate gender/sexuality of
            the offsprings.
          </Typography>
          <Typography>
            <span style={{ color: Colors.dndRed, fontWeight: 'bold' }}>Criminal background</span>,
            the player must be of some use to Lord and Lady. Being a notorious criminal in Enellava,
            is quite the achievement and therefore they would find you worthy of a match for their
            family. Bonus points if you are somehow associated with a criminal syndicate/network, as
            they find connections really valuable.
          </Typography>
          <Typography>
            <span style={{ color: Colors.dndRed, fontWeight: 'bold' }}>Something to lose</span>.
            This is the bargaining chip Lord and Lady have against your players. If their characters
            refuse to go to the wedding... well... let us just say that whatever we do not want to
            be lost <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>*will*</span> be lost.
          </Typography>
        </div>

        <ChapterHeader index={4} />
        <TriforceDivider color={Colors.dndRed} />
        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', }}>
          <div className='stat-block-grid'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={Tibalt} style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', border:'1px solid ' + Colors.dndRed  }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
              }}
            >
              <div
                style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '50%', overflowY: 'auto' }}
              >
                <Image src={SBLord} style={{}} />
              </div>
              <Typography className='character-text'>
                Stoic and yet friendly, in his own frightening manner, Lord Sinister is an avid
                collector of art and weapons alike. He is also very deeply interested in philosophy.
                One too many times he will pose ethically challenging questions to characters in
                order to judge their grasp or perhaps opinion regarding the matter. Lord Sinister
                shows some partial respect to the players as they themselves are noteworthy
                criminals and will make light talk about their achievements, or perhaps the
                contributions that they can make as new members of the family. He is particularly
                harsh regarding his offspring, especially the ones that do not fare off so well. He
                is also very indifferent when it comes to the lives of his staff, he is very easily
                irritated by their mistakes and will not hesitate to take their lives on a whim,
                sometimes even finding it slightly amusing. Symbolically, Lord represents the cold
                and harsh nature of Death. Not the kind of death which brings peace and rest to a
                soul, but rather the violent one, which raises more questions than it gives answers.
              </Typography>
            </div>
          </div>

          <div
            className='stat-block-grid'

          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={LadyPortrait}
                style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', alignSelf: 'center', border:'1px solid ' + Colors.dndRed  }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
              }}
            >
              <div className='stat-block-image'>
                <Image src={LadySinisterSB} style={{}} />
              </div>
              <Typography className='character-text'>
                Lady Sinister is as equally twisted as her husband. She has an extraordinary
                appreciation for all forms of life, not in a genuinely altruistic way, but rather
                because she sees them as possible pieces of her collection. Any characters who
                belong to exotic races are bound to get her attention. She is also very intrusive
                when it comes to her communication with others. She will often pry into secrets or
                gossip, trying to push the limit of whoever the subject concerns so as to make them
                uncomfortable. She is much more hedonistic than the stoic Lord, as she believes that
                his ruminations of philosophy are pointless and a very bad use of his free time. As
                such she is very susceptible to any vice of any form. Lady Sinister is very
                indifferent towards her children but favors the most exotic ones the most. In
                regards to the staff of the palace, she finds them slightly irritating but will not
                jump towards killing them as Lord would. Instead she sees them more like playthings,
                with which she can do anything she feels like at the moment, be it torture, having
                them walk naked in the palace or perhaps joining her in her hedonistic activities.
                Symbolically, Lady represents the overwhelming nature of Life. The chaotic amount of
                stimulants that exist in it, all of the powerful emotions, compressed tightly in her
                essence, like experiencing everything, everywhere, all at once.
              </Typography>
            </div>
          </div>
          <DragonDivider/>
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={Marcus} style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', border:'1px solid ' + Colors.dndRed  }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
                maxHeight: '100%',
              }}
            >
              <div
                style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '50%', overflowY: 'auto' }}
              >
                <Image src={MarcusSB} style={{}} />
              </div>
              <Typography className='character-text'>
                Marcus is the chief of staff at the Enellava Palace. He has only recently been
                recruited by Lord & Lady and he appears to be a very sociable and likeable person.
                He will offer as much comfort and hospitality to the players while at the same time
                remaining respectful towards the staff. Marcus is not in the palace by chance
                however, he has an ulterior motive, which is to get behind the mysterious vanishing
                of his parents, who used to work for Lord & Lady at the palace. If Marcus somehow
                stumbles upon the truth, he will decide to help the players any way he can to take
                down Lord & Lady. The truth as to how they were killed is very non-surprising. Lady and especially Lord are extremely harsh towards the staff,
                Lord in particular sees them as below human and is not reluctant when it comes to hurting them or even killing them. In the heat of his rage,
                Lord might reveal to his guests that he has killed staff on multiple occasions and in fact was the one who gruesomely killed Marcus&#39; parents after they had stained one of his paintings.
              </Typography>
            </div>
          </div>
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={Servant} style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', border:'1px solid ' + Colors.dndRed  }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
                maxHeight: '100%',
              }}
            >
              <div
                style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '50%', overflowY: 'auto' }}
              >
                <Image src={ServantSB} style={{}} />
              </div>
              <Typography className='character-text'>
                All servants at the Enellava palace. All of them wear formal suits or dresses
                similar to that of butlers. Staff are very restricted in the emotions they can
                exhibit and will move almost mechanically through the palace as they go through
                their chores. They can all be seen wearing the same golden ring, all of them except
                for Marcus, who upon a very close inspection (DC16 Perception) appears to be wearing a fake replica in order to deceive his masters of his obedience. The ring the servants are wearing is a mind-controlling charm which
                renders them incapable of disobeying Lord & Lady. Forcibly taking off the ring from
                a servant will immediately bring them out of their control. 
                Any creature that wears the ring must make a DC15 Wisdom throw or else fall under their commands indefinitely.
              </Typography>
            </div>
          </div>
          <DragonDivider/>
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Image
                src={Prometheus}
                style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', border:'1px solid ' + Colors.dndRed  }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
                maxHeight: '100%',
              }}
            >
              <div
                style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '50%', overflowY: 'auto' }}
              >
                <Image src={PrometheusSB} style={{}} />
              </div>
              <Typography className='character-text'>
                Prometheus the Animated Fire, is a cute little fellow that can be found in Lord
                Sinister&#39;s quarters. Prometheus is a pure antithesis to the setting and serves
                the basic function of comic relief as he is a very over the top, happy-go-lucky
                flame. Immediately upon interaction with the players he will engage into
                conversation with them as he tries to befriend them. Any player suspicious of
                Prometheus&#39; good intentions will be dissapointed to find nothing more but pure
                naivete. He truly is a good boi. Prometheus can only be hurt in the ways that a fire
                can be hurt, by putting him out. I cannot imagine why someone would want to do that,
                but alas, this is DND so we must be prepared for everything. Prometheus has only 1
                hit point and can die if he is snuffed out. If a player uses a fire spell or perhaps
                lights a torch near him, he will consume the flame, exclaiming &#34;Yummy!&#34; as
                he burps and rubs his belly. &#34;Thanks for the meal!&#34; Prometheus during his
                conversation with players might mention key information regarding Lord Sinister,
                like the fact that he likes reading philosophy in this room or that he has hidden
                away a very powerful and dangerous for him weapon (whoops...).
              </Typography>
            </div>
          </div>
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={FelVoidwalker}
                style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', border:'1px solid ' + Colors.dndRed  }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
                maxHeight: '100%',
              }}
            >
              <div
                style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '50%', overflowY: 'auto' }}
              >
                <Image src={ServantSB} style={{}} />
              </div>
              <Typography className='character-text'>
                Prometheus&#39; not-so-friendly cousins. These Fel Voidwalkers are essentially fire
                elementals taken form in the Material Plane. They will attack any creature who is a
                threat to Lord or Lady. They cannot speak or communicate by any means, but they
                understand Abyssal and are as loyal to Lord & Lady as the mind-controlled servants.
              </Typography>
            </div>
          </div>
          <DragonDivider/>
          <div
            className='stat-block-grid'
          >
            {childSB !== -1 ? (
              <div
                style={{
                  backgroundImage: `url(${itemData[childSB].img})`,
                  backgroundSize: 'cover',
                  backgroundPosition:'center',
                  backgroundRepeat: 'no-repeat',
                  height: '65vh',
                  borderRadius: 4,
                  border:'1px solid ' + Colors.dndRed ,
                  marginLeft:'40px'
                }}
              >
                <IconButton
                  style={{ position: 'relative', left: '1%', color: Colors.dndRed }}
                  onClick={() => setChildSB(-1)}
                >
                  <CloseIcon style={{ color: Colors.dndRed }} />
                </IconButton>
              </div>
            ) : (
            <ImageList style={{ borderRadius: 4, marginLeft:'40px', height: '65vh', alignSelf:'center'}} variant='quilted' cols={3} rowHeight={164} >
                {itemData.map((item, index) => (
                  <ImageListItem key={item.img}>
                    <img src={item.img} onClick={() => setChildSB(index)} />
                  </ImageListItem>
                ))}
              </ImageList>
            )}

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5vh',
                maxHeight: '100%',

              }}
            >
              <div
                style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '50%', overflowY: 'auto' }}
              >
                <Image src={ServantSB} style={{}} />
              </div>
              <Typography className='character-text'>
                {childSB !== -1
                  ? itemData[childSB].description
                  : `The Offspring of the Sinister each have their own unique personalities and attributes. 
                  What I provide here is a few examples of character profiles you could use. 
                  Do note that for simplicty they use the exact same stat block as that of a servant but you can also change that if you wish.\n 
                  Pick one of the profiles displayed here to read more about them!`}
              </Typography>
            </div>
          </div>

        </div>
        <ChapterHeader index={5} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{
            maxWidth: '80vw',
            textAlign: 'justify',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
          }}
        >
          <Typography>
            This particular module is set into a universe of my own which for the time being I will
            try to keep hidden. As such, please feel free to add any context you like to the world,
            taking into consideration whatever your players give you as input as well. For
            convenience, you could say that Enellava is in a far off island in the southern part of
            the continent and that the players cannot leave due to a great, dangerous storm that
            will last a month in the waters near the island. In general, due to the limitations of
            this hidden setting, try to keep your players within the island and if it turns out that
            you cannot, then improvise well!
          </Typography>
          <Typography>
            Enellava of course, remains to be the common reference point everyone has of the world.
            Enellava is in essence ruled by Lord and Lady as they are the leaders of the greatest
            criminal syndicate in the city, known as the Sinister. Every citizen and corporation in
            Enellava pays their taxes to them. Their military force consists mainly of thugs from
            local gang groups, employed as mercenaries or through the multitude of loyal assasins
            that the family has in their possesion. The currency is much like any other DND setting.
            In order for the city to be functionable, there exist certain safe spaces, in which one
            is not allowed to carry out criminal activity. Places essential to the proper function
            of the city such as restaurants, schools, hospitals and grocery markets are generally
            places where one would be discouraged to commit a crime (though, depending on the
            circumstances, not always necessarily punished for it). The honor code among criminals
            dictates that anyone who does commit crimes in these safe spaces or targets people of
            basic functional importance, such as cleaners, cooks, doctors, teachers or merchants,
            instantly forfeits their own protection within these safe-spaces. 
            

          </Typography>
          <Typography>
          Enellava is
            essentially split into three districts. The palace, which exists on a separate island
            nearby and is a much more lavish location, closer
            to the image of New York in the 1920s. A ton of modern skyscrapers have been built here and buildings are decorated with gold, silver and intricate glass designs.
            The Trade District, which is basically the port of the city and coincidentally where most of the legitimate business of Enellava takes place. And finally the
            Underbelly, which is the most crime-infested area.
          </Typography>
          <Image src={Underbelly} style={{ width: '50vw', borderRadius: 4, alignSelf:'center' }} />
          <Typography>Below is a map of the palace, where the session will take place: </Typography>
        </div>
        <div
          style={{
            position: 'relative',
            overflow: 'auto',
            maxWidth: '90vw',
          }}
        >
          <Image src={Map} style={{ width: '100%', borderRadius: 4 }} />
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: window.matchMedia('(max-width: 768px)').matches ? '47.5%' : '49%',
              top: '86%',
            }}
            onClick={() => setMapIndex(0)}
          >
            E1
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: window.matchMedia('(max-width: 768px)').matches ? '47.5%' : '49%',
              top: '60%',
            }}
            onClick={() => setMapIndex(1)}
          >
            E2
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: '36%',
              top: '59%',
            }}
            onClick={() => setMapIndex(2)}
          >
            E3
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: '62%',
              top: '59%',
            }}
            onClick={() => setMapIndex(3)}
          >
            E4
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: '36%',
              top: '68%',
            }}
            onClick={() => setMapIndex(4)}
          >
            E5
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: '62%',
              top: '68%',
            }}
            onClick={() => setMapIndex(5)}
          >
            E6
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: '87%',
              top: '27%',
            }}
            onClick={() => setMapIndex(6)}
          >
            E7
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.onlineGreen,
              left: '93%',
              top: '27%',
            }}
            onClick={() => setMapIndex(10)}
          >
            I2
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: '10%',
              top: '27%',
            }}
            onClick={() => setMapIndex(7)}
          >
            E8
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.dndRed,
              left: window.matchMedia('(max-width: 768px)').matches ? '47.5%' : '49%',
              top: '10%',
            }}
            onClick={() => setMapIndex(8)}
          >
            E9
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.onlineGreen,
              left: '16%',
              top: '22%',
            }}
            onClick={() => setMapIndex(9)}
          >
            I1
          </div>
          <div
            className='map-tag-text'
            style={{
              backgroundColor: Colors.blurple,
              left: '3%',
              top: '27%',
            }}
            onClick={() => setMapIndex(11)}
          >
            N1
          </div>
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '72%',
              width: '25%',
              maxHeight: '50%',
              padding: '1%',
              borderRadius: 4,
              backgroundColor: Colors.vsAlmostBlack,
              overflow: 'auto',
            }}
          >
            <Typography style={{ color: mapData[mapIndex].color, fontWeight: 'bold' }}>
              {mapData[mapIndex].title}
            </Typography>
            <Typography>{mapData[mapIndex].description}</Typography>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '5%',
              borderRadius: 4,
              backgroundColor: Colors.vsAlmostBlack,
              display: 'flex',
              flexDirection: 'column',
              gap: '1vh',
              padding: '2%',
              overflowX: 'auto',
              overflowY: 'auto',
            }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '0.5vw', alignItems: 'center' }}
            >
              <div
                style={{ width: 8, height: 8, backgroundColor: Colors.dndRed, borderRadius: 2 }}
              />
              <Typography style={{ color: Colors.dndRed }}>Room</Typography>
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '0.5vw', alignItems: 'center' }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: Colors.onlineGreen,
                  borderRadius: 2,
                }}
              />
              <Typography style={{ color: Colors.onlineGreen }}>Item</Typography>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '0.5vw', alignItems: 'center' }}
            >
              <div
                style={{ width: 8, height: 8, backgroundColor: Colors.blurple, borderRadius: 2 }}
              />
              <Typography style={{ color: Colors.blurple }}>NPC</Typography>
            </div>
          </div>
        </div>
        <ChapterHeader index={6} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{
            maxWidth: '80vw',
            textAlign: 'justify',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vw',
          }}
        >
          <Typography>
            Perhaps the most interesting part of this campaign is the set of events that unfold
            throughout the narrative and give the story entiirely different themes. Below you can
            find a timeline of those events, involving the moment the players arrive at the palace
            up until the very final boss fight. The images displayed here were also generated using ChatGPT&#39;s Dall-e,
            integration as you can tell from the &#34;errors&#34; present in some of them. Initially I wanted to fix these images but then I found some of the apparitions to be quite fitting.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5vw',
            width: '80%',
            justifyContent: 'center',
            marginTop: '5vh',
            marginLeft: '5vw',
            marginRight: '5vw',
          }}
        >
          <Timeline
            style={{
              width: '40vw',
              marginTop: '5vw',
              minWidth: '40vw',
              backgroundColor: 'blue',
            }}
            items={timelineItems}
            onItemClick={(item: number) => setSelectedTime(item)}
          />
          <div style={{ height: '85vh', width: 1, backgroundColor: Colors.dndRed }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh' }}>
            <Typography
              variant='h3'
              style={{
                textAlign: 'center',
                width: '40vw',
                minWidth: '40vw',
                textOverflow: 'ellipsis',
                color:Colors.dndRed
              }}
            >
              {timelineItems[selectedTime].name}
            </Typography>
            <img
              src={timelineItems[selectedTime].image}
              style={{ width: '100%', height: '40vh', borderRadius:'2px' }}
            />
            <Typography
              style={{
                textAlign: 'justify',
                maxWidth: '40vw',
                maxHeight: '28vh',
                width: '100%',
                overflowY: 'auto',
              }}
            >
              {timelineItems[selectedTime].description}
            </Typography>
          </div>
        </div>
        <ChapterHeader index={7} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{
            maxWidth: '80vw',
            textAlign: 'justify',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vw',
          }}
        >
          <Typography>
            In my humble opinion, there are very few things more important to DND than ambience. If
            you set the right tone using the right tools, your players will be immersed (as long as
            they are not completely absorbed in cracking jokes/yelling at one another). With that
            being said, do not overdo it. Remember what is most important is for everyone to have
            fun, if you take too long (or too short) to set the mood your players will end up either
            not caring or phase out halfway through your descriptions.
          </Typography>

          <Typography>
            {' '}
            The best way to set the tone for the adventure is through music. Music is wonderful in
            that it expresses that which we have so much trouble forming into words.{' '}
          </Typography>
          <Typography>
            Below I have included a playlist of songs/ambiences to be used in the background while
            your players venture on.
          </Typography>
          <ul>
            <li>Track 1 should be played from Chapters 1 & 2.</li>
            <li>Track 2 should be played on Chapter 3.</li>
            <li>Track 3 should be played on Chapter 4.</li>
            <li>Track 4 should be played on Chapter 5.</li>
            <li>Track 5 should be played on Chapter 6.</li>
            <li>Track 6 should be played on Chapter 7.</li>
            <li>Track 5 should be played again at the end.</li>
          </ul>
        </div>
        <iframe
          width='560'
          height='315'
          style={{ maxWidth: '95%', height: '40vh' }}
          src='https://www.youtube.com/embed/videoseries?si=5pInlPxRK5k29Y9f&amp;list=PLabb5EYwab-HJf5XPxc_AY8g4mgiqKDH_'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>

        <ChapterHeader index={8} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{
            maxWidth: '80vw',
            textAlign: 'justify',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vw',
          }}
        >
          <Typography>
            During the creation process of this module as well as the consequent preparation I did
            for the session there are a few tools I used which I found particularly helpful and
            would like to include here:
          </Typography>
          <ul>
            <li>
              <Typography
                style={{
                  cursor: 'pointer',
                  color: Colors.dndRed,
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={() => window.open('https://rolladvantage.com/tokenstamp/')}
              >
                RollAdvantage - Tokens
              </Typography>
            </li>
            <li>
              <Typography
                style={{
                  cursor: 'pointer',
                  color: Colors.dndRed,
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={() => window.open('https://www.dungeonscrawl.com/')}
              >
                DungeonScrawl - Map
              </Typography>
            </li>
            <li>
              <Typography
                style={{
                  cursor: 'pointer',
                  color: Colors.dndRed,
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={() => window.open('https://tetra-cube.com/dnd/dnd-statblock.html')}
              >
                TetraCube - Stats
              </Typography>
            </li>
            <li>
              <Typography
                style={{
                  cursor: 'pointer',
                  color: Colors.dndRed,
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={() => window.open('https://roll20.net/')}
              >
                Roll20 - Engine
              </Typography>
              </li>
              <li>
              <Typography
                style={{
                  cursor: 'pointer',
                  color: Colors.dndRed,
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={() => window.open('https://tabletopaudio.com/')}
              >
                TabletopAudio - Soundpad
              </Typography>
            
            </li>
            <li>
              <Typography
                style={{
                  cursor: 'pointer',
                  color: Colors.dndRed,
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={() => window.open('https://www.reddit.com/r/DnDHomebrew/comments/qnbbf4/expanded_carnivorous_plants_by_sonixverselabs/')}
              >
               Carnivorous Plants Homebrew - Reddit
              </Typography>
            
            </li>

          </ul>
          <Typography>
            Feel free to use any tools at your disposal of course, but these tools in particular are
            not only free but also of great quality so I am sure they will be of use to many!
          </Typography>

          <Typography>Attributions for the icons used in section 7:

          
          </Typography>
          <ul>
              {attributions.map((elem, index) => <li key={index}>{elem}</li>)}
          </ul>

        </div>
        <ChapterHeader index={9} />
        <TriforceDivider color={Colors.dndRed} />
        <div
          style={{
            maxWidth: '80vw',
            textAlign: 'justify',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vw',
          }}
        >
          <Typography>
            I really want to drive home the message that this module is something that you will most
            likely come to enjoy with your friends (not with strangers) and even then that would
            depend on the friends themselves! Some people are particularly touchy when it comes to
            matters of love so I would recommend that you take great care when choosing to play this
            module or not with your group.
          </Typography>
          <Typography>
            Remember, DND at its heart is mostly about having fun! (and hating on the rule lawyers)
          </Typography>
          <Typography>
            Hope this has given you a well enough foundation of the module in the case you try to
            run it yourselves, or at least that it has inspired you to perhaps write a module of
            your own!
          </Typography>
          <Typography>Until next time.</Typography>
          <Typography>Your friend,</Typography>
          <Typography>- Aenemon</Typography>
        </div>
        <TriforceDivider upward color={Colors.dndRed} />
      </div>
      
    </div>
  );
};

/*
          <Timeline items={timelineItems} />
          <div style={{ height: '85vh', width: 1, backgroundColor: Colors.dndRed }} />
          <div>
            <Typography variant='h3' style={{ textAlign: 'center' }}>
              {timelineItems[selectedTime].name}
            </Typography>
*/

const mapData = [
  {
    color: Colors.dndRed,
    title: 'E1 - Welcoming Roundabout',
    description: `This is where all the players will arive at first. 
    A stone-built roundabout 
    with a majestic circular fountain in the middle.
    Some engine powered (1920s like) vehicles populate the sidewalks here.
    Players can choose to enter this area any way they like, however,
    it is typical to arrive by vehicles. If the players do arrive by vehicles,
    a servant is ready to take their vehicle and park it to the side of the roundabout.
    
    As soon as the players arrive here, Marcus and the staff 
    are standing at the door ready to welcome them in, fully aware of who they are and why
    they are here. Marcus upon greeting the players here will make small introductions, offer snacks
    and refreshments and prompt the players to walk inside the palace so that they can get started.
    The palace looks extremely ornate from outside, huge stained glass walls stand tall
    and look surprisingly sturdy despite their material. They carry many vibrant colors, 
    indigo, dark blue, crimson red all of them mixed in an interesting cacophony. The design on the glass
    is very geometric and in certain cases seems to depict important events in history.
    
    Since the context of the setting has remained hidden, I will leave it up to you to come up with the 
    the corresponding history behind these artworks, the important part here is to convey to your players
    the nature of this building and its owners. Lord Sinister and his adoration for history are particularly
    in play here.

    Through the windows reflectivity, there seems to be a pulsing source of light coming from within the building.
    Two massive oak doors, intricatively carved with plentiful flowers stand between the players and the interior
    which open with a reverberating creak upon Marcus and his advance.
    `,
  },
  {
    color: Colors.dndRed,
    title: 'E2 - Palace Main Hall',
    description: `The source of the pulse of light visible from outside of the palace is actually visible from here. 
    A large bonfire which is surprisingly cold and shimmers in all colors, contained in an ornate and magnificent marble brazier. 
    In this main hall, the characters are greeted by other guests that have come here simply wishing to attend the wedding. 
    The individuals I will leave to your imagination, however they should all be notorious criminals, dressed in the most lavish of ways. 
    The main hall itself is quite impressive, marble floors and pillars which hold a 55 meter ceiling. 
    The walls themselves are made of the same impressive and intricatively carved glass with depictions of historical moments in the city's history or revered religious figures.
    The main hall here splits into 4 different wooden doorways which lead to the private quarters of the 4 Sinister children which are to be wed. 
    The Main Hall also leads to a set of stairs which subsequently leads to the inner part of the palace where Lord and Lady (as well as the ceremonial throne room) reside.`,
  },
  {
    color: Colors.dndRed,
    title: 'E3 - Guest Room 1',
    description: `Like every other guest room, the room itself follows the general motif of the rest of the palace (glass walls, marble floor, wooden furniture) however, the specific details of its decorations depend on the Sinister offspring which they host (which is up to your discretion).
    Try to decorate the rooms in such a way that they complement the character's personality or perhaps tries to tell a story. Aurelia's room for instance would very likely be filled with maps and constellations from the Astral Sea etc.
    Within this room, there exists a secret entrance to one of the underground tunnels of the palace which lead to the Throne Room. A player can find the entrance by rolling a DC 15 Investigation check.`,
  },
  {
    color: Colors.dndRed,
    title: 'E4 - Guest Room 2',
    description: `Like every other guest room, the room itself follows the general motif of the rest of the palace (glass walls, marble floor, wooden furniture) however, the specific details of its decorations depend on the Sinister offspring which they host (which is up to your discretion).
    Try to decorate the rooms in such a way that they complement the character's personality or perhaps tries to tell a story. Aurelia's room for instance would very likely be filled with maps and constellations from the Astral Sea etc.Within this room, there exists a secret entrance to one of the underground tunnels of the palace which lead to the Throne Room. A player can find the entrance by rolling a DC 15 Investigation check.`,
  },
  {
    color: Colors.dndRed,
    title: 'E5 - Guest Room 3',
    description: `Like every other guest room, the room itself follows the general motif of the rest of the palace (glass walls, marble floor, wooden furniture) however, the specific details of its decorations depend on the Sinister offspring which they host (which is up to your discretion).
    Try to decorate the rooms in such a way that they complement the character's personality or perhaps tries to tell a story. Aurelia's room for instance would very likely be filled with maps and constellations from the Astral Sea etc.`,
  },
  {
    color: Colors.dndRed,
    title: 'E6 - Guest Room 4',
    description: `Like every other guest room, the room itself follows the general motif of the rest of the palace (glass walls, marble floor, wooden furniture) however, the specific details of its decorations depend on the Sinister offspring which they host (which is up to your discretion).
    Try to decorate the rooms in such a way that they complement the character's personality or perhaps tries to tell a story. Aurelia's room for instance would very likely be filled with maps and constellations from the Astral Sea etc.`,
  },
  {
    color: Colors.dndRed,
    title: `E7 - Lady's Quarters
    `,
    description: `Lady Sinister's Quarters are quite the big contrast from the rest of the palace as the interior itself is actually a conservatory of exotic plants and animals. 
    Anything from tigers, to displacer beasts to penguins can be found in here. In terms of the plants themselves there exists a Mantrap and a Death Frond as described in the Carnivorous plants homebrew linked in Section 9.
    The room is also full with Lady's lovers of all genders who are either frolicking amongst themselves or in a perpetual daze from what seems to be a miasma which hangs around in this room and causes people to feel content and sleepy.
    In the far end of the room, there is a large Queen sized (hehe) canopy bed in which Lady can be found resting in the "All is Quiet in Enellava" Chapter but is otherwise unoccupied. 
    On the bed itself, there rests a large crystall ball which acts as a scrying orb for within the palace. Lady can occasionally be found snooping around on her guests through it but will not let anyone touch it themselves. 
    The lush life present within this room, combined with the glass walls of the palace as well as a little creek which flows within here gives the players the impression that they are not really within a room at all but rather in some sort of hill or field in the wilderness.
    `,
  },
  {
    color: Colors.dndRed,
    title: `E8 - Lord's Quarters
    `,
    description: `Lord's Quarters are a stark contrast to that of Lady's. The glass here is an opaque black which makes the lighting here very dim. 
    In fact most of the light in this room comes from the friendly animated fire you can find in the fireplace here, called Prometheus. 
    The room holds a single King sized (xd) bed, along with a study desk, an old and dusty (but quite stacked) library as well as a handful of ominous paintings which decorate the walls. 
    Rummaging through the books and paintings, players can gather that Lord has an avid interest in history, philosophy and art as well as an obsession with Death in all its forms. 
    There is a dark and ominous aura about this room which however settles in after spending a few minutes in here, leaving in its place a strange peacefulness.`,
  },
  {
    color: Colors.dndRed,
    title: 'E9 - Throne Room',
    description: `The Throne Room is a large and spacious hall which has been redecorated for the purposes of a wedding. 
    The Massive glass walls here are intricatively woven into more depictions here and the glass has been tempered in all sorts of colors and shapes.
    Massive banners hang from the ceiling, depicting the symbol of reign of Lord and Lady (a pair of theatrical masks with ominous smiles and horns). In the far end of the throne room stand the thrones of Lord and Lady, whereas in the middle there exists a large stage like marble platform.
    In the circumference of the room, round tables have been laid out for the guests to eat. In scarce spots around the room, small trees sprout from within the confines of patches of soil in the ground.`,
  },
  {
    color: Colors.onlineGreen,
    title: 'I1 - Vindication & Revenge',
    description: `Lord Sinister's prized historical weapons. A pair of revolver guns with a powerful kick to them. 
    A player can use their action to attack with both weapons by rolling a +2 and a -2 roll with disadvantage regardless of their proficiencies. 
    Both bullets deal 4d6 + 1d4 damage and Vindication deals Radiant damage while Revenge deals necrotic damage. 
    The guns were known to have been wielded by an infamous tiefling slayer of old and for Lord's own peculiar reasons, he finds a particular interest in both the gun and the individual. 
    The container which holds these weapons is more or less invincible and can only be unlocked by inserting a combination of numbers into the lock. The combination is different on every session and it relies 
    on the concatenation of the "index" of the Sinister offspring combinations you have chosen (aka, their order of birth). For example if you choose Aurelia, Delilah, Esmeralda and Miranda as the one's being wed, the password will be:
    1 + 7 + 2 + 8 => 12728, because Aurelia is the eldest (1st), Esmeralda is the seventh-born and so on.`,
  },
  {
    color: Colors.onlineGreen, 
    title: 'I2 - Scrying Orb',
    description: `Lady Sinister's precious Scrying Orb. This shimmering purple crystal ball enables her to view any room or corridor within the palace barring the underground tunnels. 
    A player with a significant knowledge in Arcana can use the orb themselves with a DC 12 Arcana check by imagining the room which they want to view while touching the orb.`,
  },
  {
    color: Colors.sylemsBlue,
    title: 'N1 - Prometheus',
    description: `Prometheus the friendly flame can be found resting in the fireplace here. Prometheus will take an interest in anyone who walks through the door and will try to strike up conversation with them.
    He is very fond of his master although he seems to lack the understanding of the depth of his criminal nature and only naively sees him as his father figure. In fact, Prometheus seems to somewhat exist in an 
    entirely different world from others in regards towards his self-awareness. He is a cheerful little flame that will try to befriend everyone (even if they tell him that they don't want to be his friend)! :))`,
  },
];
const itemData = [
  {
    img: Aurelia,
    title: 'Aurelia',
    description: `Aurelia is the eldest of the Sinister children. 
    An Astral Elf with a keen appreciation for astronomy and a insiatiable thirst for exploring the Astral Sea.
    Aurelia will very likely grow to like anyone who seems like they 
    have travelled a long way to get to the palace. 
    She is not particularly fond of her birthplace (Enellava) and it's inhabitants. Characters with the Outlander background have an advantage in any Charisma related rolls against her.
    Aurelia is mostly fond of Lord and Lady, however she takes great offense in the presence of her other siblings as well as the palace staff.`,
  },
  {
    img: Delilah,
    title: 'Delilah',
    description: `Delilah is the seventh-born of the Sinister children. A rough around the edges Half Orc who has inherited her non biological
       father's appreciation for weapons.
       Delilah will be drawn to any visitors who may happen to carry with them unusual or well-crafted weapons.
       Delilah is an avid blacksmith who has on multiple occasions tried to earn the approval of her father through her work but more often than not has received his absent-minded dismissal.
       Delilah is a bit indifferent when it comes to her mom and her bussiness, however, she does seem to be fond of her (younger) siblings.
       `,
  },
  {
    img: Esmeralda,
    title: 'Esmeralda',
    description: `Esmeralda is the second-born of the Sinister Children. A stunningly beautiful Dark Elf whose striking intelligence is apparent from a simple look.
    Esmeralda pays very little mind for her family (save for her elder sister Aurelia, with who she is very close). She has inherited her Father's obsession with art,
    although she often finds his interpretations of it to be crude, lifeless and those of a simpleton's. Any character with an artistic flair, whether it is in music, writing, painting or any other form of art, will instantly earn her affection.`,
  },
  {
    img: Miranda,
    title: 'Miranda',
    description: `Miranda is the eighth-born of the Sinister children. 
    A graceful Aasimar who always had a fascination for her place of birth, The Seven Heavens of Mount-Celestia.
    Miranda was stripped away from her homeland from a young (but still conscious) age and has been nurturing a deep hatred for Lord and Lady ever since.
    Miranda will find any adventurer who is an Aasimar (or in one way or another has a connection to the Upper Planes) extremely intriguing. She is, however, not much of a fighter
    and will refuse to revolt against her parents out of fear.`,
  },
  {
    img: Okami,
    title: 'Okami',
    description: `Okami is the third-born of the Sinister Children. She is a powerful half-tabaxi who, similarly to Miranda was stripped away from her forest at a young age. She is not particularly fond of the city she has found herself in. 
    She finds it too noisy and too smelly in fact. Regardless of her dislike for Enellava, Okami is a very playful character and will jump at any opportunity for games/challenges. 
    If Okami is matched to a player character who has a particularly high score on Athletics/Acrobatics, she will challenge them to a test of skill. Winning this test of skill is the only way to get to her heart.
    In all other cases, Okami will do her best to ignore the character.`,
  },
  {
    img: Nareen,
    title: 'Nareen',
    description: `Nareen is the ninth-born of the Sinister Children. 
    A highly intelligent tiefling with an appetite for strategy games. 
    Nareen is destined to become her father's right hand man... or well... woman. 
    She is deeply intrigued by the political games her father is involved in and wishes to play a big part to them as well.
    Nareen holds a deep love for her father although she understands that he can come off as cruel or inhuman to some.
    She is not particularly fond of her mother and she is quite indifferent when it comes to her siblings. `,
  },
  {
    img: Alwyn,
    title: 'Alwyn',
    description: `Alwyn is the fourth born son of the Sinister although neither his name or its connotation fit him well. 
    Alwyn is a gnome so unbelievably pure and innocent that he actively makes it hard to believe he is somehow related to his parents. 
    (Aside from the race difference of course!) Alwyn is a curious little gnome with an affinity and genuine hunger for magic. 
      He spends most of his time in the backrooms of the palace, rummaging on as many books as he can find. 
      Alwyn will take an interest in any player with an equal understanding or prowess in Arcana. Alwyn is generally fond of everyone and everything.`,
  },
  {
    img: Wolfgang,
    title: 'Wolfgang',
    description: `Wolfgang is the tenth-born son of the Sinister. A valiant centaur who screams of "Paladin" from a mile away. 
    Wolfgang is known to stand out from his family in his own unique way that differs from Alwyn. 
    Instead of an absolute and blissful ignorance, Wolfgang understands the evil that his family is rooted in,
    however he keeps up the pretense that they somehow serve the role of the Guardians of Enellava, which in some twisted way, they do.
    For that reason, he is quite proud of his family, parents and siblings alike. Wolfgang has a particular interest in the religious figures of the world.
    Any character who is a Cleric, Paladin or Druid or who has a >=4 Religion modifier draws his attention. `,
  },  
  {
     img: Abelardo,
    title: 'Abelardo',
    description: `Abelardo is the fifth born son of the Sinister. A mischievous Yuan-Ti with a thirst for combat and glory. 
    Abelardo often finds himself sparring in his free time and has very little patience for idle chat or social pleasantries.
    Abelardo does not bode well with his family. He often sees himself as above all of them, especially his siblings. Much like his father, 
    he sees the servants of the palace as something below human and takes any chance he can get to belittle them or make fun of them. Abelardo will share an interest
    in any player character who either shares or feigns sharing his views.`,
  },
  {
    img: Kaiden,
    title: 'Kaiden',
    description: `Kaiden is the eleventh-born son of the Sinister. An elegant fairy bard who has a deep apetite for legends and myths, especially those that involve romance.
    Kaiden has very little interest for the members of his family and will do anything in his power to avoid interacting with them.
    Kaiden will find interest in any player who has a good story to tell, or perhaps someone with a well executed Performance who would try to woo him.`,
  },
  {
    img: Edward,
    title: 'Edward',
    description: `Edward is the sixth born son of the Sinister. A gentle goliath who views the concept of battle from a more philosophical and perhaps mature way than his elder brother Abelardo.
    Edward sees bloodshed as a necessary means to an end and although he does not take pride in it, he spends most of his time training for it as well. In that regard, he does look up to his father and is very
    protective of the rest of his family. Edward will take an interest in any player-character who shows a strong initiative to protect that which they fear to lose. (as defined earlier!)`,
  },
  {
    img: Seth,
    title: 'Seth',
    description: `Seth is the twelvth-born child of the Sinister. A mysterious changeling who seems to enjoy the endless quarells of the weird family they have found themselves in.
    Seth is as fond of their family as they are fond of any other stranger on the road. Seth has a particular interest in disguises and wishes to be a well renowned actor some day.
    Any player with an expertise in disguises or a high enough charisma instantly gains their attention.`,
  },
];

const content = {
  description: `Welcome to Wedding Night in the bowels of Hell! A D&D homebrew oneshot
   that I recently had the pleasure of writing and running. It was meant as a special event
   for my birthday, around which time I had many inspirations that led to me thinking about
    the concept behind this module being an ominous wedding invitation. Before we dive in to the details,
    I want to share those inspirations with you.`,
};

export default Homebrew;
