import {
  getUserLeverTemplate,
  getNavigationTemplate,
  getStatisticsTemplate,
  getSortTemplate,
  getFilmsTemplate,
} from './components';

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const render = (container, markup, position = `beforeEnd`) => {
  container.insertAdjacentHTML(position, markup);
};

render(headerContainer, getUserLeverTemplate());
render(mainContainer, getNavigationTemplate());
render(mainContainer, getStatisticsTemplate());
render(mainContainer, getSortTemplate());
render(mainContainer, getFilmsTemplate());
// render(document.body, getFilmDetailsPopupTemplate());
