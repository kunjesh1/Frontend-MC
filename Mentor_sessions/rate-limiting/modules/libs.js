import { BASE_URL } from "./constants.js";

const fetchAndAppendTODO = async ($el, onSuccess, onError) => {
  console.log({ BASE_URL });
  try {
    const response = await fetch(BASE_URL);
    const responseJSON = await response.json();

    onSuccess(responseJSON);
  } catch (err) {
    onError();
    console.log({ err });
  }
};

const createElement = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Element) {
      element.appendChild(child);
    }
  });

  return element;
};

export { fetchAndAppendTODO, createElement };
