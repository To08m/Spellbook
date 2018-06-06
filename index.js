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
     nameSpan.classList.add('spellName')

     const levelSpan = document.createElement('span')
     levelSpan.textContent = level
     levelSpan.classList.add('level')

     const item = document.createElement('li')
     item.classList.add('spell')
     item.appendChild(nameSpan)
     item.appendChild(levelSpan)

     list.appendChild(item)
  */

  /*
const renderProperty = function(name, value) {
  const el = document.createElement('span')
  el.textContent = value
  el.classList.add(name)
  return el
}

const renderItem = function(spell) {
  // ['name', 'level']
  properties = Object.keys(spell)

  // collect an array of renderProperty's return values
  // (an array of <span> elements)
  const childElements = properties.map(function(property) {
    return renderProperty(property, spell[property])
  })

  const item = document.createElement('li')
  item.classList.add('spell')

  // append each <span> to the <li>
  childElements.forEach(function(el) {
    item.appendChild(el)
  })

  return item
}

const handleSubmit = function(ev) {
  ev.preventDefault()

  const f = ev.target

  const spell = {
    name: f.spellName.value,
    level: f.level.value,
  }

  const item = renderItem(spell)

  const list = document.querySelector('#spells')
  list.appendChild(item)

  f.reset()
}
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