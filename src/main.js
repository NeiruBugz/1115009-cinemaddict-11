import {getUserLeverTemplate} from './components/user-level';
import {getNavigationTemplate} from './components/navigation';
import {getStatisticsTemplate} from './components/statistics';
import {getSortTemplate} from './components/sort';
import {getFilmsTemplate} from './components/films';

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
