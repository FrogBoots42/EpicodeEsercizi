/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
 In JavaScript esistono 5 diversi datatype, essi si dividono in:

 Stringhe, sequenze di caratteri di qualunque tipo (sia numeri che lettere), delimitati da apici che fanno da delimitatori
 (sia '' che "", non c'é differenza, basta che siano uguali all'inizio e alla fine)
 Un esempio di stringa puó essere: var miaVariabile = "John";

 Numeri, come da nome, non sono contenuti tra degli apici, rappresentano ogni prodotto numerico (numeri interi, decimali e negativi), esiste anche il valore NaN (not a number)
 il quale indica un valore numerico non definito. 
 Esempi di numeri possono essere: var miaVariabile = 10; / var miaVariabile = 1.5; / var miaVariabile = -5; / var miaVariabile = NaN;

 Boolean, indicano uno stato positivo o negativo, hanno quindi solo due valori possibili, 1 (true) o 0 (false).
 Un esempio di boolean puó essere: var isBool = true;

 Null, valore speciale utilizzato per rappresentare l'assenza di valore, é diverso da una stringa vuota.
 Esempio: var age = null; ----> console.log(age); ritornerá "null"

 Undefined, rappresenta un valore non esistente, é diverso da null in quanto é rappresentato da una stringa vuota,  spesso indica una variabile non inizializzata.
 Esempio: var age; ----> console.log(age); ritornerá "undefined"

*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var nome = "Manuel";
console.log(nome); //utilizzo nome in quanto name é considerato deprecato e viene tagliato (funziona lo stesso ma mi da fastidio vederlo)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20); 

// oppure 

var a = 12;
var b = 20;

console.log(a + b);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* Rimuovere questo commento per visualizzare sulla console

var nome = "Del Giudice"

console.log(nome); 

const NUM = 10

console.log(NUM);

NUM = 15 // tento di riassegnare il valore della costante (impossibile), creando cosí un errore

console.log(NUM); // questa stringa non verrá eseguita a causa dell'errore (visibile sulla console)

*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "john";
var name2 = "John";

console.log((name1 != name2)); // utilizzo != per verificare che siano diversi, dato che lo sono, la console ritornerá il valore bool "true"

console.log((name1.toLowerCase() === name2.toLowerCase())); // Utilizzo toLowerCase per convertire tutti i caratteri della stringa in lowercase,
                                                            // verifico che siano uguali, in quanto lo sono, la console ritornerá il valore bool "true"


