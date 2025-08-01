import dayjs from "dayjs";


const form = document.querySelector("form");
const selectedDate = document.getElementById("schedule-date") //Utilizando o query porque só existe apenas um FORM

//Carrega a data Atual automatizada.
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Define a data atual para hoje
selectedDate.value = today

// Define a data mínima como sendo a data atual.
selectedDate.min = today


form.onsubmit = (e) =>{
  e.preventDefault()
}