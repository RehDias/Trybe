import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokes: { name, type, averageWeight, image } } = this.props;
    return (
      <li className="poke"> 
        <img src={image} alt={name} className='imagem'/>
        <p>{name}</p> 
        <p>{type}</p> 
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
      </li> 
    )
  }
}

Pokemon.prototypes = {
  pokes:PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;