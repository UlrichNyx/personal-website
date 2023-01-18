import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';

const url = 'https://steamcommunity.com/profiles/76561199438651149/';
const content = {
  description:
    'This is a side project I have been working on for a while now. I am aspiring to make a games studio from the ground up. When the website I have created as well as the titles that I am working on have launched I will post them here so stay tuned!',
  html: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography>
        In the meantime, you can find the relevant Steam community profile{' '}
        <strong
          style={{ textDecoration: 'underline', color: Colors.sylemsBlue, cursor: 'pointer' }}
          onClick={() => window.open(url)}
        >
          here.
        </strong>
      </Typography>
    </div>
  ),
};

export default { ...content };
