import React, { ReactElement } from 'react';
import Typography from '@mui/material/Typography';
interface ChapterProps {
  index: number;
  color: string;
  titlesRef: Array<HTMLSpanElement | null>;
  children: React.ReactNode;
}
const ChapterHeader = ({ index, color, titlesRef, children }: ChapterProps): ReactElement => {
  return (
    <Typography
      ref={(el) => (titlesRef[index] = el)}
      variant='h4'
      style={{
        color: color,
        scrollMargin: 100,
        marginTop: '5vh',

        fontWeight: 'bold',
        fontFamily: 'inherit',
        maxWidth: '80%',
      }}
    >
      {index + 1}. {children}
    </Typography>
  );
};
export default ChapterHeader;
