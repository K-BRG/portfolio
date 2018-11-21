function addResponsive() {
    var x = document.getElementById("mySidenav");
    if (x.className === "sidenav") {
        x.className += " responsive";
    } else {
        x.className = "sidenav";
    }
}