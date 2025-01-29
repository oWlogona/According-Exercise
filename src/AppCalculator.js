import { useState } from "react";

function AppCalculator() {
  const [bill, setBill] = useState(0);
  const [yPer, setYPer] = useState(0);
  const [fPer, setFPer] = useState(0);

  const tip = bill * ((yPer + fPer) / 2 / 100);

  function clearBill() {
    setBill(0);
    setYPer(0);
    setFPer(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <YourInvoice per={yPer} setPer={setYPer} />
      <FriendsInvoice per={fPer} setPer={setFPer} />
      <>
        {bill > 0 && (
          <BillDashboard bill={bill} tip={tip} clearBill={clearBill} />
        )}
      </>
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <input
        type="number"
        value={bill}
        placeholder="Enter bill, please"
        id="bill"
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function YourInvoice({ per, setPer }) {
  return (
    <div>
      <label for="yInvoice">How did you like the service?</label>
      <select value={per} onChange={(e) => setPer(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FriendsInvoice({ per, setPer }) {
  return (
    <div>
      <label>How did your friend like the service?</label>
      <select value={per} onChange={(e) => setPer(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function BillDashboard({ bill, tip, clearBill }) {
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h3>
      <button onClick={clearBill}>Clear bill</button>
    </div>
  );
}

export default AppCalculator;
