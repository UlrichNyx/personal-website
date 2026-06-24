import React from 'react';
import '../styles/screens/Screen.css';
import ArchiveEntry from '../comps/ArchiveEntry';
import { archives } from '../content/Archives';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const parseDate = (dateStr: string): Date => {
  const parts = dateStr.split('/');
  return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
};

const Archives: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const sorted = [...archives].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
  );

  return (
    <div
      className='screen-container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10vh',
        paddingBottom: '10vh',
      }}
    >
      <div style={{ width: '100%', maxWidth: 720 }}>
        {sorted.map((entry, index) => (
          <React.Fragment key={entry.title}>
            <ArchiveEntry
              target='archives'
              {...entry}
              onClick={(path: string) => navigate(path)}
            />
            {index < sorted.length - 1 && (
              <Divider style={{ opacity: 0.08 }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Archives;
