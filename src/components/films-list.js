import FilmCard from './film-card';

const getShowMoreButtonTemplate = () => (
  `<button class="films-list__show-more">Show more</button>`
);

const getFilmsListTemplate = (filmsAmount, movies) => {
  let filmsListTemplate = ``;
  const splicedMovies = movies.splice(0, filmsAmount);

  for (let i = 0; i < filmsAmount; i++) {
    const newFilm = new FilmCard(splicedMovies[i]);
    filmsListTemplate = `${filmsListTemplate}${newFilm.getTemplate()}`;
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

export default class FilmsList {
  constructor(template) {
    this._template = template;
    this._element = null;
  }
}
