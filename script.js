let totalHours = 0;

function selectHours(hours) {
    if (hours < 0) {
        alert("A quantidade de horas não pode ser negativa.");
        return;
    }
    totalHours = hours;
    document.getElementById('initial-screen').classList.add('hidden');
    document.getElementById('absence-screen').classList.remove('hidden');
}

function showCustomHoursInput() {
    document.getElementById('custom-hours-input').classList.remove('hidden');
}

function selectCustomHours() {
    const customHours = document.getElementById('custom-hours').value;
    if (customHours < 0) {
        alert("A quantidade de horas não pode ser negativa.");
        return;
    }
    if (customHours) {
        totalHours = parseInt(customHours);
        document.getElementById('custom-hours-input').classList.add('hidden');
        document.getElementById('initial-screen').classList.add('hidden');
        document.getElementById('absence-screen').classList.remove('hidden');
    }
}

function calculateAbsences() {
    const absenceHours = document.getElementById('absence-hours').value;
    if (absenceHours < 0) {
        alert("A quantidade de faltas não pode ser negativa.");
        return;
    }
    if (absenceHours) {
        const allowedAbsences = Math.floor(totalHours * 0.25);
        const remainingAbsences = allowedAbsences - Math.floor(absenceHours);
        const resultMessage = document.getElementById('result-message');
        const resultImage = document.getElementById('result-image');

        if (remainingAbsences >= 0) {
            document.getElementById('result-message').classList.remove('hidden');
            document.getElementById('result-image').classList.remove('hidden');
            resultMessage.textContent = `Você ainda pode faltar ${remainingAbsences} horas.`;
            resultImage.src = 'images/falte.jpeg'; 
        } else {
            document.getElementById('result-message').classList.remove('hidden');
            document.getElementById('result-image').classList.remove('hidden');
            resultMessage.textContent = `Você ultrapassou o limite de faltas em ${Math.abs(remainingAbsences)} horas.`;
            resultImage.src = 'images/reprovou.gif'; 
        }

        document.getElementById('absence-screen').classList.add('hidden');
        document.getElementById('result-screen').classList.remove('hidden');
    }
}

function goBackToInitial() {
    document.getElementById('absence-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('result-message').classList.add('hidden');
    document.getElementById('result-image').classList.add('hidden');
    document.getElementById('initial-screen').classList.remove('hidden');
    document.getElementById('custom-hours-input').classList.add('hidden');
    document.getElementById('absence-hours').value = '';
    totalHours = 0;
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.src = document.body.classList.contains('dark-mode') ? 'images/claro.png' : 'images/claro.png';
});