import getMovies from './getMovies.js';
import { getLikes } from './likesApi.js';
import { getComments } from './commentsApi.js';

const movieArray = await getMovies();

const allLikes = await getLikes();

// function

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

const findLikes = (id) => {
  const result = allLikes.find((like) => like.item_id === id);
  return result?.likes ?? 0;
};


const commentsArray = await getAllComments(allIdsArray);


export {movieArray,findLikes,commentsArray}