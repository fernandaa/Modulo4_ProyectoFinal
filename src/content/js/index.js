const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1');
const ubicacion = document.querySelector('#ubicacion');
const temp = document.querySelector('#temp');
const sensacion = document.querySelector('#sensacion');
const humedad = document.querySelector('#humedad');
const leyenda = document.querySelector('#leyenda');
const uv = document.querySelector('#uv');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("here");

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageOne.textContent = '';
    ubicacion.textContent = '';
    leyenda.textContent = '';
    temp.textContent = '' ;
    sensacion.textContent = '';
    humedad.textContent = ''
    uv.textContent = '';


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.forecast.error) {
                messageOne.textContent =data.forecast.error.message;
            } else {
                console.log(data);
                messageOne.textContent = '';
                ubicacion.textContent = data.forecast.location.name;
                leyenda.textContent = data.forecast.current.condition.text;
                temp.textContent = data.forecast.current.temp_c ;
                sensacion.textContent = data.forecast.current.feelslike_c;
                humedad.textContent = data.forecast.current.humidity;
                uv.textContent = data.forecast.current.uv;
            }
        })
    })
})