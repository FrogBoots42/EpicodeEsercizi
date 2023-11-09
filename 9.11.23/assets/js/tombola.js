// 1. Funzione che genera la tabella con  tutti i numeri
// 2. Funzione che scrive i numeri (push in un array)
// 3. Funzione (associata al bottone) che genera dei numeri randomici
// 4. Funzione che aggiunge una classe classList.add ('highlight')
// 5. EXTRA funzione che genera delle tabelle piú piccole da 24
// FUNZIONI VANNO DICHIARATE E INVOCATE

const numbersInTab = []  // Qui tengo i numeri della tabella 

function numberGenerator() {               // Qui genero i numeri da 1 a 76
    for (let i = 1; i <= 76; i++) {
        numbersInTab.push(i);
    }
}
numberGenerator();
console.log(numbersInTab);

function tableGenerator() {
    const tableDiv = document.getElementById('table')
    const table = document.createElement('table')
    for (let i = 0; i < numbersInTab.length; i++) {
        const tableNumber = document.createElement('td')
        tableNumber.innerText = numbersInTab[i]
        table.appendChild(tableNumber)
    }
    tableDiv.appendChild(table)
}
tableGenerator();

// Controllo che il numero generato combaci con uno all'interno della tabella 

function highlightSameNumber(randomNumber) {
    const tableNumbers = document.getElementsByTagName('td');
    for (let i = 0; i < tableNumbers.length; i++) {
        if (parseInt(tableNumbers[i].textContent) === randomNumber) {
            tableNumbers[i].classList.add('highlighted');
        }
    }
}


// Genero i numeri casuali 
const randomNumArray = [];  // creo un array che li contenga
const generateRandom = function randomNumberGenerator() {
    const randomNumber = Math.floor((Math.random() * 76) + 1);       // genero un numero tra 1 e 76
    randomNumArray.push(randomNumber);
    console.log(randomNumArray);
    highlightSameNumber(randomNumber);
}








