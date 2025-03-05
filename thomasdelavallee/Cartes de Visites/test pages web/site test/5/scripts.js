function initMap() {
    var location = {lat: 50.5973, lng: 3.6200}; // Coordinates for Leuze-en-Hainaut
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}