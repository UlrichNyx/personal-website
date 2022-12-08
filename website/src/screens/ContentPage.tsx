import React from 'react';

import Typography from '@mui/material/Typography';
import '../styles/screens/Screen.css';

import { useParams, useLocation } from 'react-router-dom';
import { pages } from '../content/Pages';
import { projects, ProjectProps } from '../content/Projects';
import { archives } from '../content/Archives';
import { Props } from '../comps/ContentPreview';
import Colors from '../styles/Colors';
import { Divider } from '@mui/material';
import TriforceDivider from '../comps/TriforceDivider';
import Image from '../comps/Image';

const ContentPage: React.FunctionComponent = () => {
  const location = useLocation();
  const section = location.pathname.split('/')[1];
  const params = useParams();
  const title = params.post?.replaceAll('-', ' ') ?? '';
  const key = title as keyof typeof pages;
  const page = pages[key];
  const content =
    section === 'portfolio'
      ? projects.find((e: Props) => e.title === title)
      : archives.find((e: Props) => e.title === title);
  const cont: ProjectProps =
    content !== undefined
      ? content
      : {
          title: '',
          subtitle: '',
          color: 'white',
          backgroundColor: 'inherit',
          date: '',
          image: '',
          tags: [],
        };
  return (
    <div
      className='screen-container'
      style={{
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        className='content-box'
        style={{ display: 'flex', flexDirection: 'column', gap: '1vh', alignItems: 'center' }}
      >
        <Image
          src={cont.image}
          style={{
            width: section === 'portfolio' ? '20vw' : 940,
            height: section === 'portfolio' ? '20vw' : 540,
            maxWidth: '98vw',
            maxHeight: '50vh',
            borderRadius: 4,
            backgroundColor: cont.backgroundColor,
          }}
        />
        <Typography variant='h3' style={{ color: cont.color }}>
          {title}
        </Typography>
        <Typography variant='h4'>{cont.subtitle}</Typography>
        <Typography variant='h5' style={{ color: Colors.vsGray }}>
          {cont.date}
        </Typography>
        <Divider style={{ backgroundColor: cont.color, height: 1.5, width: '80vw' }} />
        <Typography style={{ marginLeft: '10vw', marginRight: '10vw', textAlign: 'justify' }}>
          {page.description}
        </Typography>
        <TriforceDivider />
        {page.html}
      </div>
    </div>
  );
};

export default ContentPage;
