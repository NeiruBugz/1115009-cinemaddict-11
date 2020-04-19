export const generateRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export const generateRandomFloat = (min, max) => (min + Math.random() * (max + 1 - min)).toFixed(1);
export const generateRandomYear = (minDate, maxDate) =>
  new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())).getFullYear();
