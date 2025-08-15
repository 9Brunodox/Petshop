import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "./show.js";
import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js";

const schedulesDate = document.getElementById("schedule-date");
const newSchedulesDate = document.getElementById("data");

export async function schedulesDay() {
  //Obtém a data do input
  const date = newSchedulesDate.value;

  // Busca na API os agendamentos
  const dailySchedules = await fetchScheduleByDay({ date });

  // Busca na API os agendamentos para carregar
  hoursLoad({ date, dailySchedules });
}

export async function searchSchedules() {
  const date = schedulesDate.value;

  const dailySchedules = await fetchScheduleByDay({ date });

  //Exibe os agendamentos
  scheduleShow({ dailySchedules });

  // Exibe os agendamentos
  scheduleShow({ dailySchedules });
}
