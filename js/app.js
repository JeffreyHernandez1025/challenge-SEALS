/**
 * Jeffrey Hernandez
 * hernandezjeffrey2510@gmail.com
 * 
 * This file contains a function that will trigger a hidden animation which makes all the text rainbow.
 */
const secretBtnOn = document.getElementById('secretOn')
const secretBtnOff = document.getElementById('secretOff')

// triggers animation 
function secretOn() {
    const secretTag = document.getElementsByTagName("p")[0]
    const secretTag2 = document.getElementsByTagName("p")[1]
    const secretTag3 = document.getElementsByTagName("p")[2]

    secretTag.style.animation = 'secret .5s infinite alternate'
    secretTag2.style.animation = 'secret .5s infinite alternate'
    secretTag3.style.animation = 'secret .5s infinite alternate'
}
// turns off animation
function secretOff() {
    const secretTag = document.getElementsByTagName("p")[0]
    const secretTag2 = document.getElementsByTagName("p")[1]
    const secretTag3 = document.getElementsByTagName("p")[2]

    secretTag.style.animation = 'notSecret .5s infinite alternate'
    secretTag2.style.animation = 'notSecret .5s infinite alternate'
    secretTag3.style.animation = 'notSecret .5s infinite alternate'
}

secretBtnOn.addEventListener('click', secretOn)
secretBtnOff.addEventListener('click', secretOff)