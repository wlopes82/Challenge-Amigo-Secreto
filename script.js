let names = [];

function addName() {
    const input = document.getElementById('nameInput');
    const name = input.value.trim();
    if (name && !names.includes(name)) {
        names.push(name);
        updateNameList();
        input.value = '';
    }
}

function updateNameList() {
    const list = document.getElementById('nameList');
    list.innerHTML = names.map(name => `<li>${name}</li>`).join('');
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawNames() {
    if (names.length < 2) {
        alert('Adicione pelo menos dois participantes!');
        return;
    }
    let shuffled = [...names];
    do { shuffle(shuffled); } while (shuffled.some((name, i) => name === names[i]));
    
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = names.map((name, i) => `<li>${name} → ${shuffled[i]}</li>`).join('');
}
