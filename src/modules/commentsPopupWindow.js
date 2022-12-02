import countComments from './commentCounter.js';
import { postComment } from './commentsApi.js';
import getDate from './getDate.js';

import validateComment from './validateComment.js';

const createLiComments = (comments) => {
  const fragment = document.createDocumentFragment();

  if (comments.length === 0) {
    return '';
  }
  comments.reverse().forEach((comment) => {
    const li = document.createElement('li');
    li.textContent = `${comment.creation_date}: ${comment.username}--${comment.comment}`;
    fragment.append(li);
  });

  return fragment;
};

const createOneLiComment = (comment) => {
  const li = document.createElement('li');
  li.textContent = `${getDate()}:${comment}`;
  return li;
};

const popupWindow = ({
  showId, imgMediumUrl, imgAlt, name, season, episode, summary,
}, commentsArray = [], closePopup) => {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('popup-window');

  // start close button

  const closeButton = document.createElement('button');
  closeButton.classList.add('button-default', 'close-button');
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fa-solid', 'fa-xmark', 'close-icon-fa');
  closeButton.appendChild(closeIcon);

  // eventListener to close Popup Window
  closeButton.addEventListener('click', () => {
    closePopup();
  });

  // end close button

  // start image div
  const imgDiv = document.createElement('div');
  const imgElement = document.createElement('img');
  imgElement.classList.add('popup-image');
  imgElement.setAttribute('src', imgMediumUrl);
  imgElement.setAttribute('alt', imgAlt);
  imgDiv.appendChild(imgElement);
  // end image div

  // start show summary div
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title-div');

  const movieHeading = document.createElement('h3');
  movieHeading.textContent = name;

  const episodeHeading = document.createElement('h5');
  episodeHeading.textContent = episode;

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details-div');

  const seasonSpan = document.createElement('span');
  seasonSpan.textContent = `Season : ${season}`;

  const episodeSpan = document.createElement('span');
  episodeSpan.textContent = `Episode : ${episode}`;

  detailsDiv.append(seasonSpan, episodeSpan);

  titleDiv.append(movieHeading, episodeHeading, detailsDiv);

  const summaryDiv = document.createElement('div');
  summaryDiv.innerHTML = summary;
  summaryDiv.classList.add('summary-div');
  // end show descritption div

  // start display comments div
  const displayCommentsDiv = document.createElement('div');
  displayCommentsDiv.classList.add('display-comments');

  const commentTitleDiv = document.createElement('div');
  commentTitleDiv.classList.add('comment-title');
  const commentsHeading = document.createElement('h4');
  commentsHeading.textContent = 'Comments';

  const commentCountSpan = document.createElement('span');
  commentCountSpan.setAttribute('id', 'comment-count');

  commentsHeading.append(commentCountSpan);
  commentTitleDiv.append(commentsHeading);

  const commentsUL = document.createElement('ul');
  commentsUL.classList.add('comments-ul');

  //* createLiComments will return a fragment containing list items of commenst

  const comments = createLiComments(commentsArray);
  commentsUL.append(comments);

  const updateCommentCount = () => {
    const commentCount = countComments(commentsUL);
    commentCountSpan.textContent = `(${commentCount})`;
  };

  updateCommentCount();
  displayCommentsDiv.append(commentTitleDiv, commentsUL);
  // end display comments div

  // start New Comments div
  const newCommentsDiv = document.createElement('div');
  newCommentsDiv.classList.add('new-comments');

  const newCommentHeading = document.createElement('h4');
  newCommentHeading.textContent = 'Add A Comment';

  const commentsForm = document.createElement('form');
  commentsForm.classList.add('comments-form');
  commentsForm.setAttribute('action', '');

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('required', '');
  nameInput.setAttribute('placeholder', 'Your Name');

  const commentTextArea = document.createElement('textarea');
  commentTextArea.setAttribute('required', '');
  commentTextArea.setAttribute('placeholder', 'Your Comments');
  commentTextArea.setAttribute('cols', '25');
  commentTextArea.setAttribute('rows', '3');

  const commentButton = document.createElement('button');
  // commentButton.setAttribute('type','submit')
  // commentButton.setAttribute('value','Comment')
  commentButton.classList.add('comment-button', 'button-85');
  commentButton.innerHTML = 'Comment';

  commentsForm.append(nameInput, commentTextArea, commentButton);

  newCommentsDiv.append(newCommentHeading, commentsForm);
  // end new Comments div

  // commentsForm attach EventListener
  commentsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const comment = e.target.elements[1].value;
    e.target.elements[0].value = '';
    e.target.elements[1].value = '';
    const data = validateComment(name, comment);
    postComment({ showId, name, comment });
    const liComment = createOneLiComment(data);
    commentsUL.prepend(liComment);
    updateCommentCount();
  });

  mainDiv.append(closeButton, imgDiv, titleDiv, summaryDiv, displayCommentsDiv, newCommentsDiv);
  return mainDiv;
};

export default popupWindow;