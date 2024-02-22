var timer = 60;
var score = 0;
var hitval = 0;
function makeBubble() {
  var clutter = "";
  for (let i = 1; i < 113; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#panel-bottom").innerHTML = clutter;
}
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#panel-bottom"
      ).innerHTML = `<h1>"Game Over! Your score is ${score}"</h1>`;
    }
  }, 1000);
}
function makeHit() {
  hitval = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitval;
}
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function decreaseScore() {
  if (score > 0) {
    score -= 10;
    document.querySelector("#score").textContent = score;
  }
}

document
  .querySelector("#panel-bottom")
  .addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitval) {
      makeBubble();
      makeHit();
      increaseScore();
    } else if (clickedNum !== hitval) {
      makeBubble();
      decreaseScore();
    }
  });

runTimer();
makeBubble();
makeHit();
