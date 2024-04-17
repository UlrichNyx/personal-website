import Typography from '@mui/material/Typography';
import Colors from '../../../styles/Colors';
import Code from '../../../comps/Code';
import FolderStructure from '../../../assets/pwebsite/folder-structure.png';
import FolderIcon from '@mui/icons-material/Folder';
import Image from '../../../comps/Image';
import IconText from '../../../comps/IconText';
import ColorPalette from '../../../comps/ColorPalette';
import { archives } from '../../Archives';
import TriforceDivider from '../../../comps/TriforceDivider';

const content = {
  description:
    'Phew! It has been a long time since I posted on Archives. Please be patient while this page is constructed! :3',
  html: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5vh', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5vh',
          textAlign: 'justify',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5vh',
        }}
      >
        <TriforceDivider upward color={Colors.onlineGreen} />
      </div>
    </div>
  ),
};

export default { ...content };
