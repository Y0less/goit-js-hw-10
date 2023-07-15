import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds().then(data => renderCollection(data));
refs.breedSelect.addEventListener('change', onSelect);

function onSelect() {
  fetchCatByBreed(refs.breedSelect.value).then(data => renderCatDescr(data));
}

function renderCollection(data) {
  refs.breedSelect.insertAdjacentHTML(
    'beforeend',
    data
      .map(({ name, id }) => `<option value="${id}">${name}</option>`)
      .join('')
  );
}

function renderCatDescr(data) {
  const { name, description, temperament } = data[0].breeds[0];
  refs.catInfo.innerHTML =
    ('beforeend',
    `<img src="${data[0].url}" alt="" width="300">
        <class="js-cat-descr">
  <h1>${name}</h1>
  <p>${description}</p>
  <p><b>Temperament: </b>${temperament}</p>`);
}
