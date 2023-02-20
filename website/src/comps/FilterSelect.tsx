import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

import ScienceIcon from '@mui/icons-material/Science';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

interface FilterType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  mode: 'time' | 'sections';
}

const FilterSelect: React.FunctionComponent<FilterType> = (props) => {
  const handleChange = (event: SelectChangeEvent): void => {
    props.setValue(event.target.value);
  };

  return props.mode === 'time' ? (
    <FormControl>
      <InputLabel>Year Range</InputLabel>
      <Select
        value={props.value}
        onChange={handleChange}
        autoWidth
        style={{ color: 'white' }}
        label='Year Range'
      >
        <MenuItem value='2000-2024'>(2000 - 2024) Total Year Range</MenuItem>
        <MenuItem value='2016-2018'>(2016 - 2018) IB Diploma 🇬🇷</MenuItem>
        <MenuItem value='2018-2022'>(2018 - 2022) Higher Education 🇬🇧</MenuItem>
        <MenuItem value='2022-2024'>(2022 - 2024) Junior Development *</MenuItem>
      </Select>
    </FormControl>
  ) : (
    <FormControl>
      <InputLabel>Section</InputLabel>
      <Select
        value={props.value}
        onChange={handleChange}
        autoWidth
        style={{ color: 'white' }}
        label='Section'
      >
        <MenuItem value='science'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <ScienceIcon />
            <Typography>Natural Sciences & Engineering</Typography>
          </div>
        </MenuItem>
        <MenuItem value='arts'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <AutoStoriesIcon />
            <Typography>Arts & Languages</Typography>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterSelect;

/*


import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';

        
        <MenuItem value='vgc'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <VideogameAssetIcon />
            <Typography>Board/Video Game Collection</Typography>
          </div>
        </MenuItem>
        <MenuItem value='wellbeing'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <SelfImprovementIcon />
            <Typography>Training & Wellbeing</Typography>
          </div>
        </MenuItem>
        <MenuItem value='general'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5%',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          >
            <SpaIcon />
            <Typography>Life & General</Typography>
          </div>
        </MenuItem>
*/
