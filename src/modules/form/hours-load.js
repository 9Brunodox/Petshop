import { openingHours } from "../../utils/opening-hours.js";
import dayjs from "dayjs";

const hours = document.getElementById("modal-time");

export function hoursLoad({ date }) {
  // Limpa a lista de horários
  hours.innerHTML = `<option value="">Selecione o valor</option>`;
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adicionaa a hora na date e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
    
    return{
        hour,
        available: !isHourPast,
    }

  });

  // Renderiza os horários.
  opening.forEach(({hour, available}) => {
    const option = document.createElement("option")
    option.classList.add(available ?"hour-available" : "hour-unavailable")

    if(!available){
        option.disabled = true;
    }

    option.textContent = hour;

    hours.append(option)
  });

}

