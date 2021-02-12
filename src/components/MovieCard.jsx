import React, { Component } from 'react';

class MovieCard extends Component{
  render() {
    return (
      <div>
        <img src={this.props.movie.imagePath}/>
        <h4>{this.props.movie.title}</h4>
        <h5>{this.props.movie.subtitle}</h5>
      </div>
    )
  }
}

export default MovieCard;
