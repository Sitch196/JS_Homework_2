Array.prototype.myFilter = function (callbackFunction, objectArg) {
  const filteredResults = [];

  for (let index = 0; index < this.length; index++) {
    const currentElement = this[index];

    if (callbackFunction.call(objectArg, currentElement, index, this)) {
      filteredResults.push(currentElement);
    }
  }

  return filteredResults;
};

//test
const nums = [1, 2, 3, 4, 5];
const newArray = nums.myFilter((item) => item < 3);
console.log(newArray);
