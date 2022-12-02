import { postLike } from './likesApi.js';
import popupWindow from './commentsPopupWindow.js';

//* Begining of function

const showItems = (movie, likes, closeModal, popupContainer) => {
  let currentLikes = likes;
  //    main card body
  const itemDisplay = document.createElement('div');
  itemDisplay.classList.add('movie-card');

  // image div
  const movieCards = document.createElement('div');
  movieCards.classList.add('movie-image-div');
  const Img = document.createElement('img');
  Img.setAttribute('src', movie.imgMediumUrl);
  Img.setAttribute('alt', `image of ${movie.name}`);
  // Img.setAttribute('class', 'movie-img');
  movieCards.append(Img);

  itemDisplay.append(movieCards);

  // description div
  const cardDescription = document.createElement('div');
  cardDescription.classList.add('card-description');

  const tvTitle = document.createElement('h3');
  tvTitle.textContent = movie.name;
  cardDescription.append(tvTitle);

  const likeIconDiv = document.createElement('div');
  likeIconDiv.classList.add('like-div');

  // like button
  const likeBtn = document.createElement('button');
  likeBtn.classList.add('like-button');
  likeBtn.setAttribute('id', 'like-button');

  likeBtn.dataset.showId = movie.showId;

  const like = document.createElement('i');
  like.classList.add('fa-regular', 'fa-heart');
  likeBtn.append(like);
  likeIconDiv.append(likeBtn);

  // like Count
  const likeCount = document.createElement('span');
  likeCount.textContent = `${currentLikes} likes`;
  likeIconDiv.append(likeCount);

  //* increment number of likes
  likeBtn.addEventListener('click', () => {
    currentLikes += 1;
    likeCount.textContent = `${currentLikes}  likes`;
    postLike(movie.showId);
  });

  cardDescription.appendChild(likeIconDiv);
  // comment Button
  const commentBtn = document.createElement('button');
  commentBtn.setAttribute('id', 'comment-button');
  // commentBtn.setAttribute('comment-button', `${data.id}`);

  commentBtn.dataset.id = movie.index;
  commentBtn.innerHTML = 'Comments';

  commentBtn.addEventListener('click', () => {
    const popup = popupWindow(movie,movie.index, closeModal);
    popupContainer.append(popup);
  });
  cardDescription.append(commentBtn);

  itemDisplay.appendChild(cardDescription);

  return itemDisplay;
};

export default showItems;