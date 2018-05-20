function initMap() {
    var varde = {
        lat: 55.623335,
        lng: 8.481852
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: varde
    });
    var marker = new google.maps.Marker({
        position: varde,
        map: map
    });
}
