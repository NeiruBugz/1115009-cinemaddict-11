import {MOVIE_TITLES, MOVIE_POSTERS, MOVIE_DESCRIPTION_TEMPLATES, MOVIE_GENRES} from '../consts';
import {generateRandomInteger} from "../utils/helpers";

const generateRandomArray = (source, itemsAmount) => {
  return source.slice(0).sort(() => Math.random() - 0.5).slice(0, itemsAmount);
};

const generateMovie = () => {
  return {
    title: MOVIE_TITLES[generateRandomInteger(0, 6)],
    poster: MOVIE_POSTERS[generateRandomInteger(0, 6)],
    description: generateRandomArray(MOVIE_DESCRIPTION_TEMPLATES, generateRandomInteger(1, 5)),
    genre: MOVIE_GENRES[generateRandomInteger(0, 6)]
  };
};

export const generateMoviesMock = (filmsAmount) => {
  return new Array(filmsAmount).fill({}).map(generateMovie);
};
