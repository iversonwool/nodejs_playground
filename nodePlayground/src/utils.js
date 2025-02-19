const NUMBER = 1_000_000_000;

function timeConsuming(start = 0, end) {
  let sum = 0;
  for (let index = start; index < end; index++) {
    sum += index;
  }
  return sum;
}

module.exports = {
  timeConsuming,
  NUMBER
}