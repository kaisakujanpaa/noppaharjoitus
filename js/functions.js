//'use strict'

// Arvotaan satunnaisluku välillä 1-6
getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

// Kuuntelija div-elementille (id dice), joka suoritetaan, kun käyttäjä painaa (click) 
// diviä jossa nopan kuva on
document.querySelector('#dice').addEventListener('click',() => {
    const randomizedNumber = getRandomIntNumberInRange(1, 6)

    // Asetetaan arvotun luvun mukaan uusi kuva img-elementille src-ominaisuuteen
    document.getElementById('pic').src = "./img/" + randomizedNumber + ".png"
    
})