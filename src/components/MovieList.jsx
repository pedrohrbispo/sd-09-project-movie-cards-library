import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className='movie-list'>
        {this.props.movies.map((movie) => <MovieCard movie={ movie } key={ movie.title }/> )}
      </div>
    );
  }
}

export default MovieList;
