import Films from './components/films';
import UserLevel from './components/user-level';
import Navigation from './components/navigation';

import Page from './controllers/page';

import {generateEntityMock} from './utils/helpers';
import {generateMovie} from './mocks/flim-mock';
import {generateNavigationItems} from './mocks/navigation-mock';
import {generateUserLevel} from './mocks/user-mock';

import {MOVIES_AMOUNT} from './consts';
import {render} from './utils/renderHelpers';

const documentBody = document.body;
const header = documentBody.querySelector(`.header`);
const main = documentBody.querySelector(`.main`);

const movies = generateEntityMock(MOVIES_AMOUNT, generateMovie);

render(header, new UserLevel(generateUserLevel()));

const navigation = generateNavigationItems();
render(main, new Navigation(navigation));
// render(main, new Statistics());

const films = new Films();
const pageController = new Page(films);
render(main, films);
pageController.render(movies);

