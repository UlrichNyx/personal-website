import React from 'react';

import Typography from '@mui/material/Typography';
import '../styles/screens/Screen.css';

import { useParams, useLocation } from 'react-router-dom';
import { pages } from '../content/Pages';
import { projects, ProjectProps } from '../content/Projects';
import { archives } from '../content/Archives';
import { Props } from '../comps/ContentPreview';
import Image from '../comps/Image';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

const ContentPage: React.FunctionComponent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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
        paddingTop: '8vh',
        paddingLeft: isMobile ? '6vw' : '6vw',
        paddingRight: isMobile ? '6vw' : '6vw',
        paddingBottom: '8vh',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '3vh' : '4vw',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: isMobile ? 'center' : 'flex-start',
            flexShrink: 0,
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '100%' : 240,
          }}
        >
          <Image
            src={cont.image}
            style={{
              width: section === 'portfolio' ? (isMobile ? 110 : 140) : (isMobile ? 160 : 220),
              height: isMobile ? 110 : 140,
              borderRadius: section === 'portfolio' ? '50%' : 6,
              objectFit: 'cover',
              backgroundColor: cont.backgroundColor,
            }}
          />
          <Typography variant={isMobile ? 'h6' : 'h5'} style={{ color: cont.color, textAlign: isMobile ? 'center' : 'left' }}>
            {title}
          </Typography>
          <Typography variant='subtitle1' style={{ opacity: 0.8, textAlign: isMobile ? 'center' : 'left' }}>
            {cont.subtitle}
          </Typography>
          {!isMobile && (page as any)?.sidebar !== undefined && (
            <div style={{ width: '100%', alignSelf: 'stretch' }}>
              <Divider style={{ opacity: 0.2, marginTop: 8, marginBottom: 12 }} />
              {(page as any).sidebar}
            </div>
          )}
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh',
          }}
        >
          {isMobile && (page as any)?.sidebar !== undefined && (
            <>
              {(page as any).sidebar}
              <Divider style={{ opacity: 0.2 }} />
            </>
          )}
          {page !== undefined && page !== null && (
            <>
              {page.description.length > 0 && (
                <Typography style={{ textAlign: 'justify', opacity: 0.75 }}>
                  {page.description}
                </Typography>
              )}
              {page.html}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
