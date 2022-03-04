import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [cardNumberInput, setCardNumberInput] = useState("");
  return (
    <div className='container'>
      <Card cardNumberInput={cardNumberInput} />
      <form action=''>
        <label htmlFor=''>
          Numéro de carte
          <input type='text' aria-label="Numéro de carte" onChange={ (e) => setCardNumberInput(e.target.value) } />
        </label>
      </form>
    </div>
  );
};

export default App;
