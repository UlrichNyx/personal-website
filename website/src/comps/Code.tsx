import * as React from 'react';
import Colors from '../styles/Colors';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ContentCopy from '@mui/icons-material/ContentCopy';
import CopyButton from '../comps/CopyButton';
import SyntaxHighlighter from './SyntaxHighlighter';

interface CodeType {
  children: React.ReactNode;
  language?: 'json' | 'python';
}

const Code: React.FunctionComponent<CodeType> = (props) => {
  const { children, language } = props;
  const codeText = typeof children === 'string' ? children : children?.toString();

  return (
    <div style={{ position: 'relative' }}>
      <code>
        <pre
          style={{
            backgroundColor: Colors.draculaBlack,
            padding: 10,
            borderRadius: 4,
            maxWidth: '80vw',
            overflow: 'auto',
            textAlign: 'justify',
          }}
        >
          <Typography>{language}</Typography>

          <pre style={{ whiteSpace: 'pre-wrap' }}>
            <SyntaxHighlighter language={language}>{codeText}</SyntaxHighlighter>
          </pre>
        </pre>
      </code>
    </div>
  );
};

// <CopyButton content={codeText} style={{position:'absolute', top:'0%', right:'0'}}/>

export default Code;
