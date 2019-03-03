document.addEventListener("DOMContentLoaded", function() {
  //   Initialize an array of gem values. The array is initially dummy values.
  var gemArray = [1, 1, 1, 1];

  // gemvals() assigns a random value between 1 and 12 to each gem
  // in gemArray.
  function gemvals() {
    for (var i = 0; i < gemArray.length; i++) {
      gemArray[i] = Math.ceil(Math.random() * 11) + 1;
    }
  }
  var targetV;

  // Determine our target value as a random number between 19 and 139.
  //   I would love to make this as a function of the gems instead
  // of just a random number, but then there isn't a good way to ensure that it's
  // between 19 and 120 without writing a more complicated algorithm than I have
  // time for this week.
  function targetVal() {
    targetVal += Math.floor(Math.random() * 139) + 19;
  }
});
