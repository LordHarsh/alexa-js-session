// Rest Operator with Function Parameters

const sum = (function () {
    return function sum(x, y, z) {
      const args = [ x, y, z ];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3));