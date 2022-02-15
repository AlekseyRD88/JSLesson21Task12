export function squaredNumbers() {
  const searchForNumber = document.querySelectorAll('.number');
  searchForNumber.map((x) => x.dataset.number);
  searchForNumber.map((x) => x * x);
  let newAttribute = document.querySelectorAll('li').map((liDomElement, i) => liDomElement.setAttribute('data-squared-number', 'searchForNumber[i]'));
}
