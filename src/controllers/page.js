import FilmCard from '../components/film-card';
import FilmDetailsPopup from '../components/film-details-popup';
import {
  COMMENTED_MOVIES_AMOUNT,
  ESC_KEY,
  ON_LOAD_MOVIES_AMOUNT,
  ON_START_MOVIES_AMOUNT,
  RATED_MOVIES_AMOUNT
} from '../consts';
import {remove, render} from '../utils/renderHelpers';
import FilmsList from '../components/films-list';
import ShowMoreButton from '../components/show-more-button';
import {MOVIE_LISTS} from '../mocks/flim-mock';
import NoFilms from '../components/no-films';

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
  movies.forEach((movie) => renderFilmCard(filmsComponent, movie));
};

export default class Page {
  constructor(container) {
    this._container = container;
    this._noFilms = new NoFilms();
    this._showMoreButton = new ShowMoreButton();
  }

  render(films) {
    const container = this._container.getElement();

    let showingMoviesAmount = ON_START_MOVIES_AMOUNT;
    const showingMovies = films.slice(0, showingMoviesAmount);
    const ratedMovies = films.slice().sort((a, b) => b.rating - a.rating).slice(0, RATED_MOVIES_AMOUNT);
    const commentedMovies = films
      .slice()
      .sort((a, b) => b.comments.length - a.comments.length)
      .slice(0, COMMENTED_MOVIES_AMOUNT);

    const moviesToRender = [showingMovies, ratedMovies, commentedMovies];

    if (films.length === 0) {
      render(container, this._noFilms);
    }

    const renderShowMoreButton = () => {
      if (showingMoviesAmount >= films.length) {
        return;
      }

      const filmListElement = container.querySelector(`.films-list`);
      const filmsListContainerElement = filmListElement.querySelector(`.films-list__container`);

      render(filmListElement, this._showMoreButton);

      this._showMoreButton.setEventHandler(() => {
        const prevFilmsCount = showingMoviesAmount;
        showingMoviesAmount += ON_LOAD_MOVIES_AMOUNT;

        renderFilms(filmsListContainerElement, films.slice(prevFilmsCount, showingMoviesAmount));

        if (showingMoviesAmount >= films.length) {
          remove(this._showMoreButton);
        }
      });
    };

    const renderFilmsList = (list, moviesList) => {
      const filmsListComponent = new FilmsList(list);
      render(container, filmsListComponent);

      const filmsListContainer = filmsListComponent.getElement().querySelector(`.films-list__container`);
      renderFilms(filmsListContainer, moviesList);

      if (list.type !== `all`) {
        return;
      }

      renderShowMoreButton();
    };

    MOVIE_LISTS.map((item, idx) => renderFilmsList(item, moviesToRender[idx]));
  }
}
