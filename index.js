const form = document.querySelector('form')


const addSpell = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const li1 = document.createElement("LI")
  
  const spellName = document.createTextNode(f.spellName.value)

  li1.appendChild(spellName)

  const spellsDiv = document.querySelector('#spells')

  spellsDiv.appendChild(li1)

  /*spellsDiv.innerHTML += `
    <li>
      <span class="spellName">${spellName}</span>,
      <span class="level">lvl ${level}</span>
    </li>
  `*/
}

const addMana = function(ev){
    ev.preventDefault()
    const f = ev.target

    const li2 = document.createElement("LI")

    const manaCost = document.createTextNode(f.manaCost.value)

    li2.appendChild(manaCost)

    const manaDiv = document.querySelector('#cost')

    manaDiv.appendChild(li2)
}

const addPow = function(ev){
    ev.preventDefault()
    const f = ev.target

    const li3 = document.createElement("LI")

    const powVal = document.createTextNode(f.power.value)

    li3.appendChild(powVal)

    const powDiv = document.querySelector('#str')

    powDiv.appendChild(li3)

    f.reset()
}

form.addEventListener("submit",addSpell)
form.addEventListener("submit",addMana)
form.addEventListener("submit",addPow)