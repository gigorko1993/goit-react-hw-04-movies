const API_KEY = 'af9e8dfd0d4cc12b9cf5fab27869f304';

export const fetchTrendMovies = function () {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        new Error('Some server issue seems to have occured. Please try again'),
      );
    }
  });
};
