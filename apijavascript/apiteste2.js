const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"

}

.then(tempo=>tempo.json() )
.then(clima=>console.log(clima)).catch(erro=>console.log(erro))