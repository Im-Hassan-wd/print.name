const button = document.querySelector('button');
const name = document.querySelector('p.name');

button.addEventListener('click', () => {
  name.textContent = 'Taiwo Hassan';
  name.style.fontWeight = 'bold';
})
