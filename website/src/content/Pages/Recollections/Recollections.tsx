import React from 'react';
import Typography from '@mui/material/Typography';

import '../../../styles/screens/Recollections.css';

import { IconButton, Fade } from '@mui/material';
import Image from '../../../comps/Image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { extractHaikus, HaikuProps } from './Haikus';
import { extractPoems, PoemProps } from './Poems';
import Tooltip from '@mui/material/Tooltip';
import TocIcon from '@mui/icons-material/Toc';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import kanagawa from '../../../assets/recollections/kanagawa.jpeg';

const pageData = {
  title: 'Recollections of a Drowned Mind',
  subtitle: 'A collection of haikus and poems.',
  date: '2022',
  image: kanagawa,
  color: 'cornflowerblue',
};

const chapters = [
  'In the morning sun of Haikus',
  'Travel to the Underworld',
  'Wearing the mask of a student',
  'Paying tribute to Apollo',
  'Ascend into deeper depths',
  'Second Sun',
  'The Separation of the Mind',
  'Winged Victory',
  'In the nightly shower of starlight',
];

const CHAPTER_OFFSET = 2;
const POEM_OFFSET = CHAPTER_OFFSET + chapters.length;

const Haiku: React.FunctionComponent<HaikuProps> = ({ line1, line2, line3 }) => (
  <div style={{ textAlign: 'center', padding: '4px 0' }}>
    <Typography style={{ fontWeight: 'bold' }}>{line1}</Typography>
    <Typography style={{ fontWeight: 'bold' }}>{line2}</Typography>
    <Typography style={{ fontWeight: 'bold' }}>{line3}</Typography>
  </div>
);

const HDivider: React.FunctionComponent = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '3vw', margin: '3vh auto', width: '80%' }}>
    <div style={{ height: 1, flex: 1, backgroundColor: 'cornflowerblue', opacity: 0.35 }} />
    <div style={{ height: 9, width: 9, border: '1px solid cornflowerblue', rotate: '45deg', opacity: 0.45 }} />
    <div style={{ height: 1, flex: 1, backgroundColor: 'cornflowerblue', opacity: 0.35 }} />
  </div>
);

const renderChapter = (index: number, haikus: HaikuProps[]): JSX.Element => {
  switch (index) {
    case 0:
      return (
        <div className='recollections-section'>
          <Typography>
            It would be a lie if I were to say that my inspiration for poetry doesn&#39;t derive
            from the master and father of Haikus himself, Matsuo Bashō. Bashō, for reasons both
            poetic and religious, travelled his homeland, Japan, twice on foot throughout his entire
            life. In his travels, he would often gaze at the scenery that captivated his attention
            and in an attempt to eternalize his vivid memories, with carefully selected, gilded
            words, he wrote these intricate pieces of poetry known as haikus.
          </Typography>
          <Typography>
            The haikus included in this collection are but mere photographs from the things that are
            often missed. A homage, to the potent feelings bound to us throughout our individual
            journeys, the time transcendent nature of human bonds and the divinity of even the
            smallest pebble in that which we call our home.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', gap: '2vw' }}>
            <div>
              <Typography>旅に病んで</Typography>
              <Typography>夢は枯野を</Typography>
              <Typography>かけ廻る</Typography>
            </div>
            <div>
              <Typography>Sick on my journey,</Typography>
              <Typography>My dream ran about</Typography>
              <Typography>A desolate field.</Typography>
            </div>
          </div>
          <Typography style={{ textAlign: 'center' }}>- Matsuo Bashō&#39;s final haiku</Typography>
        </div>
      );

    case 1:
      return (
        <div className='recollections-section'>
          <Typography>
            At some point in my youth, when my heart was burning brighter and my limbs were moving
            faster, I had the fortune to travel to a place whose name invokes the image of a nether
            but is yet so very far from it. While flying north in the cold morning air, mesmerized
            by the dark sky:
          </Typography>
          <Haiku {...haikus[0]} />
          <Typography>
            Upon arrival my heart was heavy. The purpose of the trip was of professional nature,
            but my mind couldn&#39;t help but wander into boundless possibilities of the unknown as
            the world called to me for adventure. On the perfectly laid out red streets of our
            destination, only a single brick was misplaced:
          </Typography>
          <Haiku {...haikus[1]} />
          <Typography>
            On the days of the conference, duty called. While under the virtual weight of world-wide
            problems and within the chaos of organization and time, memories of a deep blue gaze:
          </Typography>
          <Haiku {...haikus[2]} />
          <Typography>
            Walking in the freezing cold streets of Hague, our group and my friends steps ahead of
            me. I took a moment to show my respects and passed through the torii gate leading into
            another part of town.
          </Typography>
          <Haiku {...haikus[3]} />
          <Typography>
            One of my many purposes in this trip was to reunite with an old acquaintance from the
            City of Light who I hadn&#39;t seen in over a year. Seeing her again somehow seemed like
            a work of god, if one would take into account the circumstances.
          </Typography>
          <Haiku {...haikus[4]} />
          <Typography>
            Amidst the inevitable disorder of a large conference, a group of friends talking gleefully
            as if the world around them wasn&#39;t burning.
          </Typography>
          <Haiku {...haikus[5]} />
          <Typography>
            While trying to speak in front of hundreds, my mind was clouded by fear. Would I get to
            see her again? The blue in her eyes. The red in my heart.
          </Typography>
          <Haiku {...haikus[6]} />
          <Typography>
            Wishing goodbye to those we have met, I wrote a poem for her, whom history dictated to
            be an enemy, but like many other mortal qualms, fell short to the challenge opposed by
            the beating of the heart. I gave it to her enclosed palm, hands clasping and hugs
            uniting, under the judgemental eye of a supervisor and an otherworldly desire to kiss
            the friendly stranger in front of me.
          </Typography>
          <Haiku {...haikus[7]} />
          <Typography>The feeling of emptiness, after all is said and done:</Typography>
          <Haiku {...haikus[8]} />
          <Typography>
            With nothing but my faith in fate, we press on. The fleeting nature of time haunting me:
          </Typography>
          <Haiku {...haikus[9]} />
          <Haiku {...haikus[10]} />
          <Haiku {...haikus[11]} />
        </div>
      );

    case 2:
      return (
        <div className='recollections-section'>
          <Typography>
            In an area of my hometown I never knew quite well, spring around the corner and thoughts
            of me conquering a mountain filling my mind. What a lovely time it was... filled with the
            challenges of proving one&apos;s self, yet still being protected by the roof of
            one&apos;s home.
          </Typography>
          <Haiku {...haikus[12]} />
          <Haiku {...haikus[13]} />
          <Haiku {...haikus[14]} />
          <Typography>
            On one of the most unforgettable nights of my life. Two friends by my side, meeting new
            people that I never thought would even exist. Riding the sunset of the dawning moon.
          </Typography>
          <Haiku {...haikus[15]} />
          <Typography>
            Contemplations of a new love. One as elusive and as ungraspable as the water flowing
            from a great river.
          </Typography>
          <Haiku {...haikus[16]} />
          <Typography>
            Another love. This one took its time to stay and talk and kiss but left without a word.
          </Typography>
          <Haiku {...haikus[17]} />
          <Haiku {...haikus[18]} />
          <Typography>
            On a misty morning, the sun shining overhead and yet barely being able to pierce the
            shroud of doubt.
          </Typography>
          <Haiku {...haikus[19]} />
          <Haiku {...haikus[20]} />
          <Haiku {...haikus[21]} />
          <Typography>
            Sleeping in between activities, a sharp headache haunting my head, the sun seeming ever
            so malignant. Imagination running wild, bringing stories worthy of death, to life.
          </Typography>
          <Haiku {...haikus[22]} />
          <Haiku {...haikus[23]} />
          <Typography>
            On a school trip to Naousa. Surrounded by mountains and fields and friends alike.
            Singing happy tunes and thinking happy thoughts.
          </Typography>
          <Haiku {...haikus[24]} />
          <Haiku {...haikus[25]} />
          <Typography>Comforted with a word and an embrace, a quiet conversation at night.</Typography>
          <Haiku {...haikus[26]} />
          <Typography>Awakening from a slumber of deep premonition:</Typography>
          <Haiku {...haikus[27]} />
          <Typography>
            Sunlight burning imprints onto my vision, I await for love in an old square with a church.
          </Typography>
          <Haiku {...haikus[28]} />
          <Typography>As the world cries, the rain lets my thoughts slide down the window.</Typography>
          <Haiku {...haikus[29]} />
          <Haiku {...haikus[30]} />
          <Typography>
            A picture of a loved one that captivated my heart. I keep it close as I venture on to an
            uncertain tomorrow.
          </Typography>
          <Haiku {...haikus[31]} />
          <Typography>
            Stuck in a perpetual maze of secrets. What is the truth, and how many lies is it made of?
          </Typography>
          <Haiku {...haikus[32]} />
          <Haiku {...haikus[33]} />
          <Typography>
            The ultimatum of a long search. I finally reached the end of the maze, and yet my journey
            resulted not in salvation but rather, despair.
          </Typography>
          <Haiku {...haikus[34]} />
          <Haiku {...haikus[35]} />
          <Typography>Trying to find the courage to change and move on;</Typography>
          <Haiku {...haikus[36]} />
        </div>
      );

    case 3:
      return (
        <div className='recollections-section'>
          <Typography>
            After the heart-breaking start of a long summer, I opted to travel once again, hoping
            that whatever it is I find in my journey, will help me fix this broken soul. On a ship to
            my destination, the sun imprints itself on every wave of the boundless sea.
          </Typography>
          <Haiku {...haikus[37]} />
          <Typography>
            Troubling myself with unnecessary wonder. My body may have travelled but my soul remains
            behind. Laying out in the warm sun and powerful wind, I realize the haven I have found
            myself in.
          </Typography>
          <Haiku {...haikus[38]} />
          <Haiku {...haikus[39]} />
          <Typography>
            Visions of a distant monastery across the sea and on top of a mountain peak. At
            night-time, the lightless mountain blended with the dark night sky, revealing a floating
            illuminating cross.
          </Typography>
          <Haiku {...haikus[40]} />
          <Typography>
            Navigating the deserts of a wind-ridden land, coming across a pack of peaceful animals.
          </Typography>
          <Haiku {...haikus[41]} />
          <Haiku {...haikus[42]} />
          <Typography>
            The end of my journey was followed by a brave venture into the depths of that which I
            feared to face. Confronting the past, I found that there was much less suffering waiting
            for me than I anticipated. Looking back at this memory, I completely understand why I
            chose to call it the devil&#39;s lair. Even the warmth of affection turns bitter by the
            poison of this theatrical play.
          </Typography>
          <Haiku {...haikus[43]} />
          <Typography>
            A part of me wishes for the summer to be over, for me to put my mask back on and continue
            existing within boundaries again. Another part screams for individuality, bringing me into
            a predicament. Alas, the frivolity of mankind really has no limits, and whether we like
            it or not, our bounded souls can never escape this prison.
          </Typography>
          <Haiku {...haikus[44]} />
        </div>
      );

    case 4:
      return (
        <div className='recollections-section'>
          <Typography>
            The start of the year turned out to be much more exciting than I anticipated. New faces
            in my circle. A night spent with a beautiful lass, looking across the sea in embrace,
            whispering and kissing. It is often the simplest of moments in life, that complicate it
            the most.
          </Typography>
          <Haiku {...haikus[45]} />
          <Haiku {...haikus[46]} />
          <Typography>
            The mountain I longed for over a year ago presented itself to me. With a great stride in
            my feet from my renewed energy, I climbed atop it with friends.
          </Typography>
          <Haiku {...haikus[47]} />
          <Haiku {...haikus[48]} />
          <Typography>
            After the long climb, came the time for the downfall. A creeping illness overcoming me, I
            try to make peace with the poison running in my veins.
          </Typography>
          <Haiku {...haikus[49]} />
          <Typography>
            My dark reality found its way into my imagination. Such was the birth of creative horror.
          </Typography>
          <Haiku {...haikus[50]} />
          <Typography>
            No peace can be found in the simple things anymore. Looking back at what was behind me, I
            saw nothing but chaos.
          </Typography>
          <Haiku {...haikus[51]} />
          <Typography>
            After my soul was exhausted a promise of love and comfort kept me running. As if a
            stained-glass window contains the world it depicts.
          </Typography>
          <Haiku {...haikus[52]} />
          <Haiku {...haikus[53]} />
        </div>
      );

    case 5:
      return (
        <div className='recollections-section'>
          <Typography>
            A new era begins. One of uncertainty and fluctuations. But a worthy one for sure. I am
            finally reunited and make peace with an old and precious lover. A lot of feelings start
            to resurface, and yet balance remains in the world.
          </Typography>
          <Haiku {...haikus[54]} />
          <Haiku {...haikus[55]} />
          <Haiku {...haikus[56]} />
          <Typography>
            Exploring a new metaphysical world, I manage to look at different perspectives in life.
          </Typography>
          <Haiku {...haikus[57]} />
          <Haiku {...haikus[58]} />
          <Typography>
            A great agony overcomes me, the feeling that my body has reached its limits. Drawing for
            desperate breaths, my mind wanders in the boundless evening sky.
          </Typography>
          <Haiku {...haikus[59]} />
          <Haiku {...haikus[60]} />
          <Haiku {...haikus[61]} />
        </div>
      );

    case 6:
      return (
        <div className='recollections-section'>
          <Typography>
            Below is an account of one of my most memorable dreams. Awaking in the southernmost
            place of earth, looking over the horizon and witnessing the end of the world, along with
            a familiar person, perhaps our planet itself, allowing me to feel comfort and serenity,
            despite the sorrowful and morose image before me.
          </Typography>
          <Haiku {...haikus[62]} />
          <Haiku {...haikus[63]} />
          <Haiku {...haikus[64]} />
          <Haiku {...haikus[65]} />
          <Haiku {...haikus[66]} />
        </div>
      );

    case 7:
      return (
        <div className='recollections-section'>
          <Typography>
            In the island of the triumphant winged victory, I contemplate on things. As night befalls
            the land, I am reminded of the Hour of Madness. The blue flame of illuminating truth
            burns bright.
          </Typography>
          <Haiku {...haikus[67]} />
          <Haiku {...haikus[68]} />
          <Haiku {...haikus[69]} />
          <Typography>
            Growing somewhat nostalgic, the cool wind of a summer evening on my face as we raced
            across the mountains.
          </Typography>
          <Haiku {...haikus[70]} />
          <Typography>
            Living with intrusion is a somewhat herculean task. The mind only hushes once it has
            exhausted all of its abnormal worries.
          </Typography>
          <Haiku {...haikus[71]} />
          <Haiku {...haikus[72]} />
          <Typography>
            Haven&#39;t written something in a while. Seeing an inscription on an abandoned mural,
            my imagination awakens from its slumber, and that voice which so softly sings its lyrics
            to me returns for some final words.
          </Typography>
          <Haiku {...haikus[73]} />
          <Haiku {...haikus[74]} />
          <Haiku {...haikus[75]} />
        </div>
      );

    case 8:
      return (
        <div className='recollections-section'>
          <Typography>
            This marks the end of my adolescent years. Everything that comes after is a different
            chapter. Not the recollections of a drowned mind. Perhaps a breathing mind, or even a
            swimming mind.
          </Typography>
          <Typography>
            In thinking of what to write for this epilogue, I cannot help but express my desire for a
            better world. I deeply believe in the future of a mankind that is united, much like the
            way our material essence was conceived into this reality. In this rapidly expanding
            universe, the souls of all people will be connected, regardless of our physical proximity.
            Such is my hope, my vision for a future world. One which I alone am not capable of
            bringing and can only dream of in my ruminations.
          </Typography>
          <Typography>
            And although my word will not be law, and although my feelings will not touch all hearts,
            this idea will hopefully cause a ripple in the vast ocean of human emotion. A ripple is
            all it takes, for a wave to begin.
          </Typography>
          <Typography>
            As a parting gift, I leave you the following poems. Some of them I held close to my
            heart. Others were written out of pure existential angst. All of them carry my infectious
            emotions.
          </Typography>
          <Typography>
            Many questions may be born from your reading, for instance, what is a Sylem? Why is
            there a greek poem in an English anthology? Where is Entropy Part I? Questions as
            elluding as time itself. Search not for answers, but if you absolutely have to, find them
            within yourself.
          </Typography>
          <Typography>
            Strive for excellence, and when I see you again, tell me all about your adventures and I
            will tell you all about mine.
          </Typography>
          <Typography>~ Filippos</Typography>
        </div>
      );

    default:
      return <div />;
  }
};

const Recollections: React.FunctionComponent = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [haikus, setHaikus] = React.useState<HaikuProps[]>([]);
  const [poems, setPoems] = React.useState<PoemProps[]>([]);
  const [spotifyExpanded, setSpotifyExpanded] = React.useState(false);

  React.useEffect(() => {
    extractHaikus().then(setHaikus).catch(console.error);
    extractPoems().then(setPoems).catch(console.error);
  }, []);

  const totalPages = POEM_OFFSET + poems.length;

  const navigate = React.useCallback((to: number): void => {
    if (to < 0 || to >= totalPages) return;
    setVisible(false);
    setTimeout(() => {
      setCurrentPage(to);
      window.scrollTo(0, 0);
      setVisible(true);
    }, 180);
  }, [totalPages]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowRight') navigate(currentPage + 1);
      if (e.key === 'ArrowLeft') navigate(currentPage - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [currentPage, navigate]);

  const isChapter = currentPage >= CHAPTER_OFFSET && currentPage < POEM_OFFSET;
  const isPoem = currentPage >= POEM_OFFSET;
  const chapterIndex = currentPage - CHAPTER_OFFSET;
  const poemIndex = currentPage - POEM_OFFSET;

  return (
    <div className='screen-container'>
      <div
        className='content-box'
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Times New Roman',
          paddingBottom: 90,
        }}
      >
        <Fade in={visible} timeout={180}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4vh', minHeight: '72vh', paddingTop: '3vh' }}>

            {/* Cover */}
            {currentPage === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh', textAlign: 'center' }}>
                <Image
                  src={pageData.image}
                  style={{ width: 940, height: 400, maxWidth: '100%', maxHeight: '45vh', borderRadius: 8, objectFit: 'cover' }}
                />
                <Typography variant='h3' style={{ color: pageData.color, fontFamily: 'inherit' }}>
                  {pageData.title}
                </Typography>
                <Typography variant='h5' style={{ fontFamily: 'inherit' }}>
                  {pageData.subtitle}
                </Typography>
                <Typography variant='h6' style={{ opacity: 0.4 }}>{pageData.date}</Typography>
                <HDivider />
                <Typography style={{ maxWidth: '70%', fontStyle: 'italic', opacity: 0.55, lineHeight: 1.9 }}>
                  To my English Literature teacher, whose love for literature knew no bounds and to
                  my beautiful home, whose shelter allowed me to experience a glimpse of all that
                  life has to offer.
                </Typography>
              </div>
            )}

            {/* Table of Contents */}
            {currentPage === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh' }}>
                <Typography variant='h4' style={{ color: pageData.color, fontFamily: 'inherit', textAlign: 'center' }}>
                  Table of Contents
                </Typography>
                <HDivider />
                <div style={{ width: '100%', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div
                    style={{ display: 'flex', alignItems: 'baseline', gap: 12, cursor: 'pointer', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                    onClick={() => navigate(0)}
                  >
                    <Typography variant='body2' style={{ opacity: 0.3, minWidth: 20, textAlign: 'right', flexShrink: 0 }}>⌂</Typography>
                    <Typography
                      variant='h6'
                      style={{ fontFamily: 'Times New Roman', transition: 'color 0.15s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = pageData.color)}
                      onMouseLeave={e => (e.currentTarget.style.color = '')}
                    >
                      Cover
                    </Typography>
                  </div>
                  <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {chapters.map((title, i) => (
                      <li
                        key={i}
                        style={{ display: 'flex', alignItems: 'baseline', gap: 12, cursor: 'pointer' }}
                        onClick={() => navigate(CHAPTER_OFFSET + i)}
                      >
                        <Typography variant='body2' style={{ opacity: 0.3, minWidth: 20, textAlign: 'right', flexShrink: 0 }}>
                          {i + 1}.
                        </Typography>
                        <Typography
                          variant='h6'
                          style={{ fontFamily: 'Times New Roman', transition: 'color 0.15s ease' }}
                          onMouseEnter={e => (e.currentTarget.style.color = pageData.color)}
                          onMouseLeave={e => (e.currentTarget.style.color = '')}
                        >
                          {title}
                        </Typography>
                      </li>
                    ))}
                  </ol>
                  {poems.length > 0 && (
                    <>
                      <HDivider />
                      <Typography variant='h5' style={{ color: pageData.color, fontFamily: 'inherit', textAlign: 'center' }}>
                        — Poems —
                      </Typography>
                      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {poems.map((poem, i) => (
                          <li
                            key={i}
                            style={{ display: 'flex', alignItems: 'baseline', gap: 12, cursor: 'pointer' }}
                            onClick={() => navigate(POEM_OFFSET + i)}
                          >
                            <Typography variant='body2' style={{ opacity: 0.3, minWidth: 20, textAlign: 'right', flexShrink: 0 }}>
                              {chapters.length + i + 1}.
                            </Typography>
                            <Typography
                              variant='h6'
                              style={{ fontFamily: 'Times New Roman', transition: 'color 0.15s ease' }}
                              onMouseEnter={e => (e.currentTarget.style.color = pageData.color)}
                              onMouseLeave={e => (e.currentTarget.style.color = '')}
                            >
                              {poem.title}
                            </Typography>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Chapters */}
            {isChapter && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Typography variant='caption' style={{ opacity: 0.3, letterSpacing: 2.5, fontFamily: 'inherit' }}>
                    CHAPTER {chapterIndex + 1} OF {chapters.length}
                  </Typography>
                  <Typography variant='h4' style={{ color: pageData.color, fontFamily: 'inherit' }}>
                    {chapters[chapterIndex]}
                  </Typography>
                </div>
                <HDivider />
                {renderChapter(chapterIndex, haikus)}
              </div>
            )}

            {/* Poems */}
            {isPoem && poems[poemIndex] !== undefined && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3vh', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <Typography variant='caption' style={{ opacity: 0.3, letterSpacing: 2.5, fontFamily: 'inherit' }}>
                    POEM {poemIndex + 1} OF {poems.length}
                  </Typography>
                  <Typography variant='h4' style={{ color: pageData.color, fontFamily: 'inherit' }}>
                    ({chapters.length + poemIndex + 1}) {poems[poemIndex].title}
                  </Typography>
                </div>
                <HDivider />
                <Typography style={{ whiteSpace: 'pre-line', textAlign: 'center', lineHeight: 2.2, maxWidth: '70%', opacity: 0.85 }}>
                  {poems[poemIndex].verses}
                </Typography>
              </div>
            )}

          </div>
        </Fade>

        {/* Navigation bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            padding: '20px 0',
            marginTop: '3vh',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <IconButton
            onClick={() => navigate(currentPage - 1)}
            disabled={currentPage === 0}
            style={{ opacity: currentPage === 0 ? 0.15 : 0.65 }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Typography variant='caption' style={{ opacity: 0.25, letterSpacing: 2, minWidth: 48, textAlign: 'center' }}>
            {currentPage + 1} / {totalPages}
          </Typography>

          <IconButton
            onClick={() => navigate(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            style={{ opacity: currentPage >= totalPages - 1 ? 0.15 : 0.65 }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>

      {/* Floating controls + Spotify */}
      <div
        style={{
          position: 'fixed',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: spotifyExpanded ? 352 : 0,
            overflow: 'hidden',
            transition: 'height 0.3s ease',
            borderRadius: 12,
          }}
        >
          <iframe
            style={{ borderRadius: 12, display: 'block' }}
            src='https://open.spotify.com/embed/playlist/37i9dQZF1DXbcPC6Vvqudd?utm_source=generator&si=4deef5e782e646e2'
            width={window.innerWidth > 768 ? 360 : Math.round(window.innerWidth * 0.9)}
            height={352}
            frameBorder='0'
            allowFullScreen={true}
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: 4,
            backgroundColor: 'rgba(18,18,24,0.88)',
            borderRadius: 20,
            padding: '2px 8px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <Tooltip title='Table of Contents' disableFocusListener disableTouchListener>
            <IconButton size='small' onClick={() => navigate(1)} style={{ opacity: 0.6 }}>
              <TocIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={spotifyExpanded ? 'Hide playlist' : 'Show playlist'}
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              size='small'
              onClick={() => setSpotifyExpanded(e => !e)}
              style={{ opacity: 0.6 }}
            >
              {spotifyExpanded ? <ExpandMoreIcon fontSize='small' /> : <ExpandLessIcon fontSize='small' />}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Recollections;
