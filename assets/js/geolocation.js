//script de geolocalizacion linkeado a start-page
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    //Este js es para enviar a localStorage en la consola mostrando un texto concatenando el item
//storage.setItem(keyName, keyValue);
    console.log('latitud'+ localStorage.setItem('latitud',position.coords.latitude));
    console.log('latitud'+ localStorage.setItem('longitud',position.coords.longitude));
	debugger
//redireccionar start-page a page01.html
    var url = "page01.html"; 
	$(location).attr('href',url);
	debugger
}


