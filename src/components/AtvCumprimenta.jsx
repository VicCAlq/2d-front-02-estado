/*
[ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <div>, onde dentro dela haverá um <p> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <p> deve haver um <input> onde o usuário poderá digitar seu nome. 
Ao lado deste <input> deve haver um <button>, que ao ser apertado vai fazer um <p> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <input>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/
import { useState } from "react";
export default function AtvCumprimenta () {

    const [nome, setNome] = useState("")
    const [mostrar, setMostrar] = useState (false)
 
    const mostrarNome = () => {
setMostrar(true) 
   }
    
return (

<div>

<p>Olá, qual seu nome?</p>

 <div style={{display: "flex" , gap: "10px", justifyContent: "center"}}>  
    
<input
type = "text"
value = {nome}
onChange = {(e) => setNome(e.target.value)}
placeholder="Digite seu nome"
>
  
   </input>

  <button onClick={mostrarNome}>Salvar</button>
  
  </div>

     {mostrar && <p>É um prazer lhe conhecer, {nome} </p>}


</div>



)


   }