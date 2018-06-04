console.log('testing')

const button = document.getElementById('button')


const changeText = function(){
    const heading = document.getElementById('hd2')
    const form = document.getElementById('box');
    heading.textContent = form.value;
}

document.getElementById('box').onkeypress = function(event){
    const keyCode = event.keyCode
    if (keyCode === 13){
        const heading = document.getElementById('hd2')
        const form = document.getElementById('box')
        heading.textContent = form.value
        return false //why is this necessary?
    }
  }

button.addEventListener('click', changeText)
