const { useState, useMemo } = React;

const goodMapping = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
  UGX: 3610.22,
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

const baseAmountInUSD = useMemo(
  () =>{
    return amount / goodMapping[from];
  }, [amount, from]
);

const convertedAmount = baseAmountInUSD * goodMapping[to];

 return (
   <div id="converter-container">
   <h1>Currency Converter</h1>
   <h3><span class="money">{from}</span> to <span class="money">{to}</span> Conversion</h3>

   <input 
   class="money"
   type="number"
   value={amount} 
   onChange={(e) => setAmount(parseFloat(e.target.value))} 
   />


    <p>Start Currency:</p>
   <select value={from} onChange={(e) => setFrom(e.target.value)}>
     {Object.keys(goodMapping).map((currency) => (
          <option class="money" key={currency}>{currency}</option>
        ))}
   </select>


   <p>Target Currency:</p>
   <select value={to} onChange={(e) => setTo(e.target.value)}>
     {Object.keys(goodMapping).map((currency) => (<option class="money" key={currency}>{currency}</option>))}
   </select>


   <h3 id="converted-amount">Converted Amount: <span>{convertedAmount.toFixed(2)} {to}</span></h3>
   </div>
 );
}