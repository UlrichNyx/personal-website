// To be implemented!

import * as React from 'react';
import Colors from '../styles/Colors';

interface CodeType {
  children?: string;
  language?: 'json' | 'python';
}

const SyntaxHighlighter: React.FunctionComponent<CodeType> = (props) => {
  const {children, language } = props;

  // 

  const languages = {
    'python': [
        {'def':{color: Colors.dndRed}}
    ]
  };

  // Deconstruct string into html elements
  // Add a span with color and text decoration for every keyword
  // <span style={{color: Colors.dndRed}}> def</span>

  return (
          <code>

            {children}
          </code>

  );
};

// 

export default SyntaxHighlighter;
