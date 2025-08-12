import dayjs from "dayjs";

// Seleciona os períodos
const morning = document.getElementById("schedules-morning");
const afternoon = document.getElementById("schedules-afternoon");
const night = document.getElementById("schedules-night");

export function scheduleShow({ dailySchedules }) {
  // Vamos limpar as listas
  morning.innerHTML = "";
  afternoon.innerHTML = "";
  night.innerHTML = "";

  dailySchedules.forEach((schedule) => {
    // Criando os elementos
    const item = document.createElement("li");
    const div = document.createElement("div");
    const period = document.createElement("span");
    const client = document.createElement("span");
    const strongPet = document.createElement("strong");
    const service = document.createElement("span");
    const removeBtn = document.createElement("button");

    // Adicionando classes
    item.classList.add("schedule-item");
    period.classList.add("schedule-period");
    client.classList.add("schedule-client");
    service.classList.add("schedule-service");
    removeBtn.classList.add("schedule-remove");

    // Adiciona o ID do agendamento
    item.setAttribute("data-id", schedule.id);

    // Preenchendo os valores
    period.textContent = dayjs(schedule.when).format("HH:mm");
    strongPet.textContent = schedule.petname;
    client.appendChild(strongPet);
    client.append(` / ${schedule.username}`);
    service.textContent = schedule.serviceDescription;
    removeBtn.textContent = "Remover agendamento";

    // Montando a hierarquia
    div.append(period, client);
    item.append(div, service, removeBtn);

    // Obtém a hora para separar por período
    const hour = dayjs(schedule.when).hour();

    if (hour <= 12) {
      morning.appendChild(item);
    } else if (hour > 12 && hour <= 18) {
      afternoon.appendChild(item);
    } else {
      night.appendChild(item);
    }
  });
}
