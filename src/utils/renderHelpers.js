export const RENDER_POSITION = {
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
};

export const SORT_TYPES = {
  DEFAULT: `default`,
  RATING: `rating`,
  DATE: `date`
};

export const render = (container, component, position = RENDER_POSITION.BEFORE_END) => {
  switch (position) {
    case RENDER_POSITION.AFTER_BEGIN:
      container.prepend(component.getElement());
      break;
    case RENDER_POSITION.BEFORE_END:
      container.append(component.getElement());
      break;
  }
};

export const createElement = (template) => {
  const element = document.createElement(`div`);
  const cleanedHTML = template.trim();
  element.innerHTML = cleanedHTML;

  return element.firstChild;
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export const setActiveElement = (container, element, activeClass) => {
  const activeElement = container.querySelector(`.${{activeClass}}`);

  if (!element.classList.contains(`${activeClass}`)) {
    activeElement.classList.remove(activeClass);
    element.classList.add(activeClass);
  }
};
