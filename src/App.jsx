import Placar from './components/AtvDobra';
import InputTexto from './components/InputTexto';
import AtvCumprimenta from './components/AtvCumprimenta'
import AtvMudaConteudo from './components/AtvMudaConteudo'
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
        <AtvCumprimenta></AtvCumprimenta>
      <AtvMudaConteudo/>
    </div>
  );
}
