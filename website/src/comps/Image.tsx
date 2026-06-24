import * as React from 'react';
import '../styles/comps/Image.css';

interface ImageType {
  src: string;
  style: React.CSSProperties;
  onClick?: () => void;
  className?: string;
}

const Image: React.FunctionComponent<ImageType> = (props) => {
  const { src, style, onClick, className } = props;
  return <img onClick={onClick} className={`unselectable${className !== null && className !== undefined ? ` ${className}` : ''}`} src={src} style={style} />;
};

export default Image;
