import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("modal-time");


export function hoursLoad({date}){

    // Limpa a lista de horários
    hours.innerHTML = `<option value="">Selecione o valor</option>`;

    const opening = openingHours.map((hour) =>{

        // Splita o horário e retorna somente a hora sem os minutos
        const [scheduleHour] = hour.split(":");

        // Adiciona a hora na data e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const isDateFuture = dayjs(date).isAfter();

        return{
            hour,
            available: !isHourPast,
        }
    });

    opening.map(({hour, available}) =>{
        const option = document.createElement("option")
        option.classList.add(available ? "hour-available" : "hour-unavailable")

        if(!available){
            option.disabled = true;
        }

        option.textContent = hour;

        hours.append(option)

    })
}
