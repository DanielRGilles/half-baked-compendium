import PropTypes from 'prop-types'
import Pokemon from '../Pokemon/Pokemon'
import './PokemonList.css'

export default function PokemonList({ pokemons }) {
  return (
    <ul aria-label="pokemonList" className="pokemonList">
      {pokemons.map((pokemon) => {
        return (
          <li className="listItem" key={pokemon.id}>
            <Pokemon pokemon={pokemon} />
          </li>
        )
      })}
    </ul>
  )
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      abilityOne: PropTypes.string.isRequired,
      abilityTwo: PropTypes.string.isRequired,
      typeOne: PropTypes.string.isRequired,
      typeTwo: PropTypes.string.isRequired,
      pic: PropTypes.string.isRequired,
      generation: PropTypes.string.isRequired,
    })
  ).isRequired,
}
