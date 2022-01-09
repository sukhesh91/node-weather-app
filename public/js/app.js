const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg-1')
const msg2 = document.querySelector('#msg-2')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    msg1.textContent = 'Loading...'
    msg2.textContent = ''
    fetch('/weather?address='+search.value).then((response) => {
    response.json().then((data) => {
        if(data.error){
            msg1.textContent = data.error
            msg2.textContent = ''
        }
        else{
            msg1.textContent = data.location +'. Local time is ' + data.localtime
            msg2.textContent = 'It is currently ' + data.weatherdesc + ' and ' + data.temperature + ' degrees out there. And it feels like ' + data.feels_like + ' degrees.'
        }
    })
})

})