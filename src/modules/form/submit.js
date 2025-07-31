import dayjs from "dayjs";


const form = document.querySelector("form"); //Utilizando o query porque só existe apenas um FORM

//Carrega a data Atual automatizada.
const today = dayjs(new Date()).format("YYYY-MM-DD");


form.onsubmit = (event) => {
  //Previne comportamento padrão do form (REFRESH)
  event.preventDefault();
};
