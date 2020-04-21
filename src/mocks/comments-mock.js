import {COMMENT_AUTHOR, COMMENT_EMOJIES, COMMENT_SENNTENCES} from '../consts';
import {generateRandomArray, generateRandomDate, generateRandomInteger} from '../utils/helpers';

const generateComment = () => {
  return {
    author: COMMENT_AUTHOR[generateRandomInteger(0, 5)],
    comment: generateRandomArray(COMMENT_SENNTENCES, generateRandomInteger(0, 5)),
    emoji: COMMENT_EMOJIES[generateRandomInteger(0, 3)],
    date: generateRandomDate(),
  };
};

export const generateComments = (amount) => {
  return new Array(amount).fill({}).map(generateComment);
};
