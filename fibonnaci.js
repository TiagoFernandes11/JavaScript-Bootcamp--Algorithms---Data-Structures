// 0 1 1 2 3 5 8 13 21

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

console.log(fib(100));
