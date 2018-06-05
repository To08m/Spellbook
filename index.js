console.log('testing')

const button = document.querySelector('button')

const changeText = function(){
    const heading = document.querySelector('#spells')
    const form = document.querySelector('form')//proper selector?
    heading.textContent += ' '+ form.spellName.value
    form.spellName.value = ''
}

document.querySelector('input').onkeypress = function(event){
    const keyCode = event.keyCode
    if (keyCode === 13){
        const heading = document.querySelector('#spells')
        const form = document.querySelector('form')
        heading.textContent += ' ' + form.spellName.value
        form.spellName.value = ''
        return false
    }
  }

button.addEventListener('click', changeText)
