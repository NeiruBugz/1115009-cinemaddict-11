import {MOVIE_TITLES, MOVIE_POSTERS, MOVIE_DESCRIPTION_TEMPLATES, MOVIE_GENRES, MIN_DATE, MAX_DATE} from '../consts';
import {generateRandomFloat, generateRandomInteger, generateRandomYear} from '../utils/helpers';

const generateRandomArray = (source, itemsAmount) => {
  return source.slice(0).sort(() => Math.random() - 0.5).slice(0, itemsAmount);
};

const generateMovie = () => {
  return {
    title: MOVIE_TITLES[generateRandomInteger(0, 6)],
    poster: MOVIE_POSTERS[generateRandomInteger(0, 6)],
    description: generateRandomArray(MOVIE_DESCRIPTION_TEMPLATES, generateRandomInteger(1, 5)),
    genre: MOVIE_GENRES[generateRandomInteger(0, 6)],
    rating: generateRandomFloat(1, 10),
    year: generateRandomYear(MIN_DATE, MAX_DATE)
  };
};

export const generateMoviesMock = (filmsAmount) => {
  return new Array(filmsAmount).fill({}).map(generateMovie);
};
