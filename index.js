const op = require('./operation');

const operationsData = {
  add: [
    {
      user: 'user1',
      value1: 10,
      value2: 20,
    },
    {
      user: 'user2',
      value1: 30,
      value2: 40,
    },
    {
      user: 'user3',
      value1: 50,
      value2: 60,
    }
  ],
  subtract: [
    {
      user: 'user1',
      value1: 30,
      value2: 20,
    },
    {
      user: 'user2',
      value1: 40,
      value2: 30,
    },
    {
      user: 'user3',
      value1: 50,
      value2: 40,
    }
  ],
  multiply: [
    {
      user: 'user1',
      value1: 10_500,
      value2: 20_340,
    },
    {
      user: 'user2',
      value1: 30_500,
      value2: 40_340,
    },
    {
      user: 'user3',
      value1: 50_500,
      value2: 60_340,
    },
  ],
  divide: [
    {
      user: 'user1',
      value1: '2000',
      value2: '100',
    },
    {
      user: 'user2',
      value1: '3000',
      value2: 5,
    },
    {
      user: 'user3',
      value1: '5000',
      value2: 10,
    },
  ],
}

const sumData = operationsData.add;
const subData = operationsData.subtract;
const multData = operationsData.multiply;
const divData = operationsData.divide;

const add = op.add(sumData);
const sub = op.sub(subData);
const mult = op.mult(multData);
const div = op.div(divData);

const results = {
  add,
  sub,
  mult,
  div
}

console.log(results);
