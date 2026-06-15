import { useState } from "react";

// Componente AtvTelefoneSemFio
export default function AtvTelefoneSemFio() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [active, setActive] = useState(null); // 'b1' | 'b2' | null

  const estilo = {
    container: { display: "flex", flexDirection: "column", gap: 12 },
    buttonsRow: { display: "flex", gap: 8 },
    button: { padding: "8px 12px", cursor: "pointer" },
    lower: { marginTop: 8 },
    input: { padding: 6, width: 240 }
  };

  return (
    <div style={estilo.container}>
      <div style={estilo.buttonsRow}>
        <button
          type="button"
          style={estilo.button}
          onClick={() => setActive("b1")}
        >
          Botão 1
        </button>

        <button
          type="button"
          style={estilo.button}
          onClick={() => setActive("b2")}
        >
          Botão 2
        </button>
      </div>

      <div style={estilo.lower}>
        {active === "b1" && (
          <div>
            <p>{input2}</p>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Digite texto (Botão 1)"
              style={estilo.input}
            />
          </div>
        )}

        {active === "b2" && (
          <div>
            <p>{input1}</p>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Digite texto (Botão 2)"
              style={estilo.input}
            />
          </div>
        )}
      </div>
    </div>
  );
}