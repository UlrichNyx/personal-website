import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';

const urls = {
  fll: 'https://www.firstlegoleague.org/',
  acstac: 'https://anatolia.edu.gr/el/highschool/drastiriotites/acstac',
  electric:
    'https://york.citycollege.eu/m/article.php?aid=1847&cid=180&t=The-International-Faculty-at-the-Electric-Circus-Festival',
};

const content = {
  description:
    'Ever since my admission in middle school, I have worked with robotics on and off. During my first few years of middle school, I had joined an extraccuricular club which offered us access to Mindstorm robots. During those years, we managed to build many prototypes as a class and then finally in the 3rd and final year of middle school, we joined the First Lego League competition, whose subject was the creation of robots that could help humans in natural disasters.',
  html: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ul
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '80vw',
        }}
      >
        <li>
          <Typography>
            To learn more about the competition click{' '}
            <strong
              style={{ textDecoration: 'underline', color: Colors.blurple, cursor: 'pointer' }}
              onClick={() => window.open(urls.fll)}
            >
              here.
            </strong>
          </Typography>
        </li>
        <li>
          <Typography>
            In another competition known as{' '}
            <strong
              style={{
                textDecoration: 'underline',
                color: Colors.hyperlinkBlue,
                cursor: 'pointer',
              }}
              onClick={() => window.open(urls.acstac)}
            >
              ACSTAC
            </strong>{' '}
            our team had created a robot equipped with solar panels that utilized light sensors in
            order to follow the sun and place the panels at the optimal angle.
          </Typography>
        </li>
        <li>
          <Typography>
            Finally we had participated in a festival known as{' '}
            <strong
              style={{ textDecoration: 'underline', color: Colors.idleYellow, cursor: 'pointer' }}
              onClick={() => window.open(urls.electric)}
            >
              Electric Circus.
            </strong>
          </Typography>
        </li>
      </ul>
    </div>
  ),
};

export default { ...content };
