const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEl_two.value;

  // `https://free.currconv.com/api/v7/convert?q=${currencyOne}_${currencyTwo},${currencyTwo}_${currencyOne}&compact=ultra&apiKey=9ddf53abc306520238e4`

  // dataArray = Object.keys(data);
  // console.log(dataArray);
  // dataArray = Object.values(data);
  // console.log(dataArray);
  // dataArray = Object.entries(data);
  // console.log(dataArray);
  

  fetch(
    `https://free.currconv.com/api/v7/convert?q=${currencyOne}_${currencyTwo},${currencyTwo}_${currencyOne}&compact=ultra&apiKey=9ddf53abc306520238e4`
  )
    .then((res) => res.json())
    .then((data) => {
      // {USD_INR: 72.814699, INR_USD: 0.013737}
      dataArray = Object.values(data);

      // console.log(dataArray[0]); rate of 1st currency => 2nd currency
      // console.log(dataArray[1]); rate of 2nd currency => 1st currency

      const rate = dataArray[0];
      
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });

  
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
