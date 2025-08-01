import { hoursLoad } from "../form/hours-load";
import dayjs from "dayjs";

//Carrega a data Atual automatizada.
const today = dayjs(new Date()).format("YYYY-MM-DD");

const selectedDate = document.getElementById("schedule-date"); // Data dos agendamentos feitos
const createDate = document.getElementById("data");

// Define a data mínima como sendo a data atual.
createDate.min = today;

// Define a data atual para hoje
createDate.value = today;

// Data do modal
export function scheduleDay() {
  // Renderiza as horas disponíveis
  const date = createDate.value;
  hoursLoad({ date });
}
