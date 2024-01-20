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
import FelVoidwalker from '../../../../assets/homebrew/voidwalker.jpeg';
import Prometheus from '../../../../assets/homebrew/prometheuspic.png';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Aurelia from '../../../../assets/homebrew/astralelf.jpeg';
import Delilah from '../../../../assets/homebrew/delilah.jpeg';
import Esmeralda from '../../../../assets/homebrew/drow.png';
import Miranda from '../../../../assets/homebrew/miranda.jpeg';
import Okami from '../../../../assets/homebrew/catgirl.png';
import Nareen from '../../../../assets/homebrew/nareen.avif';
import Alwyn from '../../../../assets/homebrew/alwyn.png';
import Wolfgang from '../../../../assets/homebrew/centaur.webp';
import Abelardo from '../../../../assets/homebrew/yuanti.webp';
import Kaiden from '../../../../assets/homebrew/fairy.png';
import Edward from '../../../../assets/homebrew/goliath.webp';
import Seth from '../../../../assets/homebrew/changeling.webp';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Map from '../../../../assets/homebrew/map.png';
import Timeline from './Timeline';

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
      image: PromAndZeus,
      description: `This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description
      This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description
      This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description
      This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description
      This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description
      This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description
      This is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small descriptionThis is a small description`,
    },
    { name: 'Sightseeing', image: PromAndZeus, description: 'This is a small description' },
    {
      name: 'Courting the matches',
      image: PromAndZeus,
      description: 'This is a small description',
    },
    {
      name: 'Dinner with the In-Laws',
      image: PromAndZeus,
      description: 'This is a small description',
    },
    {
      name: 'All is Quiet in Enellava',
      image: PromAndZeus,
      description: 'This is a small description',
    },
    {
      name: 'The Marriage ceremony',
      image: PromAndZeus,
      description: 'This is a small description',
    },
    { name: 'The Final Showdown', image: PromAndZeus, description: 'This is a small description' },
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
        <VDivider />
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
        <div style={{ display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'center' }}>
          <div className='stat-block-grid'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={Tibalt} style={{ borderRadius: 4, maxWidth: '90%', height: '65vh' }} />
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
          <VDivider />

          <div
            className='stat-block-grid'

          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={LadyPortrait}
                style={{ borderRadius: 4, maxWidth: '90%', height: '65vh', alignSelf: 'center' }}
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
          <VDivider />
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={Marcus} style={{ borderRadius: 4, maxWidth: '90%', height: '65vh' }} />
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
                down Lord & Lady. (There is more on this in the next section)
              </Typography>
            </div>
          </div>
          <VDivider />
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image src={Servant} style={{ borderRadius: 4, maxWidth: '90%', height: '65vh' }} />
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
                for Marcus. The ring the servants are wearing is a mind-controlling charm which
                renders them incapable of disobeying Lord & Lady. Forcibly taking off the ring from
                a servant will immediately bring them out of their control.
              </Typography>
            </div>
          </div>
          <VDivider />
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={Prometheus}
                style={{ borderRadius: 4, maxWidth: '90%', height: '65vh' }}
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
          <VDivider />
          <div
            className='stat-block-grid'
          >
            {childSB !== -1 ? (
              <div
                style={{
                  backgroundImage: `url(${itemData[childSB].img})`,
                  backgroundSize: 'cover',
                  backgroundColor: 'red',
                  backgroundRepeat: 'no-repeat',
                  height: '65vh',
                  borderRadius: 4,
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
              <ImageList variant='quilted' cols={3} rowHeight={164}>
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
                  : 'Please pick an offspring of the Sinister!'}
              </Typography>
            </div>
          </div>

          <VDivider />
          <div
            className='stat-block-grid'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src={FelVoidwalker}
                style={{ borderRadius: 4, maxWidth: '90%', height: '65vh' }}
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
            instantly forfeits their own protection within these safe-spaces. Enellava is
            essentially split into three sections. The palace, which exists on a separate island
            nearby. The corporate section, which is basically the port of the island and finally the
            residential areas, which are also the most crime-infested areas and make up the rest of
            the island.
          </Typography>
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
              height: '50%',
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
            up until the very final boss fight.
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
            <Typography
              variant='h3'
              style={{
                textAlign: 'center',
                width: '40vw',
                minWidth: '40vw',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {timelineItems[selectedTime].name}
            </Typography>
            <img
              src={timelineItems[selectedTime].image}
              style={{ width: '100%', height: '40vh' }}
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
            your players venture on. Each video corresponds to one of the chapters you saw in the
            previous section.
          </Typography>
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
          </ul>
          <Typography>
            Feel free to use any tools at your disposal of course, but these tools in particular are
            not only free but also of great quality so I am sure they will be of use to many!
          </Typography>
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
    This is essentially a stone-built roundabout 
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
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E3 - Guest Room 1',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E4 - Guest Room 2',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E5 - Guest Room 3',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E6 - Guest Room 4',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E7 - Ladys Quarters',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E8 - Lords Quarters',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.dndRed,
    title: 'E9 - Throne Room',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.onlineGreen,
    title: 'I1 - Vindication & Revenge',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.onlineGreen,
    title: 'I2 - Scrying Orb',
    description: 'This is where all the players will arive at first.',
  },
  {
    color: Colors.sylemsBlue,
    title: 'N1 - Prometheus',
    description: 'This is where all the players will arive at first.',
  },
];
const itemData = [
  {
    img: Aurelia,
    title: 'Aurelia',
    description: 'Aurelia is the...',
  },
  {
    img: Delilah,
    title: 'Delilah',
    description: 'Delilah is the...',
  },
  {
    img: Esmeralda,
    title: 'Esmeralda',
    description: 'Esmeralda is the...',
  },
  {
    img: Miranda,
    title: 'Miranda',
    description: 'Miranda is the...',
  },
  {
    img: Okami,
    title: 'Okami',
    description: 'Okami is the...',
  },
  {
    img: Nareen,
    title: 'Nareen',
    description: 'Nareen is the...',
  },
  {
    img: Alwyn,
    title: 'Alwyn',
    description: 'Alwyn is the...',
  },
  {
    img: Wolfgang,
    title: 'Wolfgang',
    description: 'Wolfgang is the...',
  },
  {
    img: Abelardo,
    title: 'Abelardo',
    description: 'Abelardo is the...',
  },
  {
    img: Kaiden,
    title: 'Kaiden',
    description: 'Kaiden is the...',
  },
  {
    img: Edward,
    title: 'Edward',
    description: 'Edward is the...',
  },
  {
    img: Seth,
    title: 'Seth',
    description: 'Seth is the...',
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
