/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <div> com dois <button> lado a lado, e uma <div> abaixo dos botões.
Cada <button> ao ser clicado, deve inserir na <div> abaixo um <p> e um <input>, 
e substituir o conteúdo anterior dessa <div> de baixo dos botões.
O texto digitado no <input> ativado por um <button> deve ser exibido no <p> do outro <button>, e vice-versa.
*/


import { useState } from "react";

export default function AtvTelefoneSemFio() {

const [botao1, setBotao1] = useState("")
const [botao2, setBotao2] = useState("")
const [active, setActive] = useState(1)

 return (

<div>

<button onClick={() => setActive(1)}>
Botao 1
</button>

<button onClick={() => setActive(2)}>
Botao 2
</button>

<div>

{active === 1 ? (
    
    <>   
    <p>{botao2}  </p>

    <input
  value={botao1}
  onChange={(e) => setBotao1(e.target.value)}
/>
</>
) : (

<>
<p> {botao1} </p>

<input
value= {botao2}
onChange ={(e) => setBotao2(e.target.value)}>
</input>

</>
)}
</div>
</div>
 )
}

