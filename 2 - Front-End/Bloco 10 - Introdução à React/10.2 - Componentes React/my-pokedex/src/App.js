import data from './data';
import PokemonList from './PokemonsList';
import app from './app.css'; 

function App() {
  return ( 
    <div>
      <h1 className='title'><strong>Pokedex</strong></h1>
      <PokemonList pokes={ data } /> 
    </div>
  );
}

export default App;
