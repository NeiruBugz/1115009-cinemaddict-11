import {MOVIES_AMOUNT} from '../consts';
import {generateEntityMock} from '../utils/helpers';
import {generateMovie} from '../mocks/flim-mock';

const getShowMoreButtonTemplate = () => (
  `<button class="films-list__show-more">Show more</button>`
);

const getFilmCardTemplate = ({title, poster, description, rating, releaseDate, genre, duration, comments}) => {
  return (`
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  `);
};

const getFilmsListTemplate = (filmsAmount, movies) => {
  let filmsListTemplate = ``;

  const splicedMovies = movies.splice(0, filmsAmount);

  for (let i = 0; i < filmsAmount; i++) {
    filmsListTemplate = `${filmsListTemplate}${getFilmCardTemplate(splicedMovies[i])}`;
  }

  return filmsListTemplate;
};

export const getFilmsTemplate = (movies) => {
  const BASE_FILMS_COUNT = 5;
  const EXTRA_FILMS_COUNT = 2;

  const filmsListTemplate = getFilmsListTemplate(BASE_FILMS_COUNT, movies);
  const showMoreButtonTemplate = getShowMoreButtonTemplate();
  const filmsExtraRatedTemplate = getFilmsListTemplate(EXTRA_FILMS_COUNT, movies);
  const filmsExtraCommentedTemplate = getFilmsListTemplate(EXTRA_FILMS_COUNT, movies);

  return (
    `
      <section class="films">
        <section class="films-list">
          <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
          <div class="films-list__container">
            ${filmsListTemplate}
          </div>
          ${showMoreButtonTemplate}
        </section>
        <section class="films-list--extra">
          <h2 class="films-list__title">Top rated</h2>
          <div class="films-list__container">
            ${filmsExtraRatedTemplate}
          </div>
        </section>
        <section class="films-list--extra">
          <h2 class="films-list__title">Most commented</h2>
          <div class="films-list__container">
            ${filmsExtraCommentedTemplate}
          </div>
        </section>
      </section>
    `
  );
};
