import { useState } from "react"

/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/
const style = {
    viewBotoes: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  }

}
export default function AtvTelefoneSemFio() {
    const [texto1, setTexto1] = useState("")
    const [texto2, setTexto2] = useState("")

    const pagina1 = <div>
                <p>{texto2}</p>
                <input
                type="text"
                onChange={(e) => setTexto1(e.target.value)}
                placeholder="Digite aqui o novo texto"
                ></input>
            </div>

    const pagina2 = <div>
                <p>{texto1}</p>
                <input
                type="text"
                onChange={(e) => setTexto2(e.target.value)}
                placeholder="Digite aqui o novo texto"
                ></input>
            </div>

const [paginaAtual, setPaginaAtual] = useState(pagina1)

    return(
    <>
        <div style={style.viewBotoes}>
            <button onClick={() => setPaginaAtual(pagina1)}>Botão 1</button>
            <button onClick={() => setPaginaAtual(pagina2)}>Botão 2 </button>
        </div>
        {paginaAtual}
    </>    
    )
}