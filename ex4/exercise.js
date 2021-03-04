
document.getElementById("myInput").style.paddingLeft= "20px";
document.getElementById("myInput").style.marginLeft= "40px";
document.getElementById("myImage").style.paddingLeft= "20px";
document.getElementById("myImage").style.marginLeft= "40px";


function myFunction(){
    var a = document.getElementById("myInput").value
    document.getElementsByTagName("p")[0].innerHTML = a;
    console.log(a);
}

document.getElementById("myInput").addEventListener("input", myFunction);



function selector(){
    var b = document.getElementById("myImage").value
    if(b === "orange"){
    //document.getElementsByTagName("body").appendChild(document.createElement("img").setAttribute("src","orange.jpg"));
    document.getElementsByTagName("img")[0].setAttribute("src","orange.jpg")
    }else if(b === "apple"){
        //document.getElementsByTagName("body").appendChild(document.createElement("img").setAttribute("src","apple.jpg"));
        document.getElementsByTagName("img")[0].setAttribute("src","apple.jpg")
    } else if(b === "cameraman"){
        //document.getElementsByTagName("body").appendChild(document.createElement("img").setAttribute("src","cameraman.jpg"));
        document.getElementsByTagName("img")[0].setAttribute("src","cameraman.jpg")
    }

    console.log(a);
}

document.getElementById("myImage").addEventListener("input", selector);