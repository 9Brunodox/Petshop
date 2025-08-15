import { apiConfig } from "./api-config";

export async function scheduleDelete({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    alert("Agendamento removido!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento!");
  }
}
