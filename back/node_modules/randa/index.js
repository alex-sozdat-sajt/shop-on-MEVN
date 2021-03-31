const int = (min, max, size) => {
  let arr = [];

  let value = Math.floor(Math.random() * (max - min + 1)) + min;

  while (arr.length < (size || max)) {
    if (arr.indexOf(value) == -1) {
      arr.push(value);
    }

    value = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return arr;
};

const float = (min, max, size) => {
  let arr = [];

  let value = Math.random() * (max - min + 1) + min;

  while (arr.length < (size || max)) {
    if (arr.indexOf(value) == -1) {
      arr.push(parseFloat(value.toFixed(2)));
    }

    value = Math.random() * (max - min + 1) + min;
  }

  return arr;
};

const regex = (pattern, len, size) => {
  let arr = [];

  let value = Math.random().toString(36).slice(2, len + 2);

  while (arr.length < (size || max)) {
    if (arr.indexOf(value) == -1 && new RegExp(pattern).test(value)) {
      arr.push(value);
    }

    value = Math.random().toString(36).slice(2, len + 2);
  }

  return arr;
};

const shuffle = (arr, size = 0) => {
  for (let i = arr.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }

  return size ? arr.slice(0, size) : arr;
};

module.exports = {
  int,
  float,
  regex,
  shuffle,
};
