import { screen, render } from '@testing-library/react'
import Pokemon from './Pokemon'

it('Should render a pokemon', () => {
  render(
    <Pokemon
      pokemon={{
        id: 7,
        name: 'Charizard',
        abilityOne: 'blaze',
        abilityTwo: 'NA',
        typeOne: 'fire',
        typeTwo: 'flying',
        pic: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        generation: 'First Generation',
      }}
    />
  )

  const pokemon = screen.getByText(/Charizard/)
  expect(pokemon).toMatchSnapshot()
})
