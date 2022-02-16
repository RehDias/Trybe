import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const Task = () => {
//   const compromissos = ['Conteúdo', 'Exercícios', 'Projetos', 'Pesquisas', 'Faculdade'];
//   const compromisso = compromissos.map((element) => {
//     return (
//       <li>{element}</li>
//     );
//   });
//   return (compromisso);
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      {/* <h1> {Task('ola')} </h1> */}
      <Footer />
    </div>
  );
}

export default App;
