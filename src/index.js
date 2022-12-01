import './style.css';
// import './css/pop-window.css'

import popupWindow from './modules/commentsPopupWindow.js';

import getMovies from './modules/getMovies.js';

const popupContainer = document.getElementById('popup-container');

const movieArray = await getMovies();

function closeModal() {
  popupContainer.innerHTML = '';
}

const popup = popupWindow(movieArray[2], closeModal);

popupContainer.append(popup);