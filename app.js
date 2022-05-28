function calculate() {
  const currencyOne = currencyEl_one.value;
  const currencyTwo = currencyEl_two.value;

  fetch(
    `https://free.currconv.com/api/v7/convert?q=${currencyOne}_${currencyTwo},${currencyTwo}_${currencyOne}&compact=ultra&apiKey=YOUR_API_KEY`
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