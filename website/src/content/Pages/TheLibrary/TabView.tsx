import * as React from 'react';
import { Button } from '@mui/material';
import Colors from '../../../styles/Colors';
import { content } from './LibraryContent';
import LibraryElement from '../../../comps/LibraryElement';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

interface TabViewType {
  tabs: TabType[];
  hideFilters?: boolean;
}

export interface TabType {
  title: string;
  color: string;
  icon: React.ReactNode;
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TabView: React.FunctionComponent<TabViewType> = (props) => {
  const { tabs } = props;

  const hideFilters = props.hideFilters ?? false;

  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [searchMode, setSearchMode] = React.useState('Artist');

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        {tabs.map((t, index) => (
          <Button
            key={index}
            startIcon={t.icon}
            onClick={() => setActiveTab(t)}
            style={{
              backgroundColor: activeTab === t ? t.color : Colors.vsAlmostBlack,
              textTransform: 'none',
              color: activeTab === t ? 'white' : t.color,
              borderRadius: 0,
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            }}
          >
            {t.title}
          </Button>
        ))}
      </div>
      {!hideFilters && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            width: '100%',
            marginTop: '10px',
          }}
        >
          <p>Genres</p>
          <p>Artist/Album/Title</p>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={searchMode}
            label='Mode'
            onChange={(event) => setSearchMode(event.target.value)}
          >
            <MenuItem value='Artist'>Artist</MenuItem>
            <MenuItem value='Album'>Album</MenuItem>
            <MenuItem value='Title'>Title</MenuItem>
          </Select>
          <p>Rating</p>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </div>
      )}

      {content[activeTab.title.toLowerCase() as keyof typeof content].map((c, index) => (
        <LibraryElement key={index} {...c} />
      ))}
    </div>
  );
};

export default TabView;
