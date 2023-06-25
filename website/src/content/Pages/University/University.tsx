import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Colors from '../../../styles/Colors';
import TriforceDivider from '../../../comps/TriforceDivider';

const moduleURL = 'https://www.southampton.ac.uk/courses/modules/';

const subjects = {
  'Year 1': [
    {
      module: 'Computer Systems I',
      code: 'COMP1203',
    },
    {
      module: 'Foundations of Computer Science',
      code: 'COMP1215',
    },
    { module: 'Professional Development', code: 'COMP1205' },
    { module: 'Programming I', code: 'COMP1202' },

    { module: 'Algorithmics', code: 'COMP1201' },
    { module: 'Data Management', code: 'COMP1204' },
    { module: 'Software Modelling & Design', code: 'COMP1216' },
    { module: 'Programming II', code: 'COMP2209' },
  ],
  'Year 2': [
    { module: 'Intelligent Systems', code: 'COMP2208' },
    { module: 'Interaction Design', code: 'COMP2213' },
    { module: 'Programming III', code: 'COMP2209' },
    { module: 'Theory of Computing', code: 'COMP2210' },

    { module: 'Advanced Software Modelling & Design', code: 'COMP2214' },
    { module: 'Programming Language Concepts', code: 'COMP2212' },
    { module: 'Distributed Systems and Networks', code: 'COMP2207' },
    { module: 'Software Engineering Group Project', code: 'COMP2211' },
  ],
  'Year 3': [
    { module: 'Engineering Management and Law', code: 'COMP3219' },
    { module: 'Game Design and Development', code: 'COMP3218' },
    { module: 'Machine Learning Technologies', code: 'COMP3222' },

    { module: 'Computational Biology', code: 'COMP3212' },
    { module: 'Natural Language Processing', code: 'COMP3225' },
    { module: 'Part III Individual Project', code: 'COMP3200' },
  ],
  'Year 4': [
    { module: 'Intelligent Agents', code: 'COMP6203' },
    { module: 'Group Design Project', code: 'FEEG6013' },

    { module: 'Biometrics', code: 'COMP6211' },
    { module: 'Biologically Inspired Robotics', code: 'ELEC6212' },
    { module: 'Image Processing', code: 'ELEC6213 ' },
    { module: 'Algorithmic Game Theory', code: 'COMP6207' },
  ],
};

const content = {
  description:
    'In September of 2018 I began my studies in Computer Science at the University of Southampton. During my years in university I participated in numerous projects and coursework which helped hone my skills and knowledge on this field. You can view all projects I have archived over the years on my Github. After arduous effort, I was able to graduate with First Class honours from the university. ',
  html: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography>Below is a list of every single subject I undertook while studying:</Typography>
      <div>
        <List style={{ textAlign: 'center' }}>
          <ListItem>
            <ListItemText primary='Year 1' />
          </ListItem>
          {subjects['Year 1' as keyof typeof subjects].map((sub, index) => (
            <ListItemButton
              key={index}
              style={{ backgroundColor: Colors.vsAlmostBlack }}
              onClick={() => window.open(moduleURL + sub.code, '_blank')}
            >
              <ListItemText primary={sub.code + ' - ' + sub.module} />
            </ListItemButton>
          ))}
          <ListItem>
            <ListItemText primary='Year 2' />
          </ListItem>
          {subjects['Year 2' as keyof typeof subjects].map((sub, index) => (
            <ListItemButton
              key={index}
              style={{ backgroundColor: Colors.vsAlmostBlack }}
              onClick={() => window.open(moduleURL + sub.code, '_blank')}
            >
              <ListItemText primary={sub.code + ' - ' + sub.module} />
            </ListItemButton>
          ))}

          <ListItem>
            <ListItemText primary='Year 3' />
          </ListItem>
          {subjects['Year 3' as keyof typeof subjects].map((sub, index) => (
            <ListItemButton
              key={index}
              style={{ backgroundColor: Colors.vsAlmostBlack }}
              onClick={() => window.open(moduleURL + sub.code, '_blank')}
            >
              <ListItemText primary={sub.code + ' - ' + sub.module} />
            </ListItemButton>
          ))}
          <ListItem>
            <ListItemText primary='Year 4' />
          </ListItem>
          {subjects['Year 4' as keyof typeof subjects].map((sub, index) => (
            <ListItemButton
              key={index}
              style={{ backgroundColor: Colors.vsAlmostBlack }}
              onClick={() => window.open(moduleURL + sub.code, '_blank')}
            >
              <ListItemText primary={sub.code + ' - ' + sub.module} />
            </ListItemButton>
          ))}
        </List>
      </div>
      <TriforceDivider upward color={Colors.vsBlue} />
    </div>
  ),
};

export default { ...content };
