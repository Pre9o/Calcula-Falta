let totalHours = 0;

function selectHours(hours) {
    totalHours = hours;
    document.getElementById('absence-input').classList.remove('hidden');
}

function showCustomHoursInput() {
    document.getElementById('custom-hours-input').classList.remove('hidden');
}

function selectCustomHours() {
    const customHours = document.getElementById('custom-hours').value;
    if (customHours) {
        totalHours = parseInt(customHours);
        document.getElementById('custom-hours-input').classList.add('hidden');
        document.getElementById('absence-input').classList.remove('hidden');
    }
}

function calculateAbsences() {
    const absenceHours = document.getElementById('absence-hours').value;
    if (absenceHours) {
        const allowedAbsences = Math.floor(totalHours * 0.25);
        const remainingAbsences = allowedAbsences - Math.floor(absenceHours);
        const resultMessage = document.getElementById('result-message');
        const resultImage = document.getElementById('result-image');

        if (remainingAbsences >= 0) {
            resultMessage.textContent = `Você ainda pode faltar ${remainingAbsences} horas.`;
            resultImage.src = 'images/falte.jpeg'; 
        } else {
            resultMessage.textContent = `Você ultrapassou o limite de faltas em ${Math.abs(remainingAbsences)} horas.`;
            resultImage.src = 'images/reprovou.gif'; 
        }

        document.getElementById('result').classList.remove('hidden');
    }
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.src = document.body.classList.contains('dark-mode') ? 'images/claro.png' : 'images/claro.png';
});