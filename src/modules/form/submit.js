import dayjs from "dayjs";

const form = document.querySelector("form")
const today = dayjs(new Date()).format("YYYY-MM-DD");

const selectedDate = document.getElementById("schedule-date");
const createDate = document.getElementById("data");

createDate.min = today;
createDate.value = today;

selectedDate.min = today;
selectedDate.value = today;

form.onsubmit = (e) =>{
    e.preventDefault()
}