import { scheduleDay} from "../schedules/load.js"

const createDate = document.getElementById("data");
createDate.addEventListener("change", () => scheduleDay())