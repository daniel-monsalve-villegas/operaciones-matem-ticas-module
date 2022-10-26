function add(obj) {
  const sumResult = obj.map(elem => {
    return {
      user: elem.user,
      result: elem.value1 + elem.value2
    }
  });
  return sumResult;
}

function sub(obj) {
  const subResult = obj.map(elem => {
    return {
      user: elem.user,
      result: elem.value1 - elem.value2
    }
  });
  return subResult;
}

function mult(obj) {
  const multResult = obj.map(elem => {
    return {
      user: elem.user,
      result: elem.value1 * elem.value2
    }
  });
  return multResult;
}

function div(obj) {
  const divResult = obj.map(elem => {
    return {
      user: elem.user,
      result: elem.value1 / elem.value2
    }
  });
  return divResult;
}

module.exports = { add, sub, mult, div };
