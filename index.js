const form = document.querySelector('form')


const addSpell = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const li1 = document.createElement("LI")
  
  const spellName = document.createTextNode(f.spellName.value)

  li1.appendChild(spellName)

  const spellsDiv = document.querySelector('#spells')

  spellsDiv.appendChild(li1)
}

const addMana = function(ev){
    ev.preventDefault()
    const f = ev.target

    const li2 = document.createElement("LI")

    const manaCost = document.createTextNode(f.manaCost.value)

    li2.appendChild(manaCost)

    const manaDiv = document.querySelector('#cost')

    manaDiv.appendChild(li2)

    f.reset()
}

function runAll(ev){
    
}

form.addEventListener("submit",addSpell)
form.addEventListener("submit",addMana)