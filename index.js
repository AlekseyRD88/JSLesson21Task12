export function squaredNumbers() {
  let searchForNumber = document.querySelector('.number');
  let squaredNumber = searchForNumber.dataset.number;
  squaredNumber = squaredNumber * squaredNumber;
  document.querySelector('li').setAttribute('data-squaredNumber', 'squaredNumber');
}
