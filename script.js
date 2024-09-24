const input = document.querySelector(".my-input");
const div = document.querySelector(".container");
const signImageDiv = document.getElementById("signImage");
const signNameDiv = document.getElementById("signName");
const textContainer = document.getElementById("textContainer");

function showSign() {
    const birthDate = new Date(input.value);
    
    // Verifica se a data é válida
    if (!birthDate || isNaN(birthDate.getTime())) {
        alert("Por favor, insira uma data de aniversário válida.");
        return;
    }

    const day = birthDate.getUTCDate();
    const month = birthDate.getUTCMonth() + 1;

    let sign = '';
    let imageUrl = '';

    // Definir o signo com base na data de nascimento
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        sign = 'Aquário';
        imageUrl = './assets/aquariio.png';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        sign = 'Peixes';
        imageUrl = './assets/peixes.png';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        sign = 'Áries';
        imageUrl = './assets/aries.png';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        sign = 'Touro';
        imageUrl = './assets/touro.png';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        sign = 'Gêmeos';
        imageUrl = './assets/gemeos.png';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        sign = 'Câncer';
        imageUrl = './assets/cancer.png';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        sign = 'Leão';
        imageUrl = './assets/leao.png';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        sign = 'Virgem';
        imageUrl = './assets/virgem.png';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        sign = 'Libra';
        imageUrl = './assets/libra.png';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        sign = 'Escorpião';
        imageUrl = './assets/escorpiao.png';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        sign = 'Sagitário';
        imageUrl = './assets/sagitario.png';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        sign = 'Capricórnio';
        imageUrl = './assets/capricornio.png';
    } else {
        console.log("Signo não encontrado para a data.");
    }

    // Ocultar o texto e exibir a imagem e o nome do signo
    textContainer.style.display = 'none'; 
    signImageDiv.innerHTML = `<img src="${imageUrl}" alt="${sign}">`;
    signImageDiv.style.display = 'flex'; 
    signNameDiv.textContent = sign; 
    signNameDiv.style.display = 'block'; 
}
