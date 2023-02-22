import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import TriforceDivider from '../../../comps/TriforceDivider';
import ImageSlider from '../../../comps/ImageSlider';
import Button from '@mui/material/Button';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { logos, adminImages, mobileImages } from './Images';
import LogoSlider from '../../../comps/LogoSlider';

const content = {
  description:
    'Reset is a fitness and wellbeing appliation project which I have been working on for some time now. It is an application I have been working on Full Stack and have closely collaborated with my employer througout the process.',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10vh', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', maxWidth: '80vw' }}>
        <Typography variant='h4' style={{ color: Colors.boostPink }}>
          Admin App
        </Typography>
        <div>
          <Typography>
            The application was built using React. It is basically a tool that is meant to be used
            by Reset employees to create, edit and manage the content that is visible on the mobile
            app. The admin app gives them a quite flexible creative capability, as staff can define
            their own tags, upload videos and create content items from scratch using the editor.
          </Typography>
        </div>
        <ImageSlider images={adminImages} color={Colors.boostPink} />
      </div>
      <TriforceDivider color={Colors.boostPink} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', maxWidth: '80vw' }}>
        <Typography variant='h4' style={{ color: Colors.braveryPurple }}>
          Mobile App
        </Typography>
        <Typography>
          This was the main deliverable of the project and it was built using React Native. This is
          the application intended for the customers and in it a user can create an account with
          Reset, set up their personalized profile and watch the content that are being defined by
          admins the admin app. As this application is generally open to the public you can access
          it here:
        </Typography>
        <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.braveryPurple,
            textTransform: 'none',
            alignSelf: 'center',
          }}
          startIcon={<PhoneIphoneIcon />}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => window.open('https://expo.dev/accounts/fkont/projects/Reset', '_blank')}
        >
          {' '}
          Mobile App
        </Button>
        <ImageSlider images={mobileImages} width={380} color={Colors.braveryPurple} />
      </div>
      <TriforceDivider color={Colors.braveryPurple} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', maxWidth: '80vw' }}>
        <Typography variant='h4' style={{ color: Colors.blurple }}>
          Server
        </Typography>
        <Typography>
          Finally, the third and most essential deliverable, the backend server which provides both
          the admin and mobile apps with their requests. The backend was developed using Node and
          Express. It offers a wide variety of capabilities for users such as authentication,
          registration, being able to create new content for the application, sending automatic
          emails, completing payments through Stripe and so much more.
        </Typography>
      </div>
      <LogoSlider logos={logos} />
      <TriforceDivider upward color={Colors.blurple} />
    </div>
  ),
};

export default { ...content };
