// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
      const { rating } = this.props;
      return (
        <div className='rating'>{rating}</div>
      );
  }
}

Rating.protoType = {
  rating: PropTypes.number,
}


export default Rating;