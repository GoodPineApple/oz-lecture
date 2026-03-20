// Array.map()
// 배열을 다른 배열로 매핑할 때 사용
const prepareMovies = () => {
  const movies = [];
  let movie1 = {
    title: "쇼생크 탈출",
    director: "프랭크 다라본트",
    year: 1994,
    genre: "드라마",
  };
  let movie2 = {
    title: "인셉션",
    // director: "크리스토퍼 놀란",
    year: 2010,
    genre: "액션, SF",
  };
  let movie3 = {
    title: "기생충",
    // director: "봉준호",
    year: 2019,
    genre: "드라마, 스릴러",
  };

  movies.push(movie3);
  movies.push(movie1);
  movies.push(movie2);
  movies.push({
    title: "어벤져스: 엔드게임",
    director: "안소니 루소, 조 루소",
    year: 2019,
    genre: "액션, 어드벤처, SF",
  });
  return movies;
};

const movies = prepareMovies(); // day12 movie-collection
console.log(movies);

// title만 뽑아서 확인하고 싶다.
const titles = [];
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  const title = movie.title;
  titles.push(title);
}
console.log(titles);

const titlesByMap = movies.map((movie) => {
  const title = movie.title;
  return title;
});
console.log(titlesByMap);

const titlesByMapShort = movies.map((movie) => movie.title);
console.log(titlesByMapShort);

// {title, director}만 있는 배열을 확인하고 싶다.
// for문
const infoArr = [];
for (const movie of movies) {
  infoArr.push({
    title: movie.title,
    director: movie.director,
  });
}
for (const movie of movies) {
  const { title, director } = movie;
  infoArr.push({
    title, // title: title
    director, // director: director
  });
}
for ({ title, director } of movies) {
  infoArr.push({ title, director });
}
console.log(infoArr);

// map
const infoArrByMap = movies.map((movie) => {
  return {
    title: movie.title,
    director: movie.director,
  };
});

const infoArrByMap2 = movies.map(({ title, director }) => {
  return { title, director };
});
console.log(infoArrByMap2);
