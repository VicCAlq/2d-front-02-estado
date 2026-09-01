/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <div>, onde dentro dela haverá um <p> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <p> deve haver um <input> onde o usuário poderá digitar seu nome. 
Ao lado deste <input> deve haver um <button>, que ao ser apertado vai fazer um <p> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <input>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/
/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <div>, onde dentro dela haverá um <p> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <p> deve haver um <input> onde o usuário poderá digitar seu nome. 
Ao lado deste <input> deve haver um <button>, que ao ser apertado vai fazer um <p> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <input>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/


import { useState } from 'react';
import root from '../styles/main';
const estilo = {
  botao: {
    fontSize:"10px",
    borderRadius: "50px",
    padding: root.spacings.paddingM,
    backgroundColor: "red",

  },
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  },
  inputo: {
    marginRight: "15px",
  }
}


export default function AtvCumprimenta() {
  const [nomeLegalInserido, setNomeLegalInserido] = useState("");
  const [nomeLegal, SetnomeLegal] = useState("Seu nome aqui")
  return (
    <div style={{ padding: 20 }}>
      <p>Qual o seu nome:</p>
      <input
        placeholder="Seu nome aqui"
        value={nomeLegalInserido}
        onChange={(e) => setNomeLegalInserido(e.target.value)}
        style={estilo.inputo}
        type="text"
      />
      <button style={estilo.botao} onClick={() => SetnomeLegal(nomeLegalInserido)}>
        <p style={estilo.textoBotao}>Salvar nome </p>
      </button>
      <p style={{ marginTop: 20 }}>
        Prazer em lhe conhecer, {nomeLegal || '...'}!
      </p>

    </div>
  );
}
