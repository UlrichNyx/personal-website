import React from 'react';
import '../styles/screens/Screen.css';
import ContentPreview from '../comps/ContentPreview';
import { projects, ProjectProps } from '../content/Projects';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const getStartYear = (date: string): number => parseInt(date.split('-')[0]);

const groupByYear = (items: ProjectProps[]): Array<[string, ProjectProps[]]> => {
  const map: Record<string, ProjectProps[]> = {};
  for (const prj of items) {
    const year = String(getStartYear(prj.date));
    if (map[year] === undefined) map[year] = [];
    map[year].push(prj);
  }
  return Object.entries(map).sort(([a], [b]) => parseInt(b) - parseInt(a));
};

const CIRCLE_RADIUS = 55; // half of the 110px circle in ContentPreview

const Portfolio: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const groups = groupByYear(projects);

  return (
    <div
      className='screen-container'
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10vh',
        paddingBottom: '10vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: 'rgba(255,255,255,0.07)',
          transform: 'translateX(-50%)',
        }}
      />

      {groups.map(([year, yearProjects]) => (
        <React.Fragment key={year}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginBottom: '3vh',
              zIndex: 1,
            }}
          >
            <div
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 4,
                padding: '3px 14px',
              }}
            >
              <Typography
                variant='overline'
                style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 3 }}
              >
                {year}
              </Typography>
            </div>
          </div>

          {yearProjects.map((prj, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={prj.title}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  width: '100%',
                  marginBottom: '4vh',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }} />
                  {isLeft && (
                    <Tooltip title={prj.date} disableFocusListener disableTouchListener>
                      <div>
                        <ContentPreview
                          target='portfolio'
                          {...prj}
                          onClick={(path: string) => navigate(path)}
                        />
                      </div>
                    </Tooltip>
                  )}
                  {isLeft && (
                    <div
                      style={{
                        width: '3vw',
                        height: 1,
                        backgroundColor: prj.color,
                        opacity: 0.5,
                        flexShrink: 0,
                        marginTop: CIRCLE_RADIUS,
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: prj.color,
                    boxShadow: `0 0 8px ${prj.color}`,
                    flexShrink: 0,
                    zIndex: 1,
                    marginTop: CIRCLE_RADIUS - 5,
                  }}
                />

                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}
                >
                  {!isLeft && (
                    <div
                      style={{
                        width: '3vw',
                        height: 1,
                        backgroundColor: prj.color,
                        opacity: 0.5,
                        flexShrink: 0,
                        marginTop: CIRCLE_RADIUS,
                      }}
                    />
                  )}
                  {!isLeft && (
                    <Tooltip title={prj.date} disableFocusListener disableTouchListener>
                      <div>
                        <ContentPreview
                          target='portfolio'
                          {...prj}
                          onClick={(path: string) => navigate(path)}
                        />
                      </div>
                    </Tooltip>
                  )}
                  <div style={{ flex: 1 }} />
                </div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Portfolio;
