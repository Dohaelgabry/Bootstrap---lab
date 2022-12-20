var resumeBtn = document.getElementById("butn2");
var workBtn = document.getElementById("butn3");
var contactBtn = document.getElementById("butn4");
var clickbutton = document.getElementById("butn1");

var x = document.getElementsByClassName("collapse");

clickbutton.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});

resumeBtn.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});

workBtn.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});

contactBtn.addEventListener("click", function () {
  for (let i = 0; i < x.length; i++) {
    if (x[i].classList.contains("show")) {
      x[i].classList.remove("show");
    }
  }
});
