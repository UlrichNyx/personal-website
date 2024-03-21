import * as React from 'react';
import '../styles/comps/Image.css';
import Image from './Image';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

export interface CopyButtonType {
  content: React.ReactNode;
  style?: React.CSSProperties;
}

const CopyButton: React.FunctionComponent<CopyButtonType> = (props) => {
    const [show, setShow] = React.useState(false);
    const {style} = props;
    const copyFrameworks = (color: string): void => {
        navigator.clipboard
          .writeText(color)
          .then((res) => {
            console.log('Copied to clipboard');
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 3000);
          })
          .catch((err) => console.error(err));
      };
    return(
              <div style={{ height: '5vh', margin: '5vh', ...style }}>
          <IconButton
            onClick={() => copyFrameworks(props.content?.toString() ?? '')}
            >
          <ContentCopyIcon fontSize="small"/>
        </IconButton>
          <Collapse in={show}>
            <Alert severity='info'>Copied to clipboard!</Alert>
          </Collapse>
        </div>);
};
export default CopyButton;