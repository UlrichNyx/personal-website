import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import TriforceDivider from '../../../comps/TriforceDivider';
import TableOfContent from '../../../comps/TableOfContent';
import { Button } from '@mui/material';

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
        <TableOfContent color={Colors.onlineGreen} chapters={['Lines and Shapes']} />
      </div>
    </div>
  ),
};

export default { ...content };
