import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const url = 'https://www.act.edu/cs130';

const content = {
  description:
    'During the summer of 2017 I undertook an official course by the American College of Thessaloniki in robotics known as CS130. During this course we worked with Mindstorms and Arduinos in order to create a variety of robots built for conquering different challenges such as racing, maze traversal, wrestling and more. I finished this course with a GPA of 3.9, earning a referral from the professor of the course: Dr. Alexander Astaras.',
  html: (
    <div>
      <Typography>
        {' '}
        To read more about the course click{' '}
        <strong
          style={{ textDecoration: 'underline', color: Colors.dndRed, cursor: 'pointer' }}
          onClick={() => window.open(url)}
        >
          here.
        </strong>
      </Typography>
    </div>
  ),
};

export default { ...content };
