import AbstractComponent from './abstract';

const createFilmsTemplate = () => `<section class="films"></section>`;

export default class Films extends AbstractComponent {
  getTemplate() {
    return createFilmsTemplate();
  }
}
