


/*    
fetch ( "http://api.weatherstack.com/current?access_key=92002235997d759c9b322b6c06cf90f7&query=Brasil"
).then(res =>res.json()).then(console.log);
then(tempo=>tempo.json() )
.then(clima=>console.log(clima)).catch(erro=>console.log(erro))*/



   fetch ( "http://api.weatherstack.com/current?access_key=beaa4b99c84864db595284948f61a8a&query=NewYork"
    )

    .then(tempo=>tempo.json() )
    .then(clima=>console.log(clima)).catch(erro=>console.log(erro))




    /*{success: false, error: {…}}error: {code: 105, type: 'https_access_restricted', info: 'Access Restricted - Your current Subscription Plan does not support HTTPS Encryption.'}success: false[[Prototype]]: Object*/