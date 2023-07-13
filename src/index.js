import { fetchBreeds } from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds().then(data => renderCollection(data));

function renderCollection(data) {
  refs.breedSelect.insertAdjacentHTML(
    'beforeend',
    data
      .map(({ name, id }) => `<option value="${id}">${name}</option>`)
      .join('')
  );
}
