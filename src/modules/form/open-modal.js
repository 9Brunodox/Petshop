const newScheduleBtn = document.getElementById("new-schedule")
const modal = document.querySelector(".modal")

// Remove a classe disabled ao clicar no botão para exibir o modal
newScheduleBtn.addEventListener("click", () =>{
    modal.classList.remove("disabled")
})

modal.addEventListener("click", (e) =>{
    if (e.target === modal){
        modal.classList.add("disabled")
    }
})