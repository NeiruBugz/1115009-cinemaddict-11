import {getUserLeverTemplate} from './components/user-level';
import {getNavigationTemplate} from './components/navigation';
import {getStatisticsTemplate} from './components/statistics';
import {getSortTemplate} from './components/sort';
import {getFilmsTemplate} from './components/films-list';
// import {getFilmDetailsPopupTemplate} from './components/film-details-popup';
import {generateMovie} from './mocks/flim-mock';
import {generateUserLevel} from './mocks/user-mock';

import {generateEntityMock} from './utils/helpers';
import {MOVIES_AMOUNT} from './consts';

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const render = (container, markup, position = `beforeEnd`) => {
  container.insertAdjacentHTML(position, markup);
};

render(headerContainer, getUserLeverTemplate(generateUserLevel()));
render(mainContainer, getNavigationTemplate());
render(mainContainer, getStatisticsTemplate());
render(mainContainer, getSortTemplate());
render(mainContainer, getFilmsTemplate(generateEntityMock(MOVIES_AMOUNT, generateMovie)));
// render(document.body, getFilmDetailsPopupTemplate(generateMovie()));
