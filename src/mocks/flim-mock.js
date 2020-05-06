import {MAX_DATE, MIN_DATE} from '../consts';
import {
  generateEntityMock,
  generateRandomArray,
  generateRandomFloat,
  generateRandomInteger,
  generateRandomYear
} from '../utils/helpers';
import {generateComment} from './comments-mock';

export const MOVIE_TITLES = [
  `Made for Each Other`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Sagebrush Trail`,
  `Santa Claus Conquers the Martians`,
  `The Dance of Life`,
  `The Great Flamarion`,
  `The Man with the Golden Arm`,
];

export const MOVIE_POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

export const MOVIE_DESCRIPTION_TEMPLATES = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

export const MOVIE_GENRES = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
  `Film-Noir`
];

export const DIRECTORS = [
  `Christopher Nolan`,
  `Stanley Kubrick`,
  `Andrey Tarkovsky`,
  `Guy Ritchie`,
  `Quentin Tarantino`
];

export const COUNTRIES = [`USA`, `France`, `Germany`, `Italy`, `Russia`];

export const ACTORS = [
  `Ryan Gosling`,
  `Emma Stone`,
  `Christian Bale`,
  `Emma Watson`,
  `Daniel Craig`,
  `Eva Green`,
  `Ewan McGregor`,
  `Uma Thurman`,
  `Samuel L. Jackson`,
  `Tom Holland`,
  `Scarlett Johanson`
];

export const AGE_RATING = [`6+`, `12+`, `0+`, `18+`];

export const generateMovie = () => {
  return {
    title: MOVIE_TITLES[generateRandomInteger(0, 6)],
    originalTitle: MOVIE_TITLES[generateRandomInteger(0, 6)],
    poster: MOVIE_POSTERS[generateRandomInteger(0, 6)],
    description: generateRandomArray(MOVIE_DESCRIPTION_TEMPLATES, generateRandomInteger(1, 5)),
    genre: MOVIE_GENRES[generateRandomInteger(0, 6)],
    rating: generateRandomFloat(1, 10),
    releaseDate: generateRandomYear(MIN_DATE, MAX_DATE),
    duration: `${generateRandomInteger(1, 2)}h ${generateRandomInteger(0, 59)}m`,
    comments: generateEntityMock(generateRandomInteger(1, 4), generateComment),
    country: COUNTRIES[generateRandomInteger(0, COUNTRIES.length)],
    director: DIRECTORS[generateRandomInteger(0, DIRECTORS.length)],
    writers: [],
    actors: generateRandomArray(ACTORS, generateRandomInteger(0, ACTORS.length)),
    fullDescription: ``,
    ageRating: AGE_RATING[generateRandomInteger(0, 3)],
  };
};
