export function maskNumber() {
    const phoneMask = (value) => {
      value = value.replace(/\D/g, ""); // Remove tudo que não é número
      value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses
      value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona hífen
      return value;
    }

    const handlePhone = (e) => {
        const input = e.target;
        input.value = phoneMask(input.value)
    }

    // Seleciona o input pelo ID
    const input = document.getElementById("phoneNumber")
    if (input){
        input.addEventListener("input", handlePhone); // Adiciona evento
    } else{
        console.error("O input com ID #phoneNumber não foi encontrado!")
    }
}