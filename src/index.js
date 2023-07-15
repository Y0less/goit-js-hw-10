import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
  head: document.querySelector('head'),
};

hideCollectionToogle();
errorToogle();

fetchBreeds()
  .then(data => (renderCollection(data), hideCollectionToogle()))
  .catch(error => (console.log(error), errorToogle()))
  .finally(() => loadingToogle());

refs.breedSelect.addEventListener('change', onSelect);

function onSelect() {
  refs.catInfo.innerHTML = '';
  loadingToogle();
  fetchCatByBreed(refs.breedSelect.value)
    .then(data => renderCatDescr(data))
    .catch(error => (console.log(error), errorToogle()))
    .finally(() => loadingToogle());
}

function renderCollection(data = []) {
  refs.breedSelect.insertAdjacentHTML(
    'beforeend',
    data
      .map(({ name, id }) => `<option value="${id}">${name}</option>`)
      .join('')
  );
}

function renderCatDescr(data = []) {
  const { name, description, temperament } = data[0].breeds[0];
  refs.catInfo.innerHTML =
    ('beforeend',
    `<img src="${data[0].url}" alt="" width="300">
        <div class="js-cat-descr">
  <h1>${name}</h1>
  <p>${description}</p>
  <p><b>Temperament: </b>${temperament}</p><div>`);
}

function loadingToogle() {
  refs.loader.classList.toggle('hidden');
}

function hideCollectionToogle() {
  refs.breedSelect.classList.toggle('hidden');
}

function errorToogle() {
  refs.error.classList.toggle('hidden');
}
