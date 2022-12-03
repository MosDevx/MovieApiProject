const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-21&country=US';

function parseMovieData(dataArray) {
  const parsedArray = [];

  dataArray.forEach((movie, index) => {
    // console.log(movie);
    const {
      id, name, season, number,
      _embedded: { show: { name: showName, image: { medium }, summary } },
    } = movie;

    const show = {
      index,
      showId: id,
      name: showName,
      episodeName: name,
      season,
      episode: number,
      imgMediumUrl: medium,
     
      summary,
    };

    // console.log(show);
    parsedArray.push(show);
  });

  return parsedArray;
}

async function getMovies() {
  const response = await fetch(movieUrl);
  const data = await response.json();
  // console.log(data);
  return parseMovieData(data);
}

export default getMovies;
