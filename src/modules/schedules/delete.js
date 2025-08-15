import { scheduleDelete } from "../../services/schedule-delete";
import { schedulesDay, searchSchedules } from "./load";

const periods = document.querySelectorAll(".period");

// Gera o evento de click para cada período (lista) - (Manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("schedule-remove")) {
      // Obtém a li pai do elemento criado
      const item = e.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja remover este agendamento?"
        );
        if (isConfirm) {
          // Faz a requisição na API para remover
          await scheduleDelete({ id });

          // Recarregamos os agendamentos
          schedulesDay();
          searchSchedules();
        }
      }
    }
  });
});
