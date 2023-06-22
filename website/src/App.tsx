import React from 'react';

import Navbar from './comps/Navbar';

import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Archives from './screens/Archives';
import ContentPage from './screens/ContentPage';
import Error from './screens/Error';
import CssBaseline from '@mui/material/CssBaseline';
import Recollections from './content/Pages/Recollections/Recollections';
import Homebrew from './content/Pages/DND/Homebrew/Homebrew';

import ScrollToTop from '../src/screens/ScrollToTop';

import './styles/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'black',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/archives' element={<Archives />} />
          <Route path='/portfolio/:post' element={<ContentPage />} />
          <Route path='/archives/:post' element={<ContentPage />} />
          <Route path='/archives/Recollections-of-a-Drowned-Mind' element={<Recollections />} />
          <Route path='/archives/Wedding-night-in-the-bowels-of-hell' element={<Homebrew />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
