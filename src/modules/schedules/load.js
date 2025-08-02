import { hoursLoad } from "../form/hours-load";
import dayjs from "dayjs";


const createDate = document.getElementById("data");


// Data do modal
export function scheduleDay() {
  // Renderiza as horas disponíveis
  const date = createDate.value;
  hoursLoad({ date });
}