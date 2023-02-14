const { num1, num2, type: operacio } = require('./params.json');

const Middleware = require('./Middleware');

const operate = (num1, num2, operacio) => {
  let middleware = new Middleware(operacio);
  middleware.use(num1, num2);
  return middleware;
};

operate(num1, num2, operacio);
