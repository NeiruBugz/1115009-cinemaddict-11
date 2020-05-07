export const RENDER_POSITION = {
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
};

export const generateRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const generateRandomFloat = (min, max) => {
  return (min + Math.random() * (max + 1 - min)).toFixed(1);
};

export const generateRandomYear = (minDate, maxDate) => {
  return new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())).getFullYear();
};

export const generateRandomArray = (source, itemsAmount) => {
  return source.slice(0).sort(() => Math.random() - 0.5).slice(0, itemsAmount);
};

export const generateRandomDate = () => {
  const date = new Date();
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

export const generateEntityMock = (amount, cb) => {
  return new Array(amount).fill({}).map(cb);
};

export const generateRandomBoolean = () => {
  const value = generateRandomInteger(0, 1);
  return value !== 0;
};

export const render = (container, DOMElement, position = RENDER_POSITION.BEFORE_END) => {
  switch (position) {
    case RENDER_POSITION.AFTER_BEGIN:
      container.prepend(DOMElement);
      break;
    case RENDER_POSITION.BEFORE_END:
      container.append(DOMElement);
      break;
  }
};

export const createElement = (template) => {
  const element = document.createElement(`div`);
  const cleanedHTML = template.trim();
  element.innerHTML = cleanedHTML;

  return element.firstChild;
};
