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
    const [modo, setModo] = useState(null);
    return(<div>
    <div style={{display: 'flex', gap: '10px' }}>
        <button onClick={() => setModo('A')}>Construção</button>
        <button onClick={() => setModo('B')}>Finalizado</button>
    </div>
    <div>
        {modo === 'A' &&(
            <p>Página em construção</p>
        )}
        {modo === 'B' &&(
        <div style={{display: 'flex'}}>
            <div style={{width: '200px', height: '200px', backgroundColor: 'purple'}}></div>
            <div style={{width: '200px', height: '200px', backgroundColor: 'teal'}}></div>
            <div style={{width: '200px', height: '200px', backgroundColor: 'orange'}}></div>
        </div>
        )}
    </div>
        </div>)
}