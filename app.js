alerl("hello world");
function backgroundColorChange() {
    var section = document.getElementById("section1");
    var userColor = prompt("Enter Color For Background Color");
    section.style.backgroundColor = userColor;
}

function textColor() {
    var heading = document.getElementsByTagName("h1")
    var userColor = prompt("Enter Color For Text Color");
    for (var i = 0; i < heading.length; i++) {
        heading[i].style.color = userColor
    }
}

function showImage() {
    var myImage = document.getElementById("myImage");
    myImage.style.display = "white";
    myImage.style.margin = "auto";


}

function bigImage() {
    var myImage = document.getElementById("myImage");
    myImage.className = "bigImage";


}

function smallImage() {
    var myImage = document.getElementById("myImage");
    myImage.className = " smallImage";

}

function hideImage() {
    var myImage = document.getElementById("myImage");
    myImage.style.display = "none"
    console.log(myImg);
}



function bulbOn(e) {
    e.src = "./img/bulb.jfif"
}

function bulbOf(e) {
    e.src = "./img/bulboff.jfif"
}


function changeParaColor(){
    var paraColor1 = prompt("Write a color name for 1 para")
    var paraColor2 = prompt("Write a color name for 2 para")
    var paraColor3 = prompt("Write a color name for 3 para")
    var paraColor4 = prompt("Write a color name for 4 para")
    document.getElementsByTagName("P")[0].style.color = paraColor1;
    document.getElementsByTagName("P")[1].style.color = paraColor2;
    document.getElementsByTagName("P")[2].style.color = paraColor3;
    document.getElementsByTagName("P")[3].style.color = paraColor4;
}

function changeParaColor2(){
    var paraColor1 = prompt("Write a color name for 1 para")
    
    var paraColor4 = prompt("Write a color name for 4 para")
    document.getElementsByTagName("P")[4].style.color = paraColor1;
    document.getElementsByTagName("P")[7].style.color = paraColor4;
}