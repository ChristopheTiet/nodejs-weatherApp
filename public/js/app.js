const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevent refresh of the page
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    if (!response) messageOne.textContent = error
    response.json().then((data) => {
        messageOne.textContent = data.location
        messageTwo.textContent = data.temperature
        })
    })
})