const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }
const onPeopleResponce = function(persona) {
    console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponce)
}

for (i = 88; i < 99; i++) {
    obtenerPersonaje(i)
}


// $.get(lukeUrl, opts, onPeopleResponce)