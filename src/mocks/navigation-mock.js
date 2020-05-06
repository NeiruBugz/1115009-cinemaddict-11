import {generateRandomInteger} from '../utils/helpers';

export const generateNavigationItems = () => {
  const NAV_ITEMS = [
    `All movies`,
    `Watchlist`,
    `History`,
    `Favorites`,
  ];
  return NAV_ITEMS.map((navItem) => {
    return {
      title: navItem,
      anchor: navItem.split(` `)[0].toLowerCase(),
      count: generateRandomInteger(0, 100),
    };
  });
};
