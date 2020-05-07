import AbstractComponent from './abstract';

const getShowMoreButtonTemplate = () => (
  `<button class="films-list__show-more">Show more</button>`
);

export default class ShowMoreButton extends AbstractComponent {
  getTemplate() {
    return getShowMoreButtonTemplate();
  }

  setEventHandler(cb) {
    this.getElement().addEventListener(`click`, cb);
  }
}
