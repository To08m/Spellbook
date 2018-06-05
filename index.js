console.log('testing')

const button = document.querySelector('button')

const changeText = function(){
    const heading = document.querySelector('#list')
    const form = document.querySelector('form')
    heading.innerHTML += `<p>${form.spellName.value}</p>` //'<p>'+ form.spellName.value +'</p>'
    //form.spellName.value = ''
    form.reset()
}

document.querySelector('input').onkeypress = function(event){
    const keyCode = event.keyCode
    if (keyCode === 13){
        const heading = document.querySelector('#list')
        const form = document.querySelector('form')
        heading.innerHTML += '<li>'+ form.spellName.value +'</li>'
        form.reset()
        return false
    }
  }

button.addEventListener('click', changeText)
