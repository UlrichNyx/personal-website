import * as React from 'react';
import Colors from '../styles/Colors';

interface CodeType {
  children: React.ReactNode;
  language?: 'json';
}

const Code: React.FunctionComponent<CodeType> = (props) => {
  const { children, language } = props;

  const parseInput = (children: React.ReactNode): React.ReactNode | string => {
    if (language === 'json') {
      if (typeof children === 'string') {
        children.replaceAll('.', '\n');
        console.log(children);
        return children;
      }
    }
    return children;
  };

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
          {parseInput(children)}
        </pre>
      </code>
    </div>
  );
};

export default Code;
