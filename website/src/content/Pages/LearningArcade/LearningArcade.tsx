import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import { images } from './Images';
import ImageSlider from '../../../comps/ImageSlider';
import CHEP from '../../../assets/learningarcade/chep.jpeg';
import TriforceDivider from '../../../comps/TriforceDivider';

const content = {
  description:
    'This was an internship that I worked on directly after graduation regarding the use of gamification in education. The purpose of the project was to build an application that students could use in and out of class in order to improve their understanding of the subjects they were studying in a fun and engaging way. The initial step of this project was to create a template application similar to Kahoot where students could create accounts and compete on/create online quizzes that regard a certain subject. I was mostly responsible for the Front-end of the application as well as some of the research that was conducted for the project.',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', alignItems: 'center' }}>
        <Typography variant='h4' style={{ color: Colors.braveryPurple }}>
          Front-End
        </Typography>
        <Typography>
          {' '}
          The front end was built using React as well as Material UI components.
        </Typography>
        <ImageSlider images={images} width='80vw' color={Colors.braveryPurple} />
        <div style={{ width: '100vw' }}>
          <TriforceDivider color={Colors.braveryPurple} />
        </div>

        <Typography variant='h4' style={{ color: Colors.onlineGreen }}>
          Documentation & Research
        </Typography>
        <Typography style={{ maxWidth: '80vw' }}>
          As part of this project it was also necessary to do some literary review on the aspect of
          gamification being used in education as well as conduct a few focus groups that regard
          gamifciation. As part of the funding of the project, our team presented at the{' '}
          <strong
            style={{ color: Colors.onlineGreen, cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() =>
              window.open(
                'https://www.southampton.ac.uk/blog/sussed-news/2022/09/08/2022-chep-festival-of-learning-and-teaching-one-week-to-go/',
              )
            }
          >
            CHEP Conference of Learning
          </strong>{' '}
          hosted in Southampton on September 14th, 2022.
        </Typography>
        <img src={CHEP} style={{ alignSelf: 'center', maxWidth: '80vw' }} />
        <Typography variant='caption' style={{ maxWidth: '80vw' }}>
          There is a live recording of our presentation that you can watch here.
        </Typography>

        <iframe
          style={{ maxWidth: '95vw', height: '50vh' }}
          width='950'
          height='315'
          src='https://www.youtube.com/embed/t6JUlq-ywug?start=1443'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen={true}
        />

        <Typography style={{ maxWidth: '80vw' }}>
          There was also a group study conducted regarding how students view gamifciation, what
          aspects of it they like or dislike and much more. Some of the interesting insights gained
          from that session include:
        </Typography>

        <ul style={{ textAlign: 'left' }}>
          <li>
            <Typography>
              Leaderboards should not include the entire system but rather only the Top 5
            </Typography>
          </li>
          <li>
            <Typography>
              Users should be able to opt out of being displayed in a Leaderboard
            </Typography>
          </li>
          <li>
            <Typography>Road Maps were particularly favorable</Typography>
          </li>
        </ul>
      </div>
      <TriforceDivider upward color={Colors.onlineGreen} />
    </div>
  ),
};

export default { ...content };
