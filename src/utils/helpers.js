export const generateRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
export const generateRandomFloat = (min, max) => (min + Math.random() * (max + 1 - min)).toFixed(1);
export const generateRandomYear = (minDate, maxDate) =>
  new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())).getFullYear();
export const generateRandomArray = (source, itemsAmount) => {
  return source.slice(0).sort(() => Math.random() - 0.5).slice(0, itemsAmount);
};
export const generateRandomDate = () => {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};
