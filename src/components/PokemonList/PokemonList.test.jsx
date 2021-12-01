import { render, screen } from '@testing-library/react'
import PokemonList from './PokemonList'

it('displays a list of pokemon', () => {
  render(
    <PokemonList
      pokemons={[
        {
          id: 7,
          name: 'Charizard',
          abilityOne: 'blaze',
          abilityTwo: 'NA',
          typeOne: 'fire',
          typeTwo: 'flying',
          pic: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
          generation: 'First Generation',
        },
        {
          id: 172,
          name: 'Typhlosion',
          abilityOne: 'blaze',
          abilityTwo: 'NA',
          typeOne: 'fire',
          typeTwo: 'NA',
          pic: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png',
          generation: 'Second Generation',
        },
        {
          id: 279,
          name: 'Blaziken',
          abilityOne: 'blaze',
          abilityTwo: 'NA',
          typeOne: 'fire',
          typeTwo: 'fighting',
          pic: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png',
          generation: 'Third Generation',
        },
      ]}
    />
  )

  const pokemons = screen.getByRole('list', { name: 'pokemonList' })
  expect(pokemons).toMatchSnapshot()
})
