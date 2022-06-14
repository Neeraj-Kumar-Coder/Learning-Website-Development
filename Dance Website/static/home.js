document.body.onscroll = () => {
    let scrolltotop = document.scrollingElement.scrollTop;
    let target = document.getElementById("intro-section");
    let xvalue = "center";
    let factor = 0.5;
    let yvalue = scrolltotop * factor - 85;

    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}