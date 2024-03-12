import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

const urls = {
  fll: 'https://www.firstlegoleague.org/',
  acstac: 'https://anatolia.edu.gr/el/highschool/drastiriotites/acstac',
  electric:
    'https://york.citycollege.eu/m/article.php?aid=1847&cid=180&t=The-International-Faculty-at-the-Electric-Circus-Festival',
};

const content = {
  description:
    '',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        gap:'2vh',
        justifyContent: 'center',
      }}
    >
      <Typography>Hey! This page is currently under construction! Please check again later :3</Typography>
      <Typography>In order to check out the actual project before I blabber on:</Typography>
      <Button
          variant='contained'
          style={{
            color: Colors.white,
            backgroundColor: Colors.idleYellow,
            textTransform: 'none',
            alignSelf:'center'
          }}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => window.open('https://amichallengeryet.com/')}
        >
          {' '}
          Am I Challenger Yet?
        </Button>
    </div>
  ),
};

export default { ...content };
