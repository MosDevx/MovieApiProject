import getMovies from './getdata.js';

const countedMovies = document.querySelector('.num-of-movies');

const counterFunction = async () => {
  const moviesNumber = await getMovies();
  const total = moviesNumber.length;
  countedMovies.textContent = `Movie Shows(${total})`;
  return total;
};