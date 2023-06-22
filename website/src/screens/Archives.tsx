import React from 'react';
import '../styles/screens/Screen.css';
import ContentPreview from '../comps/ContentPreview';
import { archives } from '../content/Archives';
import Tag from '../comps/Tag';
import { archiveTags } from '../content/Tags';
import Tooltip from '@mui/material/Tooltip';
import FilterSelect from '../comps/FilterSelect';
import { useNavigate } from 'react-router-dom';

const Archives: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [section, setSection] = React.useState('science');
  const [activeTags, setActiveTags] = React.useState<boolean[]>(
    archiveTags[section as keyof typeof archiveTags].map((t) => t.isActive),
  );
  const toggleTag = (index: number): void => {
    setActiveTags(activeTags.map((t, idx) => (index === idx ? !t : t)));
  };

  React.useEffect(() => {
    setActiveTags(archiveTags[section as keyof typeof archiveTags].map((t) => t.isActive));
  }, [section]);

  return (
    <div
      className='screen-container'
      style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1vw' }}>
        <div
          className='content-box'
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            borderRadius: 4,
            alignItems: 'center',
          }}
        >
          <FilterSelect value={section} setValue={setSection} mode='sections' />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto auto auto',
              maxWidth: '80vw',
              overflowX: 'auto',
              paddingBottom: 20,
            }}
          >
            {archiveTags[section as keyof typeof archiveTags].map((item, index) => {
              return (
                <Tag
                  key={index}
                  {...item}
                  index={index}
                  isActive={activeTags[index]}
                  setActive={(i: number) => toggleTag(i)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className='content-box grid'>
        {archives
          .filter((project) =>
            archiveTags[section as keyof typeof archiveTags]
              .filter((tag, index: number) => activeTags[index])
              .some((tag) => project.tags.includes(tag)),
          )
          .map((prj, index) => {
            return (
              <Tooltip key={index} title={prj.date} disableFocusListener disableTouchListener>
                <div>
                  <ContentPreview
                    target='archives'
                    key={index}
                    {...prj}
                    archive
                    onClick={(path: string) => navigate(path)}
                  />
                </div>
              </Tooltip>
            );
          })}
      </div>
    </div>
  );
};

export default Archives;
