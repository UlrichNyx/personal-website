import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TriforceDivider from '../../../comps/TriforceDivider';

const subjects = {
  'Higher Level': {
    Physics: { url: 'https://ibo.org/programmes/diploma-programme/curriculum/sciences/physics/' },
    Mathematics: { url: 'https://ibo.org/programmes/diploma-programme/curriculum/mathematics/' },
    'Computer Science': {
      url: 'https://ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/',
    },
  },
  'Standard Level': {
    'Spanish AB': {
      url: 'https://ibo.org/programmes/diploma-programme/curriculum/language-acquisition/language-ab-initio-sl/',
    },
    History: {
      url: 'https://ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/history/',
    },
    'Language A: Literature': {
      url: 'https://ibo.org/programmes/diploma-programme/curriculum/language-and-literature/language-a-literature-slhl/',
    },
  },
  Other: {
    'Theory of Knowledge': {
      url: 'https://ibo.org/programmes/diploma-programme/curriculum/theory-of-knowledge/',
    },
    CAS: {
      url: 'https://ibo.org/programmes/diploma-programme/curriculum/creativity-activity-and-service/',
    },
  },
};

const content = {
  description:
    'For my secondary education I switched over to the International Baccaleaureate diploma with the intention of studying in a university abroad. During my years in the IB I was able to study a wide variety of subjects and get acquainted with the process of scientific experimentation and academic writing at a very early stage. I finished the IB Diploma with a score of 36/45. My Extended Essay was on Physics and its subject was the comparison of different electromagnetic fields produced from different coils. In terms of my CAS activities, I volunteered for a program which helped make things better for our community by crafting wooden benches from scratch, cleaning up thrash etc. Some noteable Internal Assessment topics I worked on included the creation of an educational calculus game in C++ using the SFML library and the derivation of a formula for arc length in HL Math. ',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        {Object.keys(subjects).map((key, index) => (
          <List key={index}>
            <ListItem>
              <ListItemText primary={key} />
            </ListItem>

            {Object.keys(subjects[key as keyof typeof subjects]).map((subject, idx) => (
              <ListItemButton
                key={idx}
                style={{ backgroundColor: Colors.vsDarkGray }}
                onClick={() => {
                  const category: any = subjects[key as keyof typeof subjects];
                  const url = category[subject as keyof typeof category].url;
                  window.open(url, '_blank');
                }}
              >
                <ListItemText primary={subject} />
              </ListItemButton>
            ))}
          </List>
        ))}
      </div>
      <TriforceDivider upward color={Colors.hyperlinkBlue} />
    </div>
  ),
};

export default { ...content };
