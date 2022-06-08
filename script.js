const ratingsElement = document.querySelectorAll(".rate-element");

let rateNumber;

for (let i = 0; i < ratingsElement.length; i++) {
  ratingsElement[i].addEventListener("click", function () {
    rateNumber = ratingsElement[i].textContent;

    resetActive();
    ratingsElement[i].classList.add("active");
  });
}

function resetActive() {
  for (let i = 0; i < ratingsElement.length; i++) {
    ratingsElement[i].classList.remove("active");
  }
}