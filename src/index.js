import './style.css';
// import './css/pop-window.css'

import popupWindow from './modules/commentsPopupWindow.js';

const popupContainer = document.getElementById('popup-container');

const data = {
  imgSrc: '/src/assets/logo-pop.png',
  imgAlt: 'Movie name here',
  movieName: 'The Princess Bride',
  season: '1',
  episode: '2',
  description: 'Hello,My Name is Inigo Montoya, You killed my father,Prepare to die',
};
function closeModal() {
  popupContainer.innerHTML = '';
}

const popup = popupWindow(data, closeModal);

popupContainer.append(popup);