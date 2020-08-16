const debounce = (fn, delay) => {
  let timeout = null;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), delay);
  };
};

export default debounce;
