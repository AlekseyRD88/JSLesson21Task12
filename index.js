export function squaredNumbers() {
  let searchForNumber = document.querySelectorAll('.number');
  searchForNumber.dataset.number;
  searchForNumber.forEach((x) => x * x);
  let addingAttribute = document.querySelectorAll('li');
  addingAttribute.setAttribute('data-squared-number', 'searchForNumber');
}
