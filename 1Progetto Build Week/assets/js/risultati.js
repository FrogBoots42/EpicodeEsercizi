const punteggio = localStorage.getItem('punteggio'); 
const nDomande = localStorage.getItem('nDomande');    // trasporto variabili punteggio e domande sul file 


// percentuali
const correctDiv = document.getElementById('correct');  // prendo elemento html correct 
const percentCorrect = punteggio*100/nDomande;          // creo variabile percentuale risposte corrette (divido punteggio per il numero di domande)
correctDiv.innerHTML += `<h2 class="titoli">${percentCorrect.toFixed(1)}%</h2>
                            <p>${punteggio}/${nDomande} questions</p>`  // Inserisco le variabili all'interno dell'elemento html

const wrongDiv = document.getElementById('wrong');
const percentWrong = (nDomande-punteggio)*100/nDomande;
wrongDiv.innerHTML += `<h2 class="titoli">${percentWrong.toFixed(1)}%</h2>
                        <p>${nDomande-punteggio}/${nDomande} questions</p>`  // stessa cosa ma percentuale risposte incorrette


// testo dentro al grafico
const grafico = document.getElementById('graficoSuccess');  // prendo elemento html graficoSuccess
if(percentCorrect >= 60) {  // se la percentuale é >= al 60%, stampo questo messaggio
    grafico.innerHTML = `<h4 class="titoli">Congratulations!</h4> <p class='sottotitolo' id="inBlue">You passed the exam.<br></p>
    <p id="piccolo">We'll send you the certificate<br> in few minutes.<br>
                    Check your email (including<br> promotions/spam folder)</p>`
}else {                    // se la percentuale é < al 60%, stampo questo
    grafico.innerHTML = `<h4 class="titoli">YOU SUCK!</h4> <p class='sottotitolo' id="pink">You failed the exam!<br></p>
    <p id="piccolo">We'll send you NOTHING.<br>
                    SHAME ON YOU<br> (including free insults on email)</p>`
}
//ringraziare manuel per questo voto


// link a pagina nuova
const btnRate = document.getElementById('btnRate');  // prendo elemento html bottone
btnRate.addEventListener('click', ultimaPagina);     // Se click -> funzione ultimaPagina

function ultimaPagina() {                            // dichiaro funzione ultimaPagina
    window.open('ultima_pagina.html', '_self');      // apre ultima pagina nella stessa finestra
}

// grafico donut percentuale
const ShadowPlugin = {                               // plugin ombra attorno a grafico donut
    beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    },
};

var yValues = [percentWrong, percentCorrect ];       // collego i valori percentuali al grafico donut

var barColors = [    
"#d20094",
"#00FFFF",                                           // colori grafico
];

new Chart("myChart", {                               // creo il grafico donut
type: "doughnut",
data: {
    datasets: [{
    backgroundColor: barColors,
    data: yValues,
    borderColor: "transparent",
    cutout: '70%',
    hoverOffset: 20,
    radius: '93%'
    }]
},
plugins:[ShadowPlugin],
});