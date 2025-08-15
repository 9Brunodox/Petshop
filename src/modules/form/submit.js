import dayjs from "dayjs";
import { schedulesDay } from "../schedules/load.js";
import { scheduleNew } from "../../services/schedule-new.js";
import { searchSchedules } from "../schedules/load.js";

const form = document.querySelector("form");

// Pega o input da data da página inicial
const schedulesDate = document.getElementById("schedule-date");

// Pega o input de data do modal de new schedule
const newSchedulesDate = document.getElementById("data");

// Carrega a data Atual
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Seta a data atual no input de data da página inicial
schedulesDate.value = today;

// Seta a data atual no input de data do modal
newSchedulesDate.value = today;
// Define a data mínima como a data atual no input de data do modal
newSchedulesDate.min = today;

// Pegando os inputs:
const inputName = document.getElementById("tutorName");
const inputPetName = document.getElementById("petName");
const inputPhone = document.getElementById("phoneNumber");
const inputDescService = document.getElementById("description");

form.onsubmit = async (e) => {
  // Previne o comportamento padrão de carregar a página!
  e.preventDefault();
  try {
    const tutorName = inputName.value.trim(); // Nome do cliente
    const petName = inputPetName.value.trim(); // Nome do pet
    const numberPhone = inputPhone.value.trim(); // Telefone do tutor
    const serviceDescription = inputDescService.value.trim(); // Descrição do serviço
    const hourSelected = document.querySelector(".hour-selected"); // Seleciona o horário

    // Função para obter apenas os números do telefone
    const phoneNumber = (raw) => {
      return raw.replace(/\D/g, ""); // Remove tudo que não é número
    };

    // Limpa o número de telefone
    const cleanedNumber = phoneNumber(numberPhone);

    // Validações
    if (!tutorName) {
      return alert("Informe o nome do tutor!");
    } else if (!petName) {
      return alert("Informe o nome do pet!");
    } else if (!numberPhone) {
      return alert("Informe o número para contato!");
    } else if (!serviceDescription) {
      return alert("Descreva o serviço a ser realizado!");
    } else if (!hourSelected) {
      return alert("Informe um horário disponível!");
    }

    // Recupera somente o horário selecionado
    const [hour] = hourSelected.innerText.split(":");

    // Inserir a hora na data
    const when = dayjs(newSchedulesDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime().toString();

    await scheduleNew({
      id,
      username: tutorName,
      petname: petName,
      cleanedNumber,
      serviceDescription,
      when,
    });

    // Recarrega os agendamentos
    await searchSchedules();

    // Limpa os campos do formulário
    inputName.value = "";
    inputPetName.value = "";
    inputPhone.value = "";
    inputDescService.value = "";
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento.");
  }
};
