import { apiConfig } from "./api-config";

export async function scheduleNew({
    id,
    username,
    petname,
    cleanedNumber,
    serviceDescription,
    when,
}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            header: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                id,
                username,
                petname,
                cleanedNumber,
                serviceDescription,
                when,
            })
        })
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível realizar o agendamento!")
    }
}