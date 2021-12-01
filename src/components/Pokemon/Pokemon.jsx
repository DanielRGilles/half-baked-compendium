import PropTypes from 'prop-types'
import './Pokemon.css'

export default function Pokemon({ pokemon }) {
  const { name, abilityOne, abilityTwo, typeOne, typeTwo, pic, generation } = pokemon

  const hasSecondType = typeTwo !== 'NA'
  const hasSecondAbility = abilityTwo !== 'NA'

  return (
    <figure aria-label="pokemon">
      <img src={pic} alt={`${name}-${generation}`} />
      <div className="details">
        <h2>{name}</h2>
        <p>{generation}</p>
        <p>
          {abilityOne}
          {hasSecondAbility && `/${abilityTwo}`}
        </p>
        <p>
          {typeOne}
          {hasSecondType && `/${typeTwo}`}
        </p>
      </div>
    </figure>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    abilityOne: PropTypes.string.isRequired,
    abilityTwo: PropTypes.string.isRequired,
    typeOne: PropTypes.string.isRequired,
    typeTwo: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    generation: PropTypes.string.isRequired,
  }).isRequired,
}
