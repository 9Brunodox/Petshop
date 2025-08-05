import dayjs from "dayjs";

// Seleciona as seções Manhã, tarde e noite.

const periodMorning = document.getElementById("morning")
const perdiodAfternoon = document.getElementById("afternoon")
const periodNight = document.getElementById("night")

export function scheduleShow({ dailySchedules }){
    try {
        // Limpando as listas
        periodMorning.innerHTML = "";
        perdiodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        dailySchedules.array.forEach((schedule) => {
            const item = document.createElement("li")
            const div = document.createElement("div")
            const details = document.createElement("span")
            const petName = document.createElement("strong")
            const tutorName = document.createElement("")
        });
    } catch (error) {
        console.log(error)
    }
}