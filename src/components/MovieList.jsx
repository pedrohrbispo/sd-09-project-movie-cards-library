// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    // const { data } = this.props.data;
    return (
      <div>
        {data.map((movie, index) => <MovieCard movieInfo={ movie } key={ index } />)}
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};

export default MovieList;
