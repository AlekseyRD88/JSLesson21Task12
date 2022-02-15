export function squaredNumbers() {
  let searchForNumber = document.querySelectorAll('.number');
  searchForNumber.forEach((x) => x.dataset.number * x.dataset.number);
  let liDomElement = document.querySelectorAll('li').forEach((x, i) = x.setAttribute('data-squared-number', 'searchForNumber[i]'));
}
