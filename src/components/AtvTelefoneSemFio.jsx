/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/
import React, { useState } from 'react';

function AtvTelefoneSemFio() {
  
  const [telefoneAtivo, setTelefoneAtivo] = useState('');

  
  const [textoA, setTextoA] = useState('');
  const [textoB, setTextoB] = useState('');

  return (
    <div>
      {/* Botões posicionados lado a lado */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setTelefoneAtivo('A')}>Telefone A</button>
        <button onClick={() => setTelefoneAtivo('B')}>Telefone B</button>
      </div>

      {/* Div de baixo que altera seu conteúdo dinamicamente */}
      <div>
        {/* Conteúdo do Botão A: exibe o texto digitado no Input B */}
        {telefoneAtivo === 'A' && (
          <div>
            <p>Mensagem recebida do B: {textoB}</p>
            <input 
              type="text" 
              placeholder="Digite o segredo para o B..." 
              value={textoA} 
              onChange={(e) => setTextoA(e.target.value)} 
            />
          </div>
        )}

        {/* Conteúdo do Botão B: exibe o texto digitado no Input A */}
        {telefoneAtivo === 'B' && (
          <div>
            <p>Mensagem recebida do A: {textoA}</p>
            <input 
              type="text" 
              placeholder="Digite o segredo para o A..." 
              value={textoB} 
              onChange={(e) => setTextoB(e.target.value)} 
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AtvTelefoneSemFio;