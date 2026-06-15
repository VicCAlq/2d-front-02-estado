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
  const [ladoAtivo, setLadoAtivo] = useState(null);
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");

  return (
    <div>
      {/* Botões */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setLadoAtivo(1)}>Botão 1</button>
        <button onClick={() => setLadoAtivo(2)}>Botão 2</button>
      </div>

      {/* Área de conteúdo */}
      <div style={{ marginTop: "20px" }}>
        {ladoAtivo === 1 && (
          <div>
            {/* Mostra o texto do outro */}
            <p>{texto2}</p>

            {/* Digita no 1 */}
            <input
              type="text"
              placeholder="Digite aqui..."
              value={texto1}
              onChange={(e) => setTexto1(e.target.value)}
            />
          </div>
        )}

        {ladoAtivo === 2 && (
          <div>
            {/* Mostra o texto do outro */}
            <p>{texto1}</p>

            {/* Digita no 2 */}
            <input
              type="text"
              placeholder="Digite aqui..."
              value={texto2}
              onChange={(e) => setTexto2(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}