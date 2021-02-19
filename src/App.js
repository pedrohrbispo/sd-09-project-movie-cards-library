import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <main>
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
