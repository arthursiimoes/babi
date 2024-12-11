const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Tem certeza?',
  'Pense bem',
  'Escolha com carinho',
  'Pense muito bem',
  'Olhe para o outro botão',
  'Pense melhor',
  'Escolha com carinho'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})