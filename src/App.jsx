import Placar from './components/Placar';
import InputTexto from './components/InputTexto';
import AtvTelefoneSemFio from './components/AtvTelefoneSemFio';
import AtvMudaConteudo from './components/AtvMudaConteudo';
import AtvDobra from './components/AtvDobra';
import AtvCumprimenta from './components/AtvCumprimenta';

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
          <AtvTelefoneSemFio />
          <AtvMudaConteudo> </AtvMudaConteudo>
          <AtvDobra numero={2}>  </AtvDobra>
      <AtvCumprimenta />
      <InputTexto/>
    </div> 
  );
}
