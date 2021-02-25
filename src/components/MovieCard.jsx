// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt="ImagemDoFilme" />
          <h4 className="movie-card-title">
            { movie.title }
          </h4>
          <h5 className="movie-card-subtitle">
            { movie.subtitle }
          </h5>
          <p className="movie-card-storyline">
            { movie.storyline }
          </p>
          <section className="movie-card-rating">
            <Rating rating={ movie.rating } />
          </section>
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }.isRequired,
};

export default MovieCard;
