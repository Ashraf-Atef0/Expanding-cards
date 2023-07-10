let cards = document.querySelectorAll(".image");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});

function removeActiveClass() {
  cards.forEach((card) => card.classList.remove("active"));
}
