import {createElement} from '../utils/helpers';

export const getUserLeverTemplate = ({userLevel}) => (
  `
    <section class="header__profile profile">
      <p class="profile__rating">${userLevel}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  `
);

export default class UserLevel {
  constructor(user) {
    this._user = user;
    this._element = null;
  }

  getTemplate() {
    return getUserLeverTemplate(this._user);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
