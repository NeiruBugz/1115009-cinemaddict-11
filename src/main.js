import FilmCard from './components/film-card';
import FilmDetailsPopup from './components/film-details-popup';
import FilmsList from './components/films-list';
import ShowMoreButton from './components/show-more-button';
import Films from './components/films';
import UserLevel from './components/user-level';
import Navigation from './components/navigation';
import Sort from './components/sort';


import {generateEntityMock} from './utils/helpers';
import {generateMovie, MOVIE_LISTS} from './mocks/flim-mock';
import {generateNavigationItems} from './mocks/navigation-mock';
import {generateUserLevel} from './mocks/user-mock';

import {
  COMMENTED_MOVIES_AMOUNT, ESC_KEY,
  MOVIES_AMOUNT,
  ON_LOAD_MOVIES_AMOUNT,
  ON_START_MOVIES_AMOUNT,
  RATED_MOVIES_AMOUNT
} from './consts';
import Statistics from './components/statistics';
import {render} from './utils/renderHelpers';

const documentBody = document.body;
const header = documentBody.querySelector(`.header`);
const main = documentBody.querySelector(`.main`);

const renderFilmCard = (filmCardContainer, movie) => {
  const filmCardElement = new FilmCard(movie);
  const filmCard = filmCardElement.getElement();

  const filmDetailsPopup = new FilmDetailsPopup(movie);
  const filmDetailsPopupElement = filmDetailsPopup.getElement();

  const showPopup = () => {
    documentBody.appendChild(filmDetailsPopupElement);
    documentBody.classList.add(`hide-overflow`);
  };

  const removePopup = () => {
    documentBody.removeChild(filmDetailsPopupElement);
    documentBody.classList.remove(`hide-overflow`);
  };

  filmCardElement.setOpenPopupEvent(showPopup);

  filmDetailsPopup.setClosePopupEvent(() => {
    removePopup();
    documentBody.removeEventListener(`keydown`, removePopup);
  });
  documentBody.addEventListener(`keydown`, (evt) => {
    if (evt.key === ESC_KEY) {
      removePopup();
      documentBody.removeEventListener(`keydown`, removePopup);
    }
  });

  render(filmCardContainer, filmCard);
};

const renderFilms = (filmsComponent, movies) => {
  let showingMoviesAmount = ON_START_MOVIES_AMOUNT;
  const showingMovies = movies.slice(0, showingMoviesAmount);
  const ratedMovies = movies.slice().sort((a, b) => b.rating - a.rating).slice(0, RATED_MOVIES_AMOUNT);
  const commentedMovies = movies
    .slice()
    .sort((a, b) => b.comments.length - a.comments.length)
    .slice(0, COMMENTED_MOVIES_AMOUNT);
  const films = filmsComponent.getElement();

  const renderFilmsList = (list, moviesList) => {
    const filmsList = new FilmsList(list).getElement();
    render(films, filmsList);
    const filmCardContainer = filmsList.querySelector(`.films-list__container`);
    moviesList.forEach((movie) => renderFilmCard(filmCardContainer, movie));

    const isMoreButtonShown = list.type === `all` && showingMoviesAmount < MOVIES_AMOUNT;

    if (isMoreButtonShown) {
      const showMoreButton = new ShowMoreButton();
      const showMoreButtonElement = showMoreButton.getElement();
      render(filmsList, showMoreButtonElement);

      showMoreButtonElement.addEventListener(`click`, () => {
        const prevMoviesAmount = showingMoviesAmount;
        showingMoviesAmount += ON_LOAD_MOVIES_AMOUNT;

        movies.slice(prevMoviesAmount, showingMoviesAmount).forEach((movie) => renderFilmCard(filmCardContainer, movie));

        if (showingMoviesAmount >= movies.length) {
          showMoreButtonElement.remove();
          showMoreButton.removeElement();
        }
      });
    }
  };

  const moviesListToRender = [showingMovies, ratedMovies, commentedMovies];
  MOVIE_LISTS.map((item, idx) => renderFilmsList(item, moviesListToRender[idx]));

};

const movies = generateEntityMock(MOVIES_AMOUNT, generateMovie);

render(header, new UserLevel(generateUserLevel()).getElement());

const navigation = generateNavigationItems();
render(main, new Navigation(navigation).getElement());
render(main, new Sort().getElement());
render(main, new Statistics().getElement());
const films = new Films();
render(main, films.getElement());
renderFilms(films, movies);

