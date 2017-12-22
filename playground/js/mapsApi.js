function initMap() {
    let location = {
        lat: 46.771210,
        lng: 23.623635
    };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: location
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}