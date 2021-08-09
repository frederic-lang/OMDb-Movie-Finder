import React from 'react';
import FreeAppBar from "./components/FreeAppBar";
import Footer from "./components/Footer"
import Hero from './components/Hero'
import MovieGrid from './components/MovieGrid';

import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@material-ui/core/styles';


declare module '@material-ui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme();



const App = () => {
  return <>
      <StyledEngineProvider injectFirst>
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
      </StyledEngineProvider>
  </>;
}

export default App
