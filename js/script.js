

//$( document ).ready(function() {
    function getPais() {
        let pais = document.getElementById("pais").value;
    
    $.ajax({
        url: `http://api.weatherstack.com/current?access_key=92002235997d759c9b322b6c06cf90f7&query=${pais}`,
        type: "POST",
        //data: JSON.stringify(data),
        dataType: "json",
        complete: function (response) {
             if (response.responseJSON !== undefined) {
                response = response.responseJSON;
            }
            $('body').append(response.location.name);
        }
    });
};
