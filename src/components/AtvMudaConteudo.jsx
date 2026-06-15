/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { useState } from "react"

const style = {
    primeiraDiv: {backgroundColor: "purple"},
    segundaDiv: {backgroundColor: "teal"},
    terceiraDiv: {backgroundColor: "orange"},
}
export default function AtvMudaConteudo() {
    const pagina1 = <div><p>Página em construção</p></div>;
    const pagina2 = <div>
                        <div style={style.primeiraDiv}></div>
                        <div style={style.segundaDiv}></div>
                        <div style={style.terceiraDiv}></div>
                    </div>

const [paginaAtual, setPaginaAtual] = useState(pagina1)

    return(
        <div>
            <button onClick={() => setPaginaAtual(pagina1)}> Botão 1 </button> 
            <button onClick={() => setPaginaAtual(pagina2)}> Botao 2</button>
            {paginaAtual}                
        </div>
    )
}