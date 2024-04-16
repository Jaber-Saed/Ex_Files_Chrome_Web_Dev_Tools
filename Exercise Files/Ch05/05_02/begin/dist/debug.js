document.querySelector('button.group:nth-child(4)').addEventListener('click', function() {
  const qty = document.querySelector('input[type="number"]').value;
  if (qty > 10) {
    console.log(qty);
  } else if (qty > 10 && qty < 20) {
    console.warn(qty);
  } else if (qty >= 20) {
    console.error(qty);
  }
});
