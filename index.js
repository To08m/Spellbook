console.log('testing')

const button = document.querySelector('button')

const changeText = function(){
    const heading = document.querySelector('#spells')
    const form = document.querySelector('form')//proper selector?
    heading.innerHTML += '<p>'+ form.spellName.value +'</p>'
    form.spellName.value = ''
}

document.querySelector('input').onkeypress = function(event){
    const keyCode = event.keyCode
    if (keyCode === 13){
        const heading = document.querySelector('#spells')
        const form = document.querySelector('form')
        heading.innerHTML += '<p>'+ form.spellName.value +'</p>'
        form.spellName.value = ''
        return false
    }
  }

button.addEventListener('click', changeText)
