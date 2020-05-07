import AbstractComponent from './abstract';

const getFilmsTemplate = ({type, title}) => {
  const isAllList = type === `all`;

  const listClass = isAllList ? `films-list` : `films-list--${type}`;
  const titleClass = isAllList ? `films-list__title visually-hidden` : `films-list--title`;

  return (
    `<section class="${listClass}">
        <h2 class="${titleClass}">${title}</h2>
        <div class="films-list__container"></div>
    </section>
    `
  );
};

export default class FilmsList extends AbstractComponent {
  constructor(list) {
    super();
    this._list = list;
  }

  getTemplate() {
    return getFilmsTemplate(this._list);
  }
}


