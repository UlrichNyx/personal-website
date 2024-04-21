import { Typography } from '@mui/material';
import * as React from 'react';

interface TOCType {
  color?: string;
  chapters: string[];
  refs: Array<HTMLSpanElement | null>;
}

const TableOfContent: React.FunctionComponent<TOCType> = (props) => {
  const titlesRef = React.useRef<Array<HTMLSpanElement | null>>(props.refs);
  const scrollTo = (index: number): void => {
    const i = index;
    if (titlesRef !== null) {
      if (titlesRef.current !== null) {
        if (titlesRef.current[i] !== null) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          titlesRef.current[i]!.scrollIntoView(true);
        }
      }
    }
  };
  const { chapters, color } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1vh',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <Typography
        variant='h4'
        style={{
          color,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'inherit',
        }}
      >
        Table of Contents
      </Typography>
      <ol>
        {chapters.map((item, index) => (
          <li
            key={index}
            style={{
              fontSize: 20,
              cursor: 'pointer',
              margin: 10,
            }}
            onClick={() => scrollTo(index)}
          >
            <Typography variant='h6' style={{ textAlign: 'left' }}>
              {item}
            </Typography>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContent;
