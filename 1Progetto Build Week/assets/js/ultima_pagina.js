//Creiamo un array di tutte le nostre ion icon
const arrayStars = [...document.querySelectorAll('ion-icon')]
//Creiamo una funzione rating
function rating(stars) {
    const starsLenght = stars.length;
    
    let i;
//Applichiamo una funzione onclick alle stelle richiamando l'array stars
    stars.map((star)=> {
        star.onclick = () => {
            //indichiamo l'indice della stella selezionata
            i = stars.indexOf(star);
            //Quin andiamo a definire le condizioni della funzione
            if(star.className.includes('starInactive')) {               
                for (i; i>=0; --i) {
                    stars[i].className = 'starActive';
                }
            } else {
                for (i;i < starsLenght; ++i) stars[i].className = 'starInactive';
            }
        }
    }) 
}
rating(arrayStars);

let j;
//Applichiamo una funzione mouseover alle stelle
arrayStars.forEach(star => {
    star.addEventListener('mouseover', function () {
        j = arrayStars.indexOf(star);

        if(star.className.includes('starInactive')) {
        for(j; j>=0; --j)
            arrayStars[j].classList.add('overStarActive');
        }
    })
})
//Applichiamo una funzione di mouseout alle stelle
arrayStars.forEach(star => {
    star.addEventListener('mouseout', function () {

        if(star.className.includes('overStarActive')) {
        for(j=0; j<arrayStars.length; ++j)
            arrayStars[j].classList.remove('overStarActive');
        }
    })
})

