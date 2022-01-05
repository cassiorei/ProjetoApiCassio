function fazget(url) {
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText

}

function crialinha(usuario) {

}

function main() {
 console.log(fazget)= fazget("http://api.weatherstack.com/current")
}

main()