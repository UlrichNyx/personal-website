import React, { ReactElement } from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../../styles/Colors';
import { archives } from '../../../../content/Archives';

import { Divider } from '@mui/material';
import TriforceDivider from '../../../../comps/TriforceDivider';

import Image from '../../../../comps/Image';
import Spoiler from '../../../../comps/Spoiler';
import PromAndZeus from '../../../../assets/homebrew/pnz.jpeg';
import MotherSah from '../../../../assets/homebrew/mother-shahraz.jpeg';
import IllidanPortrait from '../../../../assets/homebrew/illidan-p.jpeg';
import Illidan from '../../../../assets/homebrew/illidan.jpeg';
import Enellava from '../../../../assets/homebrew/enellava.jpg';
import Letter from '../../../../assets/homebrew/letter.jpeg';
import SBLord from '../../../../assets/homebrew/lord-sinister.png';
import './Style.css';
import './Font.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const chapters = [
  'Motivation',
  'Excerpt',
  'Introduction',
  'The Invitation Letter',
  'Characters',
  'Locations',
  'Events',
  'Music',
  'Tools',
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
          marginBottom: '2vh',
          fontWeight: 'bold',
          fontFamily: 'inherit',
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
        <TriforceDivider color={Colors.dndRed} />
        <ChapterHeader index={0} />

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
        <TriforceDivider color={Colors.dndRed} />
        <ChapterHeader index={1} />
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
        <TriforceDivider color={Colors.dndRed} />
        <ChapterHeader index={2} />

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

        <Typography>
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
            onClick={() => window.open('https://nightcafe.studio/')}
          >
            {' '}
            NightCafe.
          </span>
        </Typography>
        <Typography>
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
        <Typography>
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
        <TriforceDivider color={Colors.dndRed} />
        <ChapterHeader index={3} />

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
        <Typography style={{ fontFamily: 'Dungeon', fontSize: 24, textAlign: 'justify' }}>
          &#34;You are formally invited to Lord & Lady&apos;s special wedding, joining the lives of:
        </Typography>
        <Typography style={{ fontFamily: 'Dungeon', fontSize: 24, textAlign: 'justify' }}>
          {playerName} & {childName}, {produceNumber(childrenData[childName].number)}{' '}
          {childrenData[childName].gender === 'female' ? 'daughter' : 'son'} of the Sinister hosted
          in the lavish palace of Enellava tomorrow at noon.&#34;
        </Typography>
        <Typography style={{ fontFamily: 'Dungeon', fontSize: 24, textAlign: 'justify' }}>
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
        <TriforceDivider color={Colors.dndRed} />
        <ChapterHeader index={4} />
        <div
          className='stat-block-grid'
          style={{
            borderRadius: 4,
            padding: 10,
            gap: '1vh',
            maxWidth: '90vw',
            textAlign: 'justify',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Image src={IllidanPortrait} style={{ borderRadius: 4 }} />
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5vh' }}
          >
            <div style={{ borderRadius: 4, maxWidth: '100%', maxHeight: '35%', overflowY: 'auto' }}>
              <Image src={SBLord} style={{}} />
            </div>
            <Typography>
              Lord Sinister is one of those types of people you never wanna mess with. Stoic and yet
              friendly, in his own frightening manner, Lord Sinister is an avid collector of art and
              weapons alike. He is also very deeply interested in philosophy. One too many times he
              will pose ethically challenging questions to characters in order to judge their grasp
              or perhaps opinion regarding the matter. Lord Sinister shows some partial respect to
              the players as they themselves are noteworthy criminals and will make light talk about
              their achievements, or perhaps the contributions that they can make as new members of
              the family. He is particularly harsh regarding his offspring, especially the ones that
              do not fare off so well.
            </Typography>
          </div>
        </div>
        <Typography>Lady Sinister</Typography>
        <Typography>Marcus</Typography>
        <Typography>Prometheus the Animated Fire</Typography>
        <Typography>The Help</Typography>
        <Typography>Daughters</Typography>
        <Typography>Sons</Typography>
        <Typography>To be continued...</Typography>
      </div>
    </div>
  );
};

const content = {
  description: `Welcome to Wedding Night in the bowels of Hell! A D&D homebrew oneshot
   that I recently had the pleasure of writing and running. It was meant as a special event
   for my birthday, around which time I had many inspirations that led to me thinking about
    the concept behind this module being an ominous wedding invitation. Before we dive in to the details,
    I want to share those inspirations with you.`,
};

export default Homebrew;
