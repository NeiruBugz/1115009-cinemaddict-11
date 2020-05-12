import AbstractComponent from './abstract';
import {SORT_TYPES} from '../utils/renderHelpers';

const getSortItemMarkup = (sortType, isActive) => {
  const activeClass = isActive ? `sort__button--active` : ``;

  return `<li><a href="#" data-sort-type="${sortType}" class="sort__button ${activeClass}">Sort by ${sortType}</a></li>`;
};

export const getSortTemplate = () => {
  const sortItemsMarkup = Object
    .values(SORT_TYPES)
    .map((sortType, idx) =>
      getSortItemMarkup(sortType, idx === 0)
    )
    .join(`\n`);
  return (
    `
    <ul class="sort">
      ${sortItemsMarkup}
    </ul>
  `
  );
};

export default class Sort extends AbstractComponent {
  constructor() {
    super();

    this._sortType = SORT_TYPES.DEFAULT;
  }

  getSortType() {
    return this._sortType;
  }

  setSortChangeHandler(cb) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const target = evt.target;

      const sortType = target.dataset.sortType;

      if (this._sortType === sortType) {
        return;
      }

      this._sortType = sortType;

      cb(this._sortType);
    });
  }

  getTemplate() {
    return getSortTemplate();
  }
}
