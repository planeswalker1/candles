// pseudo code:
// given an array of numbers
// return the number of instances of the greatest number

// find the greatest number in the array
// find out how many times that number is repeated
// return that number

function HowManyCandles (candles) {
  let tallestCandle = Math.max(...candles);
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallestCandle) {
      count++;
    }
  }
  return count;
}