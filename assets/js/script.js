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

/* Program Javascript */

// Smider alle med classen "day" ind i en variabel
var acc = document.getElementsByClassName("day");
// Smider alle med classen "panel" ind i en variabel
var panel = document.getElementsByClassName('panel');
// Denne kører for hver gang der er et element der har classen "day"
for (var i = 0; i < acc.length; i++) {
    // Dette er en funktion når man klikker på et element der har classen "day"
    acc[i].onclick = function() {
      // Denne variabel tjekker om den du klikker har på classen "active"
      var setClasses = !this.classList.contains('active');
      // Her fjerner man classen active og show på "day" og "panel"
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        // Denne tjekker om variabelen setClasses er sand
        if (setClasses) {
          // Det element du trykker på får classen "active"
            this.classList.toggle("active");
          // Dette tager element lige efter classen "day" som er "panel" og tilføjer classen "show"
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

// Opretter en funktioner som placerer de forskellige classes
function setClass(els, className, fnName) {
  // Denne kører hver gang den skal tilføje en class så 2 gange i disse tilfælde
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

/* Javascript til datoen */

// Opretter en variabel hvor jeg gemmer dato for festivalen
var countDownDate = new Date("August 6, 2018").getTime();
// Denne variabel kører funktionen hvert sekund for at tjekke om der er sket ændringer
var x = setInterval(function() {
  // Skaffer den nuværende dato
    var now = new Date().getTime();
    // Tjekker hvor stor forskel der er på festivals dato og den nuværende dato
    var distance = countDownDate - now;
    // Udregner hvor mange dage der er til festivalen
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // Udregner hvor mange timer der er til eventet
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Udregner hvor mange minutter der er til eventet
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // Smider de forskellige variabler ind i en div med id countdown og smider et <p> tag rundt om
    document.getElementById("countdown").innerHTML = "<p>" + days + " dage " + hours + " timer " +
        minutes + " minutter </p>";
}, 1000);
 
