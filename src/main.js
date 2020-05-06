import UserLevel from './components/user-level';
import Statistics from './components/statistics';
import Sort from './components/sort';
import Navigation from './components/navigation';
import {getFilmsTemplate} from './components/films-list';
// import {getFilmDetailsPopupTemplate} from './components/film-details-popup';
import {generateMovie} from './mocks/flim-mock';
import {generateUserLevel} from './mocks/user-mock';

import {generateEntityMock} from './utils/helpers';
import {MOVIES_AMOUNT} from './consts';
import {generateNavigationItems} from './mocks/navigation-mock';

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

const sortElement = new Sort();
const statisticsElement = new Statistics();
const siteNavigation = new Navigation(generateNavigationItems());
const userProfile = new UserLevel(generateUserLevel());

const render = (container, markup, position = `beforeEnd`) => {
  container.insertAdjacentHTML(position, markup);
};

render(headerContainer, userProfile.getTemplate());
render(mainContainer, siteNavigation.getTemplate());
render(mainContainer, statisticsElement.getTemplate());
render(mainContainer, sortElement.getTemplate());
render(mainContainer, getFilmsTemplate(generateEntityMock(MOVIES_AMOUNT, generateMovie)));
// render(document.body, getFilmDetailsPopupTemplate(generateMovie()));
