import { apiConfig } from "./api-config";

export async function scheduleNew({
    id,
    userName,
    namePet,
    cleanedNumber,
    serviceDescription,
    when,
}){
    try {
        // Fazendo a requisição para enviar os dados do agendamento.
        await fetch(`${apiConfig.baseURL/schedules}`,{
            method: 'POST',
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                userName,
                namePet,
                cleanedNumber,
                serviceDescription,
                when,
            })
        })
        // Exibe mensagem de agendamento realizado.
        alert("Agendamento realizado!")
    } catch (error) {
        console.log(error)
    }
}