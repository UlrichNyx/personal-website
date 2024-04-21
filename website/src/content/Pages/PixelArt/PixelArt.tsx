import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import TriforceDivider from '../../../comps/TriforceDivider';
import TableOfContent from '../../../comps/TableOfContent';
import { Button } from '@mui/material';
import shapes from '../../../assets/pixelart/shapes.png';
import shading from '../../../assets/pixelart/shading.png';
import ChapterHeader from '../../../comps/ChapterHeader';
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
          style={{ width: '10vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={shapes}
        />
        <ChapterHeader index={1} color={Colors.onlineGreen} titlesRef={[]}>
          {chapters[1]}
        </ChapterHeader>
        <img
          style={{ width: '10vw', imageRendering: 'pixelated', height: 'auto', borderRadius: 4 }}
          src={shading}
        />
      </div>
    </div>
  ),
};

export default { ...content };
