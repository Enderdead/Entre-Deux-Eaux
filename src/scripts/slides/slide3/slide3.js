var slide3content = document.getElementById("slide3content")

var enBref = "Description en bref"

var enDetail = "Description en détail"


slide3content.innerHTML = enBref;

function changeSlide3Content(mode) {
    if (mode == "bref") {
        slide3content.innerHTML = enBref;
    } else {
        slide3content.innerHTML = enDetail;
    }
};