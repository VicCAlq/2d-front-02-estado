import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtivCumprimenta from './components/AtvCumprimenta.jsx';
import AtvDobra from './components/AtvDobra.jsx'
import AtvMudaConteudo from './components/AtvMudaConteudo.jsx'

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#101015",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#eec"
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      <Placar/>
      <InputTexto/>
      <AtivCumprimenta/>
      <AtvDobra numero={1}/>
      <AtvMudaConteudo/>
      
    </div>
  );
}
