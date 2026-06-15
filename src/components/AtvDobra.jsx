import { useState } from "react";

export default function AtvDobra({ numero }) {
  const [valor, setValor] = useState(numero);

  return (
    <div>
      <p>{valor}</p>
      <button type="button" onClick={() => setValor((prev) => prev * 2)}>
        Dobrar
      </button>
    </div>
  );
}

