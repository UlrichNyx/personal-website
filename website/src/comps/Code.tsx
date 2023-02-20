import * as React from 'react';
import Colors from '../styles/Colors';

interface CodeType {
  children: React.ReactNode;
  language?: 'json';
}

const Code: React.FunctionComponent<CodeType> = (props) => {
  const { children, language } = props;

  return (
    <div style={{ margin: 50 }}>
      <code>
        <pre
          style={{
            backgroundColor: Colors.vsAlmostBlack,
            padding: 10,
            borderRadius: 4,
            maxWidth: '80vw',
            overflow: 'auto',
          }}
        >
          {children}
        </pre>
      </code>
    </div>
  );
};

export default Code;
