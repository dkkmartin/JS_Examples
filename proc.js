// Tager fat i alle HTML elementerne vi skal bruge
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const bigImg = document.querySelector('.bigImg')

//Tager fat i ALLE elementer med class (.thumbnails) og HTML element img
const thumbnails = document.querySelectorAll('.thumbnails img')

// Bruges til at sætte tal på, på det billede vi skal bruge med arrows
let index = 1;

// Lytter efter 'click' på de elementer vi har taget fat i 
//Når der bliver klikket sender den info fra hvilket thumbnail der blev klikket med
//cangePhotoClick(billedet[nummer af billedet])
//
//i er 0, mens i er mindre end thumbnails længde, kør denne loop, plus 1 til i
//efter hvert loop
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
        changePhotoClick(thumbnails[i])
        setActive(thumbnails[i])
    })
}

//Lytter efter clicks på arrows og køre function der tilhøre dem
right.addEventListener('click', showNext)
left.addEventListener('click', showPrev)

//function for når left arrow bliver klikket
function showPrev() {
    //hvis index er større end 1
    if (index > 1) {
        //index skal minus 1 fra sig selv
        index--; 
    }

    //Hvis ikke index er større end 1
    else {
        index = 6;
    }
    changePhotoArrow();
}

//function for når right arrow bliver klikket
function showNext() {

    //hvis index er mindre end 1
    if (index < 6) {

        //index skal plus 1 på sig selv
        index++; 
    }

    //Hvis ikke index er mindre end 6
    else {
        index = 1;
    }
    changePhotoArrow();
}

//function for at skifte src på bigImg med brug af vores index variable -
//og som bliver kørt når vi trykker på arrows
function changePhotoArrow() {
    let newSrc = 'images/proc_' + index + '.jpg'
    bigImg.setAttribute('src', newSrc)
}

//function når thumbnails bliver klikket.
//e er en parameter som indholder thumbnail information som bliver sendt af
//for løkken længere oppe
function changePhotoClick(e) {

    //Skifter det store billede (bigImg) src med src fra thumbnail der blev send (e)
    bigImg.setAttribute('src', e.src)
   
}

//function for at sætte border på de valgte billeder
//og fjerne border på sidste aktive billed
function setActive(e) {

    //Gemmer det aktive billede
    let lastActive = document.querySelector('.active')

    //Hvis det klikkede billede (e) 
    //ikke er lige med det sidste aktive billede (lastActive)
    if (e !== lastActive) {

        //Sidste aktive får fjernet sin border
        lastActive.classList.remove('active')

        //Den nye klikkede får en border
        e.classList.add('active')
    } 
}