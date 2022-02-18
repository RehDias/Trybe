import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

class PokemonList extends Component {
  render() {
    const { pokes } = this.props;
    return (
      <div className='pokemons'>
        {pokes.map((poke) => <Pokemon key={poke.id} pokes={poke} />)}
      </div>
    )
  }
}

PokemonList.propTypes = {
  pokes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
          value: PropTypes.number,
          measurementUnit: PropTypes.string
        }
      ),
      image: PropTypes.string,
      moreInfo: PropTypes.string
    })
  ).isRequired,
}

export default PokemonList;