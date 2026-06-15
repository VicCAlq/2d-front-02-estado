/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <div> com dois <button> na horizontal, e abaixo destes dois botões mais uma <div>. 
Ao clicar no primeiro <button>, a <div> de baixo deverá exibir um <p> com o conteúdo "Página em construção". 
Ao clicar no segundo <button>, o conteúdo dessa <div> deve ser substituído por três <div> dispostas lado a lado, 
onde cada uma destas <divs> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
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
  alturaelargura: {
    height: "200px",
    width:"200px"
  }

}

export default function AtvMudaConteudo() {

    const elemento1 = <>
    <p>Página em construção</p>
    </>

    const elemento2 = <>
        <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
            <div style={{backgroundColor:"purple",...estilo.alturaelargura}}></div>
            <div style={{backgroundColor:"teal",...estilo.alturaelargura}}></div>
            <div style={{backgroundColor:"orange",...estilo.alturaelargura}}></div>
        </div>
    </>

    const [tela, setTela] = useState(elemento1)

    return(
        <div style={estilo.view}>
            <div style={estilo.viewBotoes}>
                <button style={estilo.botao} >
                    <p style={estilo.textoBotao} onClick={() => setTela(elemento1)}>Página em construção</p>
                </button>
                <button style={estilo.botao} >
                    <p style={estilo.textoBotao} onClick={() => setTela(elemento2)}>Semáforo</p>
                </button>
            </div>
            {tela}
        </div>
    )
}
