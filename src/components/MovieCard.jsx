import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt="bla" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
  }).isRequired,
};

export default MovieCard;
