// define your functions here


function changeColor(){
    document.getElementsByTagName("strong")[0].style.color = "yellow";
    document.getElementsByTagName("strong")[1].style.color = "yellow";
    document.getElementsByTagName("strong")[2].style.color = "yellow";
}

document.getElementsByTagName("a")[0].addEventListener("mouseover",changeColor);


// var letters = ["red","white","blue", "orange","gray","yellow"];
// function getRandomColor() {
    
//     var color = letters[Math.floor(Math.random() * 6)];
//     return color;
    
//   }

//  console.log(letters[3]);

// function changeColors() {
//     document.getElementsByTagName("strong")[0].style.color = getRandomColor;
// }


//     document.getElementsByTagName("strong")[0].addEventListener("mouseover", changeColors);
//     document.getElementsByTagName("p")[1].innerHTML = color;

var letters = ["red","pink","blue", "orange","gray","yellow","brown","black","green"];
var color0 = letters[Math.floor(Math.random() * 9)];
var color1 = letters[Math.floor(Math.random() * 9)];
var color2 = letters[Math.floor(Math.random() * 9)];
function changeColors0()
    {
        document.getElementsByTagName("strong")[0].style.color = color0;
    }
function changeColors1()
    {
        document.getElementsByTagName("strong")[1].style.color = color1;
    }
function changeColors2()
    {
        document.getElementsByTagName("strong")[2].style.color = color2;
    }
document.getElementsByTagName("strong")[0].addEventListener("mouseover", changeColors0);
document.getElementsByTagName("strong")[1].addEventListener("mouseover", changeColors1);
document.getElementsByTagName("strong")[2].addEventListener("mouseover", changeColors2);


