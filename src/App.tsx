import React from 'react';
import FreeAppBar from "./components/FreeAppBar";
import Footer from "./components/Footer"
import Hero from './components/Hero'
import MovieGrid from './components/MovieGrid';

const App = () => {

  return (
    <>
      <header>
        <FreeAppBar />
      </header>
      <main>
          <Hero />
          <MovieGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
