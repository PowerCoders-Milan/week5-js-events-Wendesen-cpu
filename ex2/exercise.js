var wid = window.innerWidth;
var hgt = window.innerHeight;
var bd = document.getElementsByTagName("body")[0];
document.getElementsByTagName("p")[1].innerHTML= `The window has a width of ${wid} pixels and a  height of ${hgt} pixels`;

if(wid <= 300){
bd.style.backgroundColor = "green";
}

else if(wid <= 500){
    bd.style.backgroundColor = "black";
}else if(wid <= 700) {
    bd.style.backgroundColor = "yellow";
}else{
    bd.style.backgroundColor = "blue";
}