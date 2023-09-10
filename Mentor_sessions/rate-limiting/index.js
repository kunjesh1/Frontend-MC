(() => {
  function initialize() {
    const $normalSection = document.querySelector("#normal");
    const $debounceSection = document.querySelector("#debouncing");
    const $throttleSection = document.querySelector("#throttling");

    createSection($normalSection, "normal", "Normal");
    createSection($debounceSection, "debounced", "Debounced");
    createSection($throttleSection, "throttled", "Throttled");
  }

  function arrowIndicator($el, label) {
    const $wrapperDivEl = document.createElement("div");
    const $divEl = document.createElement("div");
    const $arrowLeft = document.createElement("div");

    // classes
    $wrapperDivEl.classList.add("wrapper");
    $divEl.classList.add("text-label");
    $arrowLeft.classList.add("arrow-left");

    $wrapperDivEl.append($arrowLeft);
    $wrapperDivEl.append($divEl);
    $divEl.textContent = label;

    $el.append($wrapperDivEl);
  }
  function createSection($sectionEl, type, label) {
    const $divEl = document.createElement("div");
    const $pEl = document.createElement("p");

    $pEl.textContent = `${label} counter`;

    const $buttonEl = document.createElement("BUTTON");

    $buttonEl.innerText = "Get Products";

    console.log("Inside section", this);

    let handleClick = () => {};

    // Logic for debouncing and throttling
    switch (type) {
      case "normal":
        handleClick = () => fetchAndAppendTODO($sectionEl);
        break;
      case "debounced":
        handleClick = debounce(() => fetchAndAppendTODO($sectionEl), 1500);
        break;
      case "throttled":
        handleClick = throttle(() => fetchAndAppendTODO($sectionEl), 1500);
        break;
    }

    $buttonEl.addEventListener("click", handleClick);

    $divEl.classList.add("flex");
    $divEl.append($pEl);
    $divEl.append($buttonEl);
    arrowIndicator($divEl, "This is called directly");

    $sectionEl.append($divEl);
  }

  function createCard($el, products) {
    const $ul = document.createElement("ul");

    if (products && products.length == 0) {
      return;
    }
    products.map((product) => {
      console.log({ product });
      const $li = document.createElement("li");
      const $productTitle = document.createElement("h4");
      const $productDescription = document.createElement("p");
      const $productCategory = document.createElement("p");

      $productTitle.textContent = product?.title;
      $productDescription.textContent = product?.description;
      $productCategory.textContent = product?.category;

      //add classes
      $productTitle.classList.add("title");
      $productDescription.classList.add("description");

      $li.append($productTitle);
      $li.append($productDescription);
      $li.append($productCategory);

      $li.classList.add("card");

      $ul.append($li);
    });

    $el.append($ul);
  }

  function throttle(callbackFn, delay) {
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

  function debounce(callbackFn, delay) {
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

  async function fetchAndAppendTODO($el) {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=3");
      const responseJSON = await response.json();

      createCard($el, responseJSON);

      console.log({ responseJSON });
    } catch (err) {
      console.log({ err });
    }
  }

  initialize();
})();
