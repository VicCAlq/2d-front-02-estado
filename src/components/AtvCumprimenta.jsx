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

import React, { useState } from 'react';

export default function AtvCumprimenta() {
  // Estado 1: Armazena o texto que o usuário está digitando linha por linha
  const [nomeInput, setNomeInput] = useState('');

  // Estado 2: Armazena o nome definitivo que só será exibido após clicar no botão
  const [nomeExibido, setNomeExibido] = useState('');

  // Função disparada ao clicar no botão
  const lidarComClique = () => {
    setNomeExibido(nomeInput);
  };

  return (
    <div>
      <p>Olá, qual seu nome?</p>
      
      {/* O valor do input é espelhado no estado nomeInput */}
      <input 
        type="text" 
        placeholder="Nome aqui" 
        value={nomeInput}
        onChange={(e) => setNomeInput(e.target.value)} 
      />
      
      <button onClick={lidarComClique}>
        Salvar
      </button>

      {/* Condicional: O parágrafo só renderiza na tela se nomeExibido não estiver vazio */}
      {nomeExibido && (
        <p>É um prazer lhe conhecer, {nomeExibido}</p>
      )}
    </div>
  );
}