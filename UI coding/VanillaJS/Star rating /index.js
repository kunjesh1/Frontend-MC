(() => {
  function starRating($rootElem, { max = 5, val = 0 }) {
    const STAR_ICON_CLASS = "star-icon";
    const STAR_ICON_FILLED_CLASS = "star-icon-filled";
    const STAR_TEMPLATE = `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="${STAR_ICON_CLASS}"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2">
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>`;

    let currentVal = val;

    function initialize() {
      const html = Array.from({ length: max }, () => STAR_TEMPLATE);
      $rootElem.innerHTML = html;

      $rootElem.addEventListener("click", (event) => {
        const $starEl = event.target.closest(`.${STAR_ICON_CLASS}`);
        if ($starEl == null) {
          return;
        }

        const value = [...$rootElem.children].indexOf($starEl) + 1;
        setValue(value);
      });

      $rootElem.addEventListener("mouseover", (event) => {
        const $starEl = event.target.closest(`.${STAR_ICON_CLASS}`);
        if ($starEl == null) {
          return;
        }

        const value = [...$rootElem.children].indexOf($starEl) + 1;
        highlightStars(value);
      });
    }

    function setValue(val) {
      currentVal = val;
      highlightStars(val);
    }

    function highlightStars(index) {
      for (let i = 0; i < $rootElem.children.length; i++) {
        if (i < index) {
          $rootElem.children[i].classList.add(STAR_ICON_FILLED_CLASS);
        } else {
          $rootElem.children[i].classList.remove(STAR_ICON_FILLED_CLASS);
        }
      }
    }

    initialize(max);
  }

  starRating(document.getElementById("star-rating"), { max: 5, val: 3 });
})();
