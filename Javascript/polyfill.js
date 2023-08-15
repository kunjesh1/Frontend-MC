// Suppose Math.trunc()

if (!Math.trunc) {
  Math.trunc = function (number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
