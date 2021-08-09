import React from 'react';
import FreeAppBar from "./components/FreeAppBar";
import Footer from "./components/Footer"
import Hero from './components/Hero'
import MovieGrid from './components/MovieGrid';

import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme();



const App = () => {
  return (
    <>
        <ThemeProvider theme={theme}>
      <header>
        <FreeAppBar />
      </header>
      <main>
          <Hero />
          <MovieGrid />
      </main>
      <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
