import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Container>
          <Search />
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
