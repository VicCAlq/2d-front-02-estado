/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import { useState } from 'react';

const estilo = {
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#303540',
    padding: 10,
    margin: 10,
    gap: 10,
  },
  texto: {
    color: '#eee',
    fontSize: 32,
  },
  textoBotao: {
    color: '#eee',
    fontSize: 16,
  },
  botao: {
    borderRadius: 5,
    backgroundColor: '#505560',
    padding: 10,
    margin: 10,
  },
  viewBotoes: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#bbb',
    padding: 4,
  }
};

export default function AtvTelefoneSemFio() {
  const [telefone, setTelefone] = useState();
  
  return (
    <div>
        <button></button>
        <button></button>
    </div>
  );
}
