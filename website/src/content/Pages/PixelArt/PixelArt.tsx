import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import TriforceDivider from '../../../comps/TriforceDivider';
import TableOfContent from '../../../comps/TableOfContent';
import { Button } from '@mui/material';
import shapes from '../../../assets/pixelart/shapes.png';
import shading from '../../../assets/pixelart/shading.png';
import ChapterHeader from '../../../comps/ChapterHeader';

// Colours and Textures

import texturePractice from '../../../assets/pixelart/texture_practice.png';
import textures from '../../../assets/pixelart/textures.png';

// Objects

import arrow from '../../../assets/pixelart/objects/arrow.png';
import book from '../../../assets/pixelart/objects/book.png';
import gun from '../../../assets/pixelart/objects/gun.png';
import orange from '../../../assets/pixelart/objects/orange.png';
import potion from '../../../assets/pixelart/objects/potion.png';
import sword from '../../../assets/pixelart/objects/sword.png';

// Tilemap

import tilemap from '../../../assets/pixelart/tilemap/tilemap.png';
import tileset from '../../../assets/pixelart/tilemap/tileset.png';

import background from '../../../assets/pixelart/night_owl.png';

// Characters

import walkEight from '../../../assets/pixelart/characters/8x8/walk.gif';
import runSixTeen from '../../../assets/pixelart/characters/16x16/run.gif';
import walkSixTeen from '../../../assets/pixelart/characters/16x16/walk.gif';
// Cant do it from here, will need to come up with a system for importing from the public folder
// Essentially, src is not accessible dynamically
const path8x8 = '../../../../public/8x8/';
const context8x8 = require.context('../../../../public/8x8/', false, /\.png$/);
const objectSprites = [arrow, book, gun, orange, potion, sword];
const pngs8x8 = context8x8.keys().map((filename: string): string => filename);
const sprites8x8 = pngs8x8.map((el) => el.replaceAll('./', ''));

const context16x16 = require.context('../../../../public/16x16/', false, /\.png$/);
const pngs16x16 = context16x16.keys().map((filename: string): string => filename);
const sprites16x16 = pngs16x16.map((el) => el.replaceAll('./', ''));

const context32x32 = require.context('../../../../public/32x32/', false, /\.png$/);
const pngs32x32 = context32x32.keys().map((filename: string): string => filename);
const sprites32x32 = pngs32x32.map((el) => el.replaceAll('./', ''));

const chapters = [
  'Lines and Shapes',
  'Shading and Lighting',
  'Colours and Textures',
  'Drawing simple objects',
  'Tiles',
  'Backgrounds',
  'Basic Characters',
  'Simple Animation',
  'Platformer View',
  'Top Down View',
  'RPG View',
  'Isometric View',
  'Intermediate Shading',
  'Materials',
  'Highly Detailed Pixel Art',
];
const chapterHeaders = [];
// Will feed this into Table of Contents
// Table of Contents will handle all refs pushing internally
const content = {
  description:
    'Phew! It has been a long time since I posted on Archives. Please be patient while this page is constructed! :3',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5vh', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5vh',
          textAlign: 'justify',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5vh',
        }}
      >
        <TriforceDivider upward color={Colors.onlineGreen} />
        <Typography>
          For the sake of this section, I will follow the format of the Udemy course which I have
          been using which you can check out below:
        </Typography>
        <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.brillianceCoral,
            textTransform: 'none',
            alignSelf: 'center',
          }}
          onClick={() =>
            window.open(
              'https://www.udemy.com/course/pixel-art-master-course/?couponCode=ST7MT41824',
            )
          }
        >
          Udemy
        </Button>
        <TableOfContent refs={[]} color={Colors.onlineGreen} chapters={chapters} />
        <ChapterHeader index={0} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[0]}
        </ChapterHeader>
        <img
          style={{ width: '200px', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={shapes}
        />
        <ChapterHeader index={1} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[1]}
        </ChapterHeader>
        <img
          style={{ width: '200px', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={shading}
        />
        <ChapterHeader index={2} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[2]}
        </ChapterHeader>
        <img
          style={{ width: '100vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={textures}
        />
        <img
          style={{ width: '200px', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={texturePractice}
        />
        <ChapterHeader index={3} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[3]}
        </ChapterHeader>
        <div
          style={{
            overflow: 'auto',
            justifyContent: 'flex-start',
            width: '80vw',
            maxWidth: '80vw',
            display: 'flex',
            gap: '1vw',
          }}
        >
          {objectSprites.map((el, index) => (
            <img
              key={index}
              style={{
                minWidth: '200px',
                imageRendering: 'pixelated',
                height: 'auto',
                margin: 10,
                borderRadius: 4,
              }}
              src={el}
            />
          ))}
        </div>
        <ChapterHeader index={4} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[4]}
        </ChapterHeader>
        <img
          style={{ width: '264px', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={tilemap}
        />
        <img
          style={{ width: '264px', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={tileset}
        />
        <ChapterHeader index={5} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[5]}
        </ChapterHeader>
        <img
          style={{ width: '80vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={background}
        />
        <ChapterHeader index={6} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[6]}
        </ChapterHeader>
        <div
          style={{
            overflow: 'auto',
            justifyContent: 'flex-start',
            width: '80vw',
            maxWidth: '80vw',
            display: 'flex',
            gap: '1vw',
          }}
        >
          {sprites8x8.map((el, index) => (
            <img
              key={index}
              style={{ width: '5vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
              src={`${process.env.PUBLIC_URL}/8x8/${el}`}
            />
          ))}
        </div>
        <div
          style={{
            overflow: 'auto',
            justifyContent: 'flex-start',
            width: '80vw',
            maxWidth: '80vw',
            display: 'flex',
            gap: '1vw',
          }}
        >
          {sprites16x16.map((el, index) => (
            <img
              key={index}
              style={{ width: '5vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
              src={`${process.env.PUBLIC_URL}/16x16/${el}`}
            />
          ))}
        </div>
        <div
          style={{
            overflow: 'auto',
            justifyContent: 'flex-start',
            width: '80vw',
            maxWidth: '80vw',
            display: 'flex',
            gap: '1vw',
          }}
        >
          {sprites32x32.map((el, index) => (
            <img
              key={index}
              style={{ width: '5vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
              src={`${process.env.PUBLIC_URL}/32x32/${el}`}
            />
          ))}
        </div>
        <ChapterHeader index={7} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[7]}
        </ChapterHeader>
        <img
          style={{ width: '5vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={walkEight}
        />
        <img
          style={{
            width: '5vw',
            backgroundColor: Colors.hyperlinkBlue,
            imageRendering: 'pixelated',
            height: 'auto',
            borderRadius: 4,
          }}
          src={walkSixTeen}
        />
        <img
          style={{
            width: '5vw',
            backgroundColor: Colors.idleYellow,
            imageRendering: 'pixelated',
            height: 'auto',
            borderRadius: 4,
          }}
          src={runSixTeen}
        />
        <ChapterHeader index={8} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[8]}
        </ChapterHeader>
      </div>
    </div>
  ),
};

export default { ...content };
