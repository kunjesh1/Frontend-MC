const allBlock = document.querySelectorAll(".block");

const id13 = document.getElementById("block13");
console.log(id13);

const debounce = (fn, delay) => {
  let debounceTime;

  return (...args) => {
    const context = this;
    clearTimeout(debounceTime);
    debounceTime = setTimeout(() => fn.apply(context, [...args]), delay);
  };
};

const isViewPort = (el) => {
  const bounding = el.getBoundingClientRect();

  const res =
    bounding.top >= -10 &&
    bounding.left >= 0 &&
    bounding.bottom <= window.innerHeight + 50 &&
    bounding.right <= window.innerWidth;

  if (res) {
    console.log(" bounding", bounding);
  }

  return res;
};

const allBlocks = () => {
  allBlock.forEach((block) => {
    const isIn = isViewPort(block);
    // console.log('block', isIn);

    if (isIn) {
      console.log(block.innerHTML);
    }
  });
};

const abc = () => {
  window.location.href =
    "https://www.google.com/path?queryParam=abc&param2=oovjifjifn&param3=55556";
};

const def = () => {
  window.location.href = "/path"; //relative to domain
};

window.addEventListener("scroll", debounce(allBlocks, 1000), false);
