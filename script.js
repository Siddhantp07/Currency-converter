const exchangeRates = {
  USD: { EUR: 0.85, GBP: 0.75, INR: 74 },
  EUR: { USD: 1.18, GBP: 0.88, INR: 87 },
  GBP: { USD: 1.33, EUR: 1.14, INR: 99 },
  INR: { USD: 0.013, EUR: 0.012, GBP: 0.01 }
};

document.getElementById('convertBtn').addEventListener('click', () => {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (amount === '' || isNaN(amount)) {
    alert('Please enter a valid amount');
    return;
  }

  let convertedAmount;

  if (fromCurrency === toCurrency) {
    convertedAmount = amount;
  } else {
    const rate = exchangeRates[fromCurrency][toCurrency];
    convertedAmount = amount * rate;
  }

  document.getElementById('result').innerText = convertedAmount.toFixed(2);
});
