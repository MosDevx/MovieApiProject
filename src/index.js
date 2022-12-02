import './style.css';
// import './css/pop-window.css'

import popupWindow from './modules/commentsPopupWindow.js';
import getMovies from './modules/getMovies.js';
import {
  getComments,
  postComments,
} from './modules/commentsApi.js';

const popupContainer = document.getElementById('popup-container');

const movieArray = await getMovies();

const showIdsArray = [];
movieArray.forEach((movie) => {
  showIdsArray.push(movie.showId);
});

console.log('ids', showIdsArray);

async function getAllComments(showIdsArray) {
  const allCommentsArray = [];
  const finallArray = [];
  let allArray = [];
  for (let index = 0; index < showIdsArray.length; index += 1) {
    const comment = getComments(showIdsArray[index]);
    allCommentsArray.push(comment);
  }
  allArray = await Promise.all(allCommentsArray);

  // for (let index = 0; index < showIdsArray.length; index += 1) {
  //     finallArray.push({showId: showIdsArray[index], comments: allArray[index]})
  // }

  return allArray;
}

const commentsArray = await getAllComments([1843173, 909,1843173]);
console.log('from Index', commentsArray);

function closeModal() {
  popupContainer.innerHTML = '';
}

const popup = popupWindow(movieArray[2],commentsArray[0], closeModal);

popupContainer.append(popup);