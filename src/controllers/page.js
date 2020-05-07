import FilmCard from '../components/film-card';
import FilmDetailsPopup from '../components/film-details-popup';
import {
  COMMENTED_MOVIES_AMOUNT,
  ESC_KEY,
  MOVIES_AMOUNT, ON_LOAD_MOVIES_AMOUNT,
  ON_START_MOVIES_AMOUNT,
  RATED_MOVIES_AMOUNT
} from '../consts';
import {render} from '../utils/renderHelpers';
import FilmsList from '../components/films-list';
import ShowMoreButton from '../components/show-more-button';
import {MOVIE_LISTS} from '../mocks/flim-mock';

const renderFilmCard = (filmCardContainer, movie) => {
  const documentBody = document.body;
  const filmCardElement = new FilmCard(movie);

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

  render(filmCardContainer, filmCardElement);
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
    const filmsListComponent = new FilmsList(list);
    const filmsList = filmsListComponent.getElement();
    render(films, filmsListComponent);
    const filmCardContainer = filmsList.querySelector(`.films-list__container`);
    moviesList.forEach((movie) => renderFilmCard(filmCardContainer, movie));

    const isMoreButtonShown = list.type === `all` && showingMoviesAmount < MOVIES_AMOUNT;

    if (isMoreButtonShown) {
      const showMoreButton = new ShowMoreButton();
      const showMoreButtonElement = showMoreButton.getElement();
      render(filmsList, showMoreButton);

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

export default class Page {
  constructor(container) {
    this._container = container;
  }

  render(films) {
    renderFilms(this._container, films);
  }
}
