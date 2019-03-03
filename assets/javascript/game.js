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
  var targetVal;

  // Determine our target value as a random number between 19 and 139.
  //   I would love to make this as a function of the gems instead
  // of just a random number, but then there isn't a good way to ensure that it's
  // between 19 and 120 without writing a more complicated algorithm than I have
  // time for this week.
  function getTargetVal() {
    targetVal = Math.floor(Math.random() * 139) + 19;
  }

  function reset() {
    totalScore = 0;
    gemvals();
    getTargetVal();
    updateTargetVal();
    updateWinsAndLosses();
    updateScore();
  }

  function updateTargetVal() {
    $("#random-number").text(targetVal);
  }

  function updateWinsAndLosses() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
  }

  function updateScore() {
    console.log("Entered updateScore");
    $("#total-score").text(totalScore);
  }

  //   Create a link back to the document. The gem class applies to each of the gem pictures.
  var allGems = $(".gem");
  var totalScore = 0;
  var wins = 0;
  var losses = 0;

  reset();

  allGems.on("click", function() {
    var gemIndex = parseInt($(this).attr("value")) - 1;
    totalScore += gemArray[gemIndex];
    console.log(totalScore);
    updateScore();

    if (totalScore === targetVal) {
      wins++;
      reset();
    }

    if (totalScore > targetVal) {
      losses++;
      reset();
    }
  });
});
