import React from 'react';
import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import { archives } from '../../../content/Archives';

import '../../../styles/screens/Recollections.css';

import { Divider, IconButton, Fade } from '@mui/material';
import TriforceDivider from '../../../comps/TriforceDivider';
import Image from '../../../comps/Image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { extractHaikus, HaikuProps } from './Haikus';
import { extractPoems, PoemProps } from './Poems';

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

const Haiku: React.FunctionComponent<HaikuProps> = (props) => {
  const { line1, line2, line3 } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography style={{ fontWeight: 'bold' }}>{line1}</Typography>
      <Typography style={{ fontWeight: 'bold' }}>{line2}</Typography>
      <Typography style={{ fontWeight: 'bold' }}>{line3}</Typography>
    </div>
  );
};

const HDivider: React.FunctionComponent = () => {
  const color = 'cornflowerblue';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5vw',
        margin: '5vw',
      }}
    >
      <div style={{ height: 1, width: '40%', backgroundColor: color }} />
      <div
        style={{ height: 10, width: 10, border: '1px solid', rotate: '45deg', borderColor: color }}
      />
      <div style={{ height: 1, width: '40%', backgroundColor: color }} />
    </div>
  );
};

const VDivider: React.FunctionComponent = () => {
  const color = 'cornflowerblue';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1vh',
        margin: '5vw',
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

const Poem: React.FunctionComponent<PoemProps> = (props) => {
  const { title, verses } = props;

  return (
    <div>
      <Typography variant='h5' style={{ fontWeight: 'bold', margin: 10 }}>
        {title}
      </Typography>
      <Typography style={{ whiteSpace: 'pre-line' }}>{verses}</Typography>
    </div>
  );
};

const Recollections: React.FunctionComponent = () => {
  const cont = archives[1];
  const [height, setHeight] = React.useState('100');
  const [fadeIn, setFadeIn] = React.useState(false);

  const [haikus, setHaikus] = React.useState<HaikuProps[]>([]);
  const [poems, setPoems] = React.useState<PoemProps[]>([]);

  React.useEffect(() => {
    const h = extractHaikus();
    h.then((res) => {
      setHaikus(res);
    }).catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    const p = extractPoems();
    p.then((res) => {
      setPoems(res);
    }).catch((err) => console.error(err));
  }, []);

  const titlesRef = React.useRef<Array<HTMLSpanElement | null>>([]);
  const _fadeIn = (): void => {
    setHeight('400');
    const timeout = setInterval(() => {
      setFadeIn(true);
      clearInterval(timeout);
    }, 500);
  };

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

  React.useEffect(() => {
    const timeout = setInterval(() => {
      setFadeIn(true);
      clearInterval(timeout);
    }, 500);
  }, []);
  return (
    <div className='screen-container'>
      <div
        className='content-box'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1vh',
          alignItems: 'center',
          fontFamily: 'Times New Roman',
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
        <HDivider />
        <Typography style={{ maxWidth: '80%', textAlign: 'justify' }}>
          {content.description}
        </Typography>

        <VDivider />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography style={{ margin: '5vw' }}>
              I have chosen a set of records to go along with the narration. Each track corresponds
              to each chapter of this collection. Once you reach the epilogue, each track
              corresponds to a poem. The tracks are all fairly distinct from one another and they
              represent or in some cases, embody, the melodies that accompanied me in my journey or
              perhaps inspired some of my works. With that consideration, please excuse the
              alternation of genres, for such is the nature of this chaotic existence.
            </Typography>

            <iframe
              src='https://open.spotify.com/embed/playlist/3LDmJkk92aGHx2JXyoT48N?utm_source=generator&theme=0'
              width='500'
              style={{ maxWidth: '90%', borderRadius: 12 }}
              frameBorder={0}
              height='380'
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
              loading='lazy'
            ></iframe>
            <HDivider />
            <Typography
              variant='h4'
              style={{
                color: cont.color,
                textAlign: 'center',
                marginTop: '5vh',
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
                  <Typography
                    variant='h6'
                    style={{ textAlign: 'left', fontFamily: 'Times New Roman' }}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ol>
          </div>

          <VDivider />
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            1. {chapters[0]}
          </Typography>

          <div className='recollections-section'>
            <Typography>
              It would be a lie if I were to say that my inspiration for poetry doesn&#39;t derive
              from the master and father of Haikus himself, Matsuo Bashō. Bashō, for reasons both
              poetic and religious, travelled his homeland, Japan, twice on foot throughout his
              entire life. In his travels, he would often gaze at the scenery that captivated his
              attention and in an attempt to eternalize his vivid memories, with carefully selected,
              gilded words, he wrote these intricate pieces of poetry known as haikus.
            </Typography>
            <Typography>
              The haikus included in this collection are but mere photographs from the things that
              are often missed. A homage, to the potent feelings bound to us throughout our
              individual journeys, the time transcendent nature of human bonds and the divinity of
              even the smallest pebble in that which we call our home.
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', gap: '1vw' }}>
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
            <Typography style={{ textAlign: 'center' }}>
              - Matsuo Bashō&#39;s final haiku
            </Typography>
          </div>

          <HDivider />
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            2. {chapters[1]}
          </Typography>

          <div className='recollections-section'>
            <Typography>
              At some point in my youth, when my heart was burning brighter and my limbs were moving
              faster, I had the fortune to travel to a place whose name invokes the image of a
              nether but is yet so very far from it. While flying north in the cold morning air,
              mesmerized by the dark sky:
            </Typography>
            {<Haiku {...haikus[0]} />}
            <Typography>
              Upon arrival my heart was heavy. The purpose of the trip was of professional nature,
              but my mind couldn’t help but wander into boundless possibilities of the unknown as
              the world called to me for adventure. On the perfectly laid out red streets of our
              destination, only a single brick was misplaced:
            </Typography>
            {<Haiku {...haikus[1]} />}
            <Typography>
              On the days of the conference, duty called. While under the virtual weight of
              world-wide problems and within the chaos of organization and time, memories of a deep
              blue gaze:
            </Typography>
            {<Haiku {...haikus[2]} />}
            <Typography>
              Walking in the freezing cold streets of Hague, our group and my friends, steps ahead
              of me. I took a moment to show my respects and passed through the torii gate leading
              into another part of town.
            </Typography>
            {<Haiku {...haikus[3]} />}
            <Typography>
              One of my many purposes in this trip was to reunite with an old acquaintance from the
              city of light who I hadn’t seen in over a year. Seeing her again somehow seemed like a
              work of god, if one would take into account the circumstances.
            </Typography>
            {<Haiku {...haikus[4]} />}
            <Typography>
              Amidst the inevitable disorder of a large conference, a group of friends talking
              gleefully as if the world around them wasn’t burning.
            </Typography>
            {<Haiku {...haikus[5]} />}
            <Typography>
              While trying to speak in front of hundreds, my mind was clouded by fear. Would I get
              to see her again? The blue in her eyes. The red in my heart.
            </Typography>
            {<Haiku {...haikus[6]} />}
            <Typography>
              Wishing goodbye to those we have met, I wrote a poem for her, whom history dictated to
              be an enemy, but like many other mortal qualms, fell short to the challenge opposed by
              the beating of the heart. I gave it to her enclosed palm, hands clasping and hugs
              uniting, under the judgemental eye of a supervisor and an otherworldly desire to kiss
              the friendly stranger in front of me.
            </Typography>
            {<Haiku {...haikus[7]} />}
            <Typography>The feeling of emptiness, after all is said and done:</Typography>
            {<Haiku {...haikus[8]} />}
            <Typography>
              With nothing but my faith in fate, we press on. The fleeting nature of time haunting
              me:
            </Typography>
            {<Haiku {...haikus[9]} />}
            {<Haiku {...haikus[10]} />}
            {<Haiku {...haikus[11]} />}
          </div>
          <HDivider />
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            3. {chapters[2]}
          </Typography>
          <div className='recollections-section'>
            <Typography>
              In an area of my hometown I never knew quite well, spring around the corner and
              thoughts of me conquering a mountain filling my mind. What a lovely time it was...
              filled with the challenges of proving one&apos;s self, yet still being protected by
              the roof of one&apos;s home.
            </Typography>
            {<Haiku {...haikus[12]} />}
            {<Haiku {...haikus[13]} />}
            {<Haiku {...haikus[14]} />}
            <Typography>
              On one of the most unforgettable nights of my life. Two friends by my side, meeting
              new people that I never thought would even exist. Riding the sunset of the dawning
              moon.
            </Typography>
            {<Haiku {...haikus[15]} />}
            <Typography>
              Contemplations of a new love. One as elusive and as ungraspable as the water flowing
              from a great river.
            </Typography>
            {<Haiku {...haikus[16]} />}
            <Typography>
              Another love. This one took its time to stay and talk and kiss but left without a
              word.
            </Typography>
            {<Haiku {...haikus[17]} />}
            {<Haiku {...haikus[18]} />}
            <Typography>
              On a misty morning, the sun shining overhead and yet barely being able to pierce the
              shroud of doubt.
            </Typography>
            {<Haiku {...haikus[19]} />}
            {<Haiku {...haikus[20]} />}
            {<Haiku {...haikus[21]} />}
            <Typography>
              Sleeping in between activities, a sharp headache haunting my head, the sun seeming
              ever so malignant. Imagination running wild, bringing stories worthy of death, to
              life.
            </Typography>
            {<Haiku {...haikus[22]} />}
            {<Haiku {...haikus[23]} />}
            <Typography>
              On a school trip to Naousa. Surrounded by mountains and fields and friends alike.
              Singing happy tunes and thinking happy thoughts.
            </Typography>
            {<Haiku {...haikus[24]} />}
            {<Haiku {...haikus[25]} />}
            <Typography>
              Comforted with a word and an embrace, a quiet conversation at night.
            </Typography>
            {<Haiku {...haikus[26]} />}
            <Typography>Awakening from a slumber of deep premonition:</Typography>
            {<Haiku {...haikus[27]} />}
            <Typography>
              Sunlight burning imprints onto my vision, I await for love in an old square with a
              church.
            </Typography>
            {<Haiku {...haikus[28]} />}
            <Typography>
              As the world cries, the rain lets my thoughts slide down the window.
            </Typography>
            {<Haiku {...haikus[29]} />}
            {<Haiku {...haikus[30]} />}

            <Typography>
              A picture of a loved one that captivated my heart. I keep it close as I venture on to
              an uncertain tomorrow.
            </Typography>
            {<Haiku {...haikus[31]} />}
            <Typography>
              Stuck in a perpetual maze of secrets. What is the truth, and how many lies is it made
              of?
            </Typography>
            {<Haiku {...haikus[32]} />}
            {<Haiku {...haikus[33]} />}
            <Typography>
              The ultimatum of a long search. I finally reached the end of the maze, and yet my
              journey resulted not in salvation but rather, despair.
            </Typography>

            {<Haiku {...haikus[34]} />}
            {<Haiku {...haikus[35]} />}
            <Typography>Trying to find the courage to change and move on;</Typography>
            {<Haiku {...haikus[36]} />}
          </div>

          <HDivider />
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            4. {chapters[3]}
          </Typography>
          <div className='recollections-section'>
            <Typography>
              After the heart-breaking start of a long summer, I opted to travel once again, hoping
              that whatever it is I find in my journey, will help me fix this broken soul. On a ship
              to my destination, the sun imprints itself on every wave of the boundless sea.
            </Typography>
            {<Haiku {...haikus[37]} />}
            <Typography>
              Troubling myself with unnecessary wonder. My body may have travelled but my soul
              remains behind. Laying out in the warm sun and powerful wind, I realize the haven I
              have found myself in.
            </Typography>
            {<Haiku {...haikus[38]} />}
            {<Haiku {...haikus[39]} />}
            <Typography>
              Visions of a distant monastery across the sea and on top of a mountain peak. At
              night-time, the lightless mountain blended with the dark night sky, revealing a
              floating illuminating cross.
            </Typography>
            {<Haiku {...haikus[40]} />}
            <Typography>
              Navigating the deserts of a wind-ridden land, coming across a pack of peaceful
              animals.
            </Typography>
            {<Haiku {...haikus[41]} />}
            {<Haiku {...haikus[42]} />}

            <Typography>
              The end of my journey was followed by a brave venture into the depths of that which I
              feared to face. Confronting the past, I found that there was much less suffering
              waiting for me than I anticipated. Looking back at this memory, I completely
              understand why I chose to call it the devil’s lair. Even the warmth of affection turns
              bitter by the poison of this theatrical play.
            </Typography>
            {<Haiku {...haikus[43]} />}

            <Typography>
              A part of me wishes for the summer to be over, for me to put my mask back on and
              continue existing within boundaries again. Another part screams for individuality,
              bringing me into a predicament. Alas, the frivolity of mankind really has no limits,
              and whether we like it or not, our bounded souls can never escape this prison.
            </Typography>
            {<Haiku {...haikus[44]} />}
          </div>

          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            5. {chapters[4]}
          </Typography>
          <div className='recollections-section'>
            <Typography>
              The start of the year turned out to be much more exciting than I anticipated. New
              faces in my circle. A night spent with a beautiful lass, looking across the sea in
              embrace, whispering and kissing. It is often the simplest of moments in life, that
              complicate it the most.
            </Typography>
            {<Haiku {...haikus[45]} />}
            {<Haiku {...haikus[46]} />}
            <Typography>
              The mountain I longed for over a year ago presented itself to me. With a great stride
              in my feet from my renewed energy, I climbed atop it with friends.
            </Typography>
            {<Haiku {...haikus[47]} />}
            {<Haiku {...haikus[48]} />}
            <Typography>
              After the long climb, came the time for the downfall. A creeping illness overcoming
              me, I try to make peace with the poison running in my veins.
            </Typography>
            {<Haiku {...haikus[49]} />}
            <Typography>
              My dark reality found its way into my imagination. Such was the birth of creative
              horror.
            </Typography>
            {<Haiku {...haikus[50]} />}

            <Typography>
              No peace can be found in the simple things anymore. Looking back at what was behind
              me, I saw nothing but chaos.
            </Typography>
            {<Haiku {...haikus[51]} />}

            <Typography>
              After my soul was exhausted a promise of love and comfort kept me running. As if a
              stained-glass window contains the world it depicts.
            </Typography>
            {<Haiku {...haikus[52]} />}
            {<Haiku {...haikus[53]} />}
          </div>
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            6. {chapters[5]}
          </Typography>
          <div className='recollections-section'>
            <Typography>
              A new era begins. One of uncertainty and fluctuations. But a worthy one for sure. I am
              finally reunited and make peace with an old and precious lover. A lot of feelings
              start to resurface, and yet balance remains in the world.
            </Typography>
            {<Haiku {...haikus[54]} />}
            {<Haiku {...haikus[55]} />}
            {<Haiku {...haikus[56]} />}
            <Typography>
              Exploring a new metaphysical world, I manage to look at different perspectives in
              life.
            </Typography>
            {<Haiku {...haikus[57]} />}
            {<Haiku {...haikus[58]} />}
            <Typography>
              A great agony overcomes me, the feeling that my body has reached its limits. Drawing
              for desperate breaths, my mind wanders in the boundless evening sky.
            </Typography>
            {<Haiku {...haikus[59]} />}
            {<Haiku {...haikus[60]} />}
            {<Haiku {...haikus[61]} />}
          </div>
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            7. {chapters[6]}
          </Typography>

          <div className='recollections-section'>
            <Typography>
              Below is an account of one of my most memorable dreams. Awaking in the southernmost
              place of earth, looking over the horizon and witnessing the end of the world, along
              with a familiar person, perhaps our planet itself, allowing me to feel comfort and
              serenity, despite the sorrowful and morose image before me.
            </Typography>
            {<Haiku {...haikus[62]} />}
            {<Haiku {...haikus[63]} />}
            {<Haiku {...haikus[64]} />}
            {<Haiku {...haikus[65]} />}
            {<Haiku {...haikus[66]} />}
          </div>

          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            8. {chapters[7]}
          </Typography>

          <div className='recollections-section'>
            <Typography>
              In the island of the triumphant winged victory, I contemplate on things. As night
              befalls the land, I am reminded of the Hour of Madness. The blue flame of illuminating
              truth burns bright.
            </Typography>
            {<Haiku {...haikus[67]} />}
            {<Haiku {...haikus[68]} />}
            {<Haiku {...haikus[69]} />}
            <Typography>
              Growing somewhat nostalgic, the cool wind of a summer evening on my face as we raced
              across the mountains.
            </Typography>
            {<Haiku {...haikus[70]} />}

            <Typography>
              Living with intrusion is a somewhat herculean task. The mind only hushes once it has
              exhausted all of its abnormal worries.
            </Typography>
            {<Haiku {...haikus[71]} />}
            {<Haiku {...haikus[72]} />}
            <Typography>
              Haven&#39;t written something in a while. Seeing an inscription on an abandoned mural,
              my imagination awakens from its slumber, and that voice which so softly sings its
              lyrics to me returns for some final words.
            </Typography>
            {<Haiku {...haikus[73]} />}

            {<Haiku {...haikus[74]} />}
            {<Haiku {...haikus[75]} />}
          </div>
          <Typography
            ref={(el) => titlesRef.current.push(el)}
            variant='h4'
            style={{ color: cont.color, paddingTop: 100, fontFamily: 'inherit' }}
          >
            9. {chapters[8]}
          </Typography>

          <div className='recollections-section'>
            <Typography>
              This marks the end of my adolescent years. Everything that comes after is a different
              chapter. Not the recollections of a drowned mind. Perhaps a breathing mind, or even a
              swimming mind.
            </Typography>

            <Typography>
              In thinking of what to write for this epilogue, I cannot help but express my desire
              for a better world. I deeply believe in the future of a mankind that is united, much
              like the way our material essence was conceived into this reality. In this rapidly
              expanding universe, the souls of all people will be connected, regardless of our
              physical proximity. Such is my hope, my vision for a future world. One which I alone
              am not capable of bringing and can only dream of in my ruminations.
            </Typography>

            <Typography>
              And although my word will not be law, and although my feelings will not touch all
              hearts, this idea will hopefully cause a ripple in the vast ocean of human emotion. A
              ripple is all it takes, for a wave to begin.
            </Typography>

            <Typography>
              As a parting gift, I leave you the following poems. Some of them I held close to my
              heart. Others were written out of pure existential angst. All of them carry my
              infectious emotions.
            </Typography>

            <Typography>
              Many questions may be born from your reading, for instance, what is a Sylem? Why is
              there a greek poem in an English anthology? Where is Entropy Part I? Questions as
              elluding as time itself. Search not for answers, but if you absolutely have to, find
              them within yourself.
            </Typography>

            <Typography>
              Strive for excellence, and when I see you again, tell me all about your adventures and
              I will tell you all about mine.
            </Typography>
            <Typography>~ Filippos</Typography>
          </div>

          {poems.map((item, index) => (
            <div key={index} className='recollections-section' style={{ textAlign: 'center' }}>
              <VDivider />
              <Poem {...item} />
            </div>
          ))}
          <HDivider />
          <div
            style={{
              position: 'fixed',
              bottom: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Fade in={fadeIn}>
              <iframe
                style={{ borderRadius: 12 }}
                src='https://open.spotify.com/embed/playlist/3LDmJkk92aGHx2JXyoT48N?utm_source=generator&theme=0'
                width={
                  window.innerWidth > 768 ? '360' : window.innerWidth - window.innerWidth * 0.05
                }
                height={height}
                frameBorder='0'
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
            </Fade>
            <IconButton
              style={{ width: 32, height: 32, marginTop: height === '100' ? -20 : 0 }}
              onClick={() =>
                height === '100' && fadeIn
                  ? setFadeIn(false)
                  : height === '400'
                  ? setHeight('100')
                  : _fadeIn()
              }
            >
              {height === '100' && fadeIn ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
          </div>
          <div style={{ marginTop: 100 }} />
        </div>
      </div>
    </div>
  );
};

const content = {
  description:
    'To my English Literature teacher, whose love for literature knew no bounds and to my beautiful home, whose shelter allowed me to experience a glimpse of all that life has to offer.',
};

export default Recollections;
