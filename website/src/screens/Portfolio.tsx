import React from 'react';
import '../styles/screens/Screen.css';
import ContentPreview from '../comps/ContentPreview';
import Colors from '../styles/Colors';
import { projects, includesTime } from '../content/Projects';
import FilterSelect from '../comps/FilterSelect';
import Tag from '../comps/Tag';
import { tags } from '../content/Tags';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
const Portfolio: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [time, setTime] = React.useState('2000-2024');
  const [activeTags, setActiveTags] = React.useState<boolean[]>(tags.map((t) => t.isActive));
  const toggleTag = (index: number): void => {
    setActiveTags(activeTags.map((t, idx) => (index === idx ? !t : t)));
  };

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
          <FilterSelect value={time} setValue={setTime} mode='time' />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              overflowX: 'auto',
              maxWidth: '80vw',
              paddingBottom: 20,
            }}
          >
            {tags.map((item, index) => {
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
        {projects
          .filter((prj) => includesTime(prj.date, time))
          .filter((prj) =>
            tags.filter((tag, index) => activeTags[index]).some((tag) => prj.tags.includes(tag)),
          )
          .map((prj, index) => {
            return (
              <Tooltip key={index} title={prj.date} disableFocusListener disableTouchListener>
                <div>
                  <ContentPreview
                    target='portfolio'
                    key={index}
                    {...prj}
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

export default Portfolio;
