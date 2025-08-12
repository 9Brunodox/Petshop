import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";
import { openingHours } from "../../utils/opening-hours.js";

const selectHours = document.getElementById("modal-time");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa a lista de horários;
  selectHours.innerHTML = `<option value="" disabled>Selecione o valor</option>`;

  const unavailable = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailable.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");
    option.classList.add(available ? "hour-available" : "hour-unavailable");

    if (!available) {
      option.disabled = true;
    }

    option.textContent = hour;

    selectHours.append(option);
  });

  hoursClick();
}
