document.querySelector('button.group:nth-child(4)').addEventListener('click', function() {
  const qty = document.querySelector('input[type="number"]').value;
  if (qty < 10) {
    console.log(`Standard quantity: ${qty}`);
  } else if (qty >= 10 && qty < 20) {
    console.warn(`Large quantity: ${qty}`);
  } else {
    console.error(`Unrealistic quantity: ${qty}`);
  }
});
