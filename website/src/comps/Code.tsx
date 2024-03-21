import * as React from 'react';
import Colors from '../styles/Colors';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ContentCopy from '@mui/icons-material/ContentCopy';
import CopyButton from '../comps/CopyButton';

interface CodeType {
  children: React.ReactNode;
  language?: 'json' | 'python';
}

const Code: React.FunctionComponent<CodeType> = (props) => {
  const {children, language } = props;
  

  return (
    <div style={{ position:'relative' }}>
      
      <code>
        <pre
          style={{
            backgroundColor: Colors.draculaBlack,
            padding: 10,
            borderRadius: 4,
            maxWidth: '80vw',
            overflow: 'auto',
            textAlign:'justify'
          }}
        >
          <Typography>{language}</Typography>
          
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          <code>
            {children}
          </code>
        </pre>

        </pre>
      </code>
    </div>
  );
};

// <CopyButton content={children} style={{position:'absolute', top:'0%', right:'0'}}/>

export default Code;
