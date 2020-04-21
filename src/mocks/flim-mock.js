import {MOVIE_TITLES, MOVIE_POSTERS, MOVIE_DESCRIPTION_TEMPLATES, MOVIE_GENRES, MIN_DATE, MAX_DATE} from '../consts';
import {generateRandomArray, generateRandomFloat, generateRandomInteger, generateRandomYear} from '../utils/helpers';
import {generateComments} from './comments-mock';

const generateMovie = () => {
  return {
    title: MOVIE_TITLES[generateRandomInteger(0, 6)],
    poster: MOVIE_POSTERS[generateRandomInteger(0, 6)],
    description: generateRandomArray(MOVIE_DESCRIPTION_TEMPLATES, generateRandomInteger(1, 5)),
    genre: MOVIE_GENRES[generateRandomInteger(0, 6)],
    rating: generateRandomFloat(1, 10),
    year: generateRandomYear(MIN_DATE, MAX_DATE),
    duration: `${generateRandomInteger(1, 2)}h ${generateRandomInteger(0, 59)}m`,
    comments: generateComments(generateRandomInteger(1, 4)).length,
  };
};

export const generateMoviesMock = (filmsAmount) => {
  return new Array(filmsAmount).fill({}).map(generateMovie);
};
