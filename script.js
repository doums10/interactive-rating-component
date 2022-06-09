const ratingsElement = document.querySelectorAll(".rate-element");
const submitButton = document.querySelector(".submit");

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



/* sélectionner le boutton submit
quand on click sur le bouton submit => afficher la nouvelle div hidden

sélectionner le span id => si la note est supérieur à 0 remplacer le span sélectionné*/

