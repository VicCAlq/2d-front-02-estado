import { useState } from "react";

export default function AtvMudaConteudo() {
  const [mode, setMode] = useState(null); // 'page' | 'boxes' | null

  const estilo = {
    container: { display: "flex", flexDirection: "column", gap: 12 },
    buttonsRow: { display: "flex", gap: 8 },
    button: { padding: "8px 12px", cursor: "pointer" },
    lower: { marginTop: 8 },
    boxesRow: { display: "flex", gap: 8 },
    box: { width: 200, height: 200 }
  };

  return (
    <div style={estilo.container}>
      <div style={estilo.buttonsRow}>
        <button type="button" style={estilo.button} onClick={() => setMode("page")}>
          Mostrar página
        </button>

        <button type="button" style={estilo.button} onClick={() => setMode("boxes")}>
          Mostrar boxes
        </button>
      </div>

      <div style={estilo.lower}>
        {mode === "page" && <p>Página em construção</p>}

        {mode === "boxes" && (
          <div style={estilo.boxesRow}>
            <div style={{ ...estilo.box, backgroundColor: "purple" }} />
            <div style={{ ...estilo.box, backgroundColor: "teal" }} />
            <div style={{ ...estilo.box, backgroundColor: "orange" }} />
          </div>
        )}
      </div>
    </div>
  );
}

