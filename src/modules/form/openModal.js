const newScheduleBtn = document.getElementById("new-schedule");
const modal = document.querySelector(".modal");

// Abrir o modal ao clicar no botão
newScheduleBtn.addEventListener("click", () => {
  modal.classList.remove("disabled");
});

// Fechar o modal quando clicar fora dele ou no botão de fechar
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("disabled");
  }
});
