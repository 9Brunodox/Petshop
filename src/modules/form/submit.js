import dayjs from "dayjs";
import { scheduleNew } from "../../services/new-schedule";

const form = document.querySelector("form")
const today = dayjs(new Date()).format("YYYY-MM-DD");

const selectedDate = document.getElementById("schedule-date");
const createDate = document.getElementById("data");

const nameInput = document.get

createDate.min = today;
createDate.value = today;

selectedDate.min = today;
selectedDate.value = today;

form.onsubmit = (e) =>{
    e.preventDefault()
}