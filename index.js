const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value
  const manaCost = f.manaCost.value

  const spellsDiv = document.querySelector('#spells')
  spellsDiv.innerHTML += `<li>${spellName}</li>`

  const manaDiv = document.querySelector('#cost')
  manaDiv.innerHTML += `<li>${manaCost}</li>`

  f.reset()
}

form.addEventListener('submit', changeHeading)
