import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const urls = {
  CS50: 'https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0',
  GD50: 'https://cs50.harvard.edu/games/2018/',
};

const content = {
  description:
    'My first interaction with programming in particular (if we exclude the block programming present in mindstorms) was the CS50 course I took back in 2015. The course included an introduction to the C programming language as well as some Computer Science subjects and terminology such as Big O notation, cryptography and many more. GD50 I overtook a few years later as it required a decent amount of programming experience to go through and it basically consisted of an introduction to the scripting language Lua by attempting to recreate timeless video game classics such as Pong, Super Mario, Legend of Zelda, Pokémon etc. ',
  html: (
    <div>
      <List>
        <ListItem>
          <ListItemText>External Links:</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemButton
            style={{ backgroundColor: Colors.vsDarkGray }}
            onClick={() => window.open(urls.CS50, '_blank')}
          >
            <ListItemText primary='CS50: Introduction to Computer Science' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            style={{ backgroundColor: Colors.vsDarkGray }}
            onClick={() => window.open(urls.GD50, '_blank')}
          >
            <ListItemText primary='GD50: Introduction to Game Development' />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  ),
};

export default { ...content };
