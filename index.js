const form = document.querySelector('form')
const tot = []
const butt = []

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

  const button = document.createElement("button")
  button.innerText = "delete"
  button.addEventListener("click",delItem)
  item.appendChild(button)

  addItem(butt, button)
  addItem(tot,spell)

  return item
}

const addItem = function(arr, inp){
    arr.push(inp)
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

const delItem = function(){
    this.parentNode.parentNode.removeChild(this.parentNode)
    console.log(butt.indexOf(this))

    tot.splice(butt.indexOf(this),1)
    butt.splice(butt.indexOf(this),1)
}   

form.addEventListener('submit', handleSubmit)
