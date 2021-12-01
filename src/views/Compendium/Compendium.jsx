import {useState, useEffect} from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';
import {
  fetchFilteredPokemon,
  fetchPokemon,
  fetchSearchPokemon,
  fetchTypes,
} from '../../services/pokemon';
import './Compendium.css';
import Controls from '../../components/Controls/Controls';
import pokeball from '../../assets/pokeball.png';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  //TODO 😖 help!
  // if (pokemons.count !== 0) {
  //   useEffect(() => {
  //     const getPokemon = async () => {
  //       const pokemonList = await fetchPokemon();
  //        this.setState({pokemons: pokemonList});
  //       setLoading(false);
  //     };
  //     getPokemon();
  //   }, [pokemons]);
  // }

  //TODO 😖 help!
  //   useEffect(async () => {
  //      function getTypes() {
  //       const pokemonTypes = fetchTypes();
  //       setTypes(pokemonTypes);
  //     }
  //     getTypes();
  //   }, []);

  //TODO 😖 help!
  // useEffect(() => {
  //   async function getFilteredPokemon() {
  //     if (!selectedType) return;
  //     setLoading(true);

  //     if (selectedType !== 'all') {
  //       const filteredPokemon = await fetchFilteredPokemon(selectedType);
  //       setPokemons(filteredPokemon);
  //     } else {
  //       const pokemonList = await fetchPokemon();
  //       this.setState({pokemons: pokemonList});
  //     }
  //     setLoading(false);
  //     setSort('');
  //   }

  //   getFilteredPokemon();
  // }, [selectedType]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetchSearchPokemon(searchName)
      .then((searchedPokemons) => {
        this.setState({pokemons: searchedPokemons});
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
        setSearchName('');
        setSelectedType('');
      });
  };

  return (
    <div className='app'>
      <main>
        <div className='title'>
          <img src={pokeball} alt='pokeball' />
          <h1 className='titleText'>Alchemy Compendium</h1>
        </div>
        <Controls
          name={searchName}
          handleSubmit={handleSubmit}
          handleNameChange={setSearchName}
          types={types}
          filterChange={setSelectedType}
          selectedType={selectedType}
        />
        {loading ? (
          <code>Search for the bugs in the code!</code>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </main>
    </div>
  );
}
