const form = document.querySelector('form')


const addSpell = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const li1 = document.createElement("LI")
  
  const spellName = document.createTextNode(f.spellName.value)

  li1.appendChild(spellName)

  const spellsList = document.querySelector('#spells')

  spellsList.appendChild(li1)

  /*spans with innerHTML
  spellsDiv.innerHTML += `
    <li>
      <span class="spellName">${spellName}</span>,
      <span class="level">lvl ${level}</span>
    </li>
  `
  */

  /*spans with createElement and appendChild
    const nameSpan = document.createElement('span')
     nameSpan.textContent = spellName

     const levelSpan = document.createElement('span')
     levelSpan.textContent = level

     const item = document.createElement('li')
     item.appendChild(nameSpan)
     item.appendChild(levelSpan)

     list.appendChild(item)
  */
}

const addMana = function(ev){
    ev.preventDefault()
    const f = ev.target

    const li2 = document.createElement("LI")

    const manaCost = document.createTextNode(f.manaCost.value)

    li2.appendChild(manaCost)

    const manaList = document.querySelector('#cost')

    manaList.appendChild(li2)
}

const addPow = function(ev){
    ev.preventDefault()
    const f = ev.target

    const li3 = document.createElement("LI")

    const powVal = document.createTextNode(f.power.value)

    li3.appendChild(powVal)

    const powList = document.querySelector('#str')

    powList.appendChild(li3)

    f.reset()
}

form.addEventListener("submit",addSpell)
form.addEventListener("submit",addMana)
form.addEventListener("submit",addPow)