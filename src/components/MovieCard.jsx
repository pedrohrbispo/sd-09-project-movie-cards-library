import React, {Component} from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types'

class MovieCard extends Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movie
    return(
      <div>
        <img src={imagePath} alt='Capa do filme'></img>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}

export default MovieCard;