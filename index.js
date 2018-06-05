const form = document.querySelector('form')


const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const li1 = document.createElement("LI")
  const li2 = document.createElement("LI")
  
  const spellName = document.createTextNode(f.spellName.value)
  const manaCost = document.createTextNode(f.manaCost.value)

  li1.appendChild(spellName)
  li2.appendChild(manaCost)

  const spellsDiv = document.querySelector('#spells')
  const manaDiv = document.querySelector('#cost')

  spellsDiv.appendChild(li1)
  manaDiv.appendChild(li2)
  
  f.reset()
}

form.addEventListener('submit', changeHeading)