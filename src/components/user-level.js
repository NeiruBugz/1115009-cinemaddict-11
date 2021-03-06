import AbstractComponent from './abstract';

export const getUserLeverTemplate = ({userLevel}) => (
  `
    <section class="header__profile profile">
      <p class="profile__rating">${userLevel}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  `
);

export default class UserLevel extends AbstractComponent {
  constructor(user) {
    super();
    this._user = user;
  }

  getTemplate() {
    return getUserLeverTemplate(this._user);
  }
}
