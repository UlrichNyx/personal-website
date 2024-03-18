import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import cat from '../../../assets/cat-breakdancing.gif';
const url = 'https://steamcommunity.com/profiles/76561199438651149/';
const content = {
  description:
    'This is a side project I have been working on for a while now. It includes various Unity projects, some of which I have submitted in game jams.',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        gap:'5vh',
        marginTop:'5vh'
      }}
    >
      <Typography>Hey! This page is currently under construction! :3</Typography>
      <img src={cat} style={{borderRadius:4, width:200}}></img>
      <Typography>(Imagine the cat is the content for now)</Typography>
      <Typography>
        In the meantime, you can find the relevant Steam community profile{' '}
        <strong
          style={{ textDecoration: 'underline', color: Colors.blurple, cursor: 'pointer' }}
          onClick={() => window.open(url)}
        >
          here.
        </strong>
      </Typography>
    </div>
  ),
};

export default { ...content };
