import AbstractComponent from './abstract';

const getFilmCardTemplate = ({
  title,
  poster,
  description,
  rating,
  releaseDate,
  genres,
  duration,
  comments,
  isWatchlist,
  isWatched,
  isFavorite
}) => {

  const isWatchlistClass = isWatchlist ? `film-card__controls-item--active` : ``;
  const isWatchedClass = isWatched ? `film-card__controls-item--active` : ``;
  const isFavoriteClass = isFavorite ? `film-card__controls-item--active` : ``;

  return (`
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genres}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlistClass}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatchedClass}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavoriteClass}">Mark as favorite</button>
      </form>
    </article>
  `);
};

export default class FilmCard extends AbstractComponent {
  constructor(movie) {
    super();
    this._movie = movie;
  }

  getTemplate() {
    return getFilmCardTemplate(this._movie);
  }

  setOpenPopupEvent(cb) {
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, cb);
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, cb);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, cb);
  }
}
