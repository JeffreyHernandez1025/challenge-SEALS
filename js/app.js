/**
 * Jeffrey Hernandez
 * hernandezjeffrey2510@gmail.com
 * 
 * This file contains a function that will trigger a hidden animation which makes all the text rainbow.
 */

const secretBtn = document.querySelector("#secret")
const stylesheet = document.styleSheets[0]
const secretTag = [...stylesheet.cssRules].find((r) => r.selectorText === "p")

console.log(secretTag)



function secret() {
    const newAnim = 'Secret .5 infinite alternate'

    if (secretTag.style.setProperty('animation', 'notSecret .5s infinite alternate')) {
        secretTag.style.setProperty('animation', newAnim)
    } else {
        secretTag.style.setProperty('animation', 'notSecret .5s infinite alternate')
    }
}

secretBtn.addEventListener('click', secret)