/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
import { useState } from 'react';
export default function AtvMudaConteudo(){
    const [jackpot, setJackpot] = useState()
    function emConstrucao() {
    setJackpot(
        <div>
            <p>Página em construção</p>
        </div>
    );
}   
    function depoisQueOTempoEsgote(){
        setJackpot(
<div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
      <div style={{ flex: 1, backgroundColor: 'purple', height:'200px',width:'200px' }}></div>
      <div style={{ flex: 1, backgroundColor: 'orange', height:'200px',width:'200px' }}></div>
      <div style={{ flex: 1, backgroundColor: 'teal', height:'200px',width:'200px' }}></div>
    </div>
    );
}
    return (
        <div>
            <button onClick={() => emConstrucao()}
                style={{marginRight: '5px'}}
                >Bang</button>
            <button onClick={() => depoisQueOTempoEsgote()}
            style={{marginLeft: '5px'}}> Money </button>
                    <div style={{marginTop: '10px'}} >
            {jackpot}
        </div>
        </div>

    )
}