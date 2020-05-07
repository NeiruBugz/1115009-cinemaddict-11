export const RENDER_POSITION = {
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
};


export const render = (container, DOMElement, position = RENDER_POSITION.BEFORE_END) => {
  switch (position) {
    case RENDER_POSITION.AFTER_BEGIN:
      container.prepend(DOMElement);
      break;
    case RENDER_POSITION.BEFORE_END:
      container.append(DOMElement);
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
