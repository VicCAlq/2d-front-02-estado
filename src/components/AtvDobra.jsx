/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <div> contendo um <p>, que vai exibir este número recebido como argumento, 
e um <button>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import { useState } from 'react'

export default function AtvDobra({numero}) {
const [valor, setValor] = useState(numero)
function dobrar() {
    setValor(valor * 2)
  }


 return(
    <div style={estilo.view}>
         <p style={estilo.texto}>
         {valor}
         </p>
      <div style={estilo.viewBotoes}>
         <button style={estilo.botao} onClick={() => dobrar()}>
           <p style={estilo.textoBotao}> dobrar </p>
         </button>
      </div>
 </div>
 )
}
