// import getLikes from './modules/involvment.js'
import showItems from './modules/display.js';
import { movieArray, findLikes } from './modules/initializer.js';
import spaNavigation from './modules/spa-navigation.js';

import './style.css';

const mainSection = document.getElementById('main-section');
const popupContainer = document.getElementById('popup-section');

function closeModal() {
  popupContainer.innerHTML = '';
}

movieArray.forEach((movie) => {
  const likes = findLikes(movie.showId);
  const card = showItems(movie, likes, closeModal, popupContainer);
  mainSection.append(card);
});

spaNavigation();