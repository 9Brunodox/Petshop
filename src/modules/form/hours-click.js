export function hoursClick(){
    const selectHours = document.getElementById("modal-time")

    selectHours.addEventListener("change", (e) =>{
        // Remove a classe 'hour-selected' de todas as opções
        Array.from(selectHours.options).forEach((option) => {
            option.classList.remove("hour-selected");
        })

        const selectedOption = e.target.options[e.target.selectedIndex];
        if(selectedOption.classList.contains("hour-available")) {
            selectedOption.classList.add("hour-selected")
        }
    })

}
