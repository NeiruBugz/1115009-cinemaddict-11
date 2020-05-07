import FilmCard from './components/film-card';
import FilmDetailsPopup from './components/film-details-popup';
import FilmsList from './components/films-list';
import ShowMoreButton from './components/show-more-button';
import Films from './components/films';
import UserLevel from './components/user-level';
import Navigation from './components/navigation';
import Sort from './components/sort';


import {generateEntityMock} from './utils/helpers';
import {generateMovie} from './mocks/flim-mock';
import {generateNavigationItems} from './mocks/navigation-mock';
import {generateUserLevel} from './mocks/user-mock';

import {
  MOVIES_AMOUNT,
} from './consts';
import Statistics from './components/statistics';
import {render} from './utils/renderHelpers';
import Page from './controllers/page';

const documentBody = document.body;
const header = documentBody.querySelector(`.header`);
const main = documentBody.querySelector(`.main`);

const movies = generateEntityMock(MOVIES_AMOUNT, generateMovie);

render(header, new UserLevel(generateUserLevel()));

const navigation = generateNavigationItems();
render(main, new Navigation(navigation));
render(main, new Sort());
render(main, new Statistics());

const films = new Films();
const pageController = new Page(films);
render(main, films);
pageController.render(movies);

