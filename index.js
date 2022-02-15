export function squaredNumbers() {
  let searchForNumber = document.querySelectorAll('.number');
  searchForNumber.forEach((x) => x.dataset.number);
  searchForNumber.forEach((x) => x * x);
  let newAttribute = document.querySelectorAll('li').forEach((liDomElement, i) => liDomElement.setAttribute('data-squared-number', 'searchForNumber[i]'));
}
