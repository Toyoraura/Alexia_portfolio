const explications = document.querySelectorAll(".explication-competence");
const competences = document.querySelectorAll(".compet");

competences.forEach((competence) => {
  competence.addEventListener("mouseover", () => {});
});

for (let i = 0; i < competences.length; i++) {
  competences[i].addEventListener("mouseover", () => {
    document
      .querySelector(".selected-explication")
      .classList.remove("selected-explication");
    document
      .querySelector(".selected-compet")
      .classList.remove("selected-compet");

    explications[i].classList.add("selected-explication");
    competences[i].classList.add("selected-compet");
  });
}
