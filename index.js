export function squaredNumbers() {
  let searchForNumber = document.querySelectorAll('.number');
  let newArr = searchForNumber.dataset.number.forEach((x) => x * x);
  li.setAttribute('data-squared-number', [...newArr]);
}
