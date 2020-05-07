import {generateRandomArray, generateRandomDate, generateRandomInteger} from '../utils/helpers';

export const COMMENT_SENTENCES = [
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

export const COMMENT_EMOJIES = [
  `angry`,
  `puke`,
  `smile`,
  `sleeping`,
];

export const COMMENT_AUTHOR = [
  `Rachel`,
  `Ross`,
  `Monica`,
  `Joe`,
  `Chendler`,
  `Phoebe`
];

export const generateComment = () => {
  return {
    author: COMMENT_AUTHOR[generateRandomInteger(0, 5)],
    comment: generateRandomArray(COMMENT_SENTENCES, generateRandomInteger(1, 5)),
    emoji: COMMENT_EMOJIES[generateRandomInteger(0, 3)],
    date: generateRandomDate(),
  };
};
