console.log('testing')

const button = document.querySelector('button')


const changeText = function(){
    const heading = document.querySelector('h2')
    const form = document.querySelector('input');//proper selector?
    heading.textContent = form.value;
}

document.querySelector('input').onkeypress = function(event){
    const keyCode = event.keyCode
    if (keyCode === 13){
        const heading = document.querySelector('h2')
        const form = document.querySelector('input')
        heading.textContent = form.value
        return false
    }
  }

button.addEventListener('click', changeText)
