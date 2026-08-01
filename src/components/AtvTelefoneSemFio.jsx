/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/

import {useState} from 'react'

function AtvTelefoneSemFio() {

    const [textoBotao1, setTextoBotao1] = useState("");
    const [textoBotao2, setTextoBotao2] = useState("");
    const [ativo, setAtivo] = useState("");

    return(
        <div>

            <button onClick={() => setAtivo("botao01")}>Botão 1</button>

            <button onClick={() => setAtivo("botao02")}>Botão 2</button>

            <div>

                {ativo === "botao01" && (
                    <div>
                        <p>{textoBotao2}</p>

                        <input onChange={(e) => setTextoBotao1(e.target.value)}/>
                    </div>
                )}

                {ativo === "botao02" && (
                    <div>
                        <p>{textoBotao1}</p>

                        <input onChange={(e) => setTextoBotao2(e.target.value)}/>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AtvTelefoneSemFio