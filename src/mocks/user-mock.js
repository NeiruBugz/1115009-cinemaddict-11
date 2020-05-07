import {generateRandomInteger} from '../utils/helpers';

export const generateUserLevel = () => {
  const level = generateRandomInteger(0, 50);
  const computeLevel = (score) => {
    if (score >= 1 && score <= 10) {
      return `Novice`;
    } else if (score >= 11 && score <= 20) {
      return `Fan`;
    } else if (score >= 21) {
      return `Movie Bluff`;
    } else {
      return ``;
    }
  };

  return {
    userLevel: computeLevel(level),
  };
};
