/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (nums) {
    return nums.reduce(this.add, 0);
  },
  getAverage: function (nums) {
    return this.sumAll(nums) / nums.length;
  }
};
