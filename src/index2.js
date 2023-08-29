import './style.css';
// import './css/pop-window.css'

import popupWindow from './modules/commentsPopupWindow.js';
import getMovies from './modules/getMovies.js';
import {
  getComments,

} from './modules/commentsApi.js';

const popupContainer = document.getElementById('popup-container');

const movieArray = await getMovies();

const allIdsArray = [];
movieArray.forEach((movie) => {
  allIdsArray.push(movie.showId);
});

async function getAllComments(showIdsArray) {
  const allCommentsArray = [];

  let allArray = [];
  for (let index = 0; index < showIdsArray.length; index += 1) {
    const comment = getComments(showIdsArray[index]);
    allCommentsArray.push(comment);
  }
  allArray = await Promise.all(allCommentsArray);

  return allArray;
}

const commentsArray = await getAllComments(allIdsArray);

function closeModal() {
  popupContainer.innerHTML = '';
}

const popup = popupWindow(movieArray[2], commentsArray[2], closeModal);

popupContainer.append(popup);