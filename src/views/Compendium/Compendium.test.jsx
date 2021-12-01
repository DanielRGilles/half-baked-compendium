import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Compendium from './Compendium'

it('Should fetch then render a list of pokemon', async () => {
  render(<Compendium />)

  const loading = screen.getByText(/Loading.../i)
  expect(loading).toBeInTheDocument()

  const pokemons = await screen.findByRole('list', {
    name: 'pokemonList',
  })

  expect(pokemons).toMatchSnapshot()
})

it('should display a search form', async () => {
  render(<Compendium />)
  const searchForm = await screen.findByRole('form', {
    name: 'searchForm',
  })
  expect(searchForm).toBeInTheDocument()
})

it('should search for a pokemon', async () => {
  render(<Compendium />)

  const searchInput = await screen.findByLabelText('Name:')
  userEvent.type(searchInput, 'Charizard')

  const submitButton = await screen.findByRole('button')
  userEvent.click(submitButton)

  return waitFor(() => {
    const pokemons = screen.getAllByText('Charizard', { exact: false })

    expect(pokemons).toHaveLength(3)
    expect(pokemons).toMatchSnapshot()
  })
})
