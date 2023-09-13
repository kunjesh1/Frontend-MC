import { createElement, fetchAndAppendTODO } from "./modules/libs.js";

class DOMManipulator {
  constructor() {
    this.normalSection = document.querySelector("#normal");
    this.debounceSection = document.querySelector("#debouncing");
    this.throttleSection = document.querySelector("#throttling");
  }

  initialize() {
    this.createSection(this.normalSection, "normal", "Normal");
    this.createSection(this.debounceSection, "debounced", "Debounced");
    this.createSection(this.throttleSection, "throttled", "Throttled");
  }

  arrowIndicator($el, label) {
    const $wrapperDivEl = createElement("div", { class: "wrapper" });
    const $divEl = createElement("div", { class: "text-label" });
    const $arrowLeft = createElement("div", { class: "arrow-left" });

    $wrapperDivEl.appendChild($arrowLeft);
    $wrapperDivEl.appendChild($divEl);
    $divEl.textContent = label;

    $el.appendChild($wrapperDivEl);
  }

  createSection($sectionEl, type, label) {
    const $divEl = createElement("div", { class: "flex" });
    const $pEl = createElement("p");
    $pEl.textContent = `${label} counter`;

    const $buttonEl = createElement("button");
    $buttonEl.innerText = "Get Products";

    let handleClick = () => {};

    const onSuccess = (response) => {
      this.createCard($sectionEl, response);
    };

    let tooltipLabel;
    // Logic for debouncing and throttling
    switch (type) {
      case "normal":
        handleClick = () => fetchAndAppendTODO($sectionEl, onSuccess);
        tooltipLabel = "normally";

        break;
      case "debounced":
        handleClick = this.debounce(
          () => fetchAndAppendTODO($sectionEl, onSuccess),
          1500
        );
        tooltipLabel = "debounced";
        break;
      case "throttled":
        handleClick = this.throttle(
          () => fetchAndAppendTODO($sectionEl, onSuccess),
          1500
        );
        tooltipLabel = "throttled";
        break;
    }

    $buttonEl.addEventListener("click", handleClick);

    $divEl.appendChild($pEl);
    $divEl.appendChild($buttonEl);

    this.arrowIndicator($divEl, `This is called ${tooltipLabel}`);

    $sectionEl.appendChild($divEl);
  }

  createCard($el, products) {
    const $ul = createElement("ul");

    if (products && products.length == 0) {
      return;
    }

    products.forEach((product) => {
      const $li = createElement("li", { class: "card" });
      const $productTitle = createElement(
        "h4",
        { class: "title" },
        product?.title
      );
      const $productDescription = createElement(
        "p",
        { class: "description" },
        product?.description
      );
      const $productCategory = createElement(
        "p",
        { class: "category" },
        product?.category
      );

      $li.appendChild($productTitle);
      $li.appendChild($productCategory);
      $li.appendChild($productDescription);

      $ul.appendChild($li);
    });

    $el.appendChild($ul);
  }

  throttle(callbackFn, delay) {
    let shouldThrottle = true;

    return function (...args) {
      let context = this;
      if (shouldThrottle) {
        callbackFn.apply(context, ...args);
        shouldThrottle = false;
      }

      setTimeout(() => {
        shouldThrottle = true;
      }, delay);
    };
  }

  debounce(callbackFn, delay) {
    const ctx = this;
    let debounceTime;

    return function (...args) {
      if (debounceTime) {
        clearTimeout(debounceTime);
      }
      debounceTime = setTimeout(() => {
        callbackFn.apply(ctx, [...args]);
      }, delay);
    };
  }
}

const domManipulator = new DOMManipulator();
domManipulator.initialize();
