import AbstractComponent from './abstract';

const generateNavigationItem = ({title, anchor, count}, isActive, hasCount) => {
  const activeClass = isActive ? `main-navigation__item--active` : ``;
  return (
    `<a href="#${anchor}" class="main-navigation__item ${activeClass}">
      ${title}
      ${hasCount ? ` <span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

const getNavigationTemplate = (navigationItems) => {
  const navigationItemsMarkup =
    navigationItems
      .map((navigationItem, idx) => generateNavigationItem(navigationItem, idx === 0, idx !== 0))
      .join(`\n`);
  return (
    `
    <nav class="main-navigation">
      <div class="main-navigation__items">
        ${navigationItemsMarkup}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `
  );
};

export default class Navigation extends AbstractComponent {
  constructor(navigationItems) {
    super();
    this._navigationItems = navigationItems;
  }

  getTemplate() {
    return getNavigationTemplate(this._navigationItems);
  }
}
