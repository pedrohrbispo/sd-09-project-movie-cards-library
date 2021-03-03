import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
      const { movies } = this.props;
    return(
        <div className="movie-list">
            { movies.map((movie, index) => <MovieCard key={  `Movie Title ${(index + 1)}` }  movie={ movie } />)}
        </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
