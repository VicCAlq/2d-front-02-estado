/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from 'react'

const estilo = {
  view: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#303540",
    padding: "10px",
    margin: "10px",
    gap: "10px",
  },
  texto: {
    color: "#eee",
    fontSize: "32px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
  viewBotoes: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderRadius: "5px",
    backgroundColor: "#bbb",
    padding: "4px",
  }
}


export default function AtvTelefoneSemFio() {
  const [textoInserido, setTextoInserido] = useState("")
  const [texto, setTexto] = useState("Quem é este Pokemon?")

  // Parte visual do componente
  return(
    <div style={estilo.view}>
      <p style={estilo.texto}>
        {texto}
      </p>
     <div> 

        <button style={estilo.botao} onClick={() => setTexto(textoInserido)}>
        <p style={estilo.textoBotao}>Salvar texto</p>
        </button></div> 

        <button style={estilo.botao} onClick={() => setTexto(textoInserido)}>
        <p style={estilo.textoBotao}>Salvar texto</p>
        </button>


        <input
        type="text"
        value={textoInserido}
        style={estilo.input}
        onChange={(e) => setTextoInserido(e.target.value)}
        placeholder="Digite aqui o novo texto"
      />
      
      <input
        type="text"
        value={textoInserido}
        style={estilo.input}
        onChange={(e) => setTextoInserido(e.target.value)}
        placeholder="Digite aqui o novo texto"
      />
      
    </div>
  )
}

