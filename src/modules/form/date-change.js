import { schedulesDay, searchSchedules } from "../schedules/load.js";

const schedulesDate = document.getElementById("schedule-date");
const newSchedulesDate = document.getElementById("data");

if (schedulesDate) {
  schedulesDate.addEventListener("change", () => searchSchedules());
}

if (newSchedulesDate) {
  newSchedulesDate.addEventListener("change", () => schedulesDay());
}
