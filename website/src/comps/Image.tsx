import * as React from 'react';
import '../styles/comps/Image.css';

interface ImageType {
  src: string;
  style: React.CSSProperties;
  onClick?: () => void;
}

const Image: React.FunctionComponent<ImageType> = (props) => {
  const { src, style, onClick } = props;
  return <img onClick={onClick} className='unselectable' src={src} style={style} />;
};

export default Image;
