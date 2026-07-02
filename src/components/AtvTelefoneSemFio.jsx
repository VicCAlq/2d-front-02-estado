/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/
import { useState } from 'react';
export default function AtvTelefoneSemFio(){
    const [ativa, setAtiva] = useState(null);
    const [TA, setTA] = useState('');
    const [TB, setTB] = useState('');
    return(<div>
    <div style={{display: 'flex' }}>
        <button onClick={() => setAtiva('A')}>A</button>
        <button onClick={() => setAtiva('B')}>B</button>
    </div>


    <div>
    {ativa === 'A' && (
          <div>
            <p>{TB}</p> 
            <input type="text" value={TA} onChange={(e) => setTA(e.target.value)} placeholder="Digitando texto A"/>
          </div>
        )}
    {ativa === 'B' && (
          <div>
            <p>{TA}</p> 
            <input type="text" value={TB} onChange={(e) => setTB(e.target.value)} placeholder="Digitando texto B"/>
          </div>
        )}
    </div>


        </div>
    )
}