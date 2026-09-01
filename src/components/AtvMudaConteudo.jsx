/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import React, { useState } from 'react';

function AtvMudaConteudo() {
  // Estado para controlar o que exibir na div de baixo ('construcao', 'quadrados' ou vazio)
  const [conteudo, setConteudo] = useState('');

  return (
    <div>
      {/* Botões alinhados na horizontal */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setConteudo('construcao')}>
          Exibir Página em Construção
        </button>
        <button onClick={() => setConteudo('quadrados')}>
          Exibir Quadrados Coloridos
        </button>
      </div>

      {/* Div de baixo que altera o conteúdo dinamicamente */}
      <div>
        {conteudo === 'construcao' && (
          <p>Página em construção</p>
        )}

        {conteudo === 'quadrados' && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'purple' }}></div>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'teal' }}></div>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'orange' }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AtvMudaConteudo;
