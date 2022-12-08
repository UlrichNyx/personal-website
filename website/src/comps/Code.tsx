import * as React from 'react';
import Colors from '../styles/Colors';

interface CodeType {
  children: React.ReactNode;
}

const Code: React.FunctionComponent<CodeType> = (props) => {
  const { children } = props;
  return (
    <div style={{ margin: 50 }}>
      <code style={{ backgroundColor: Colors.vsAlmostBlack, padding: 10, borderRadius: 4 }}>
        {children}
      </code>
    </div>
  );
};

export default Code;
