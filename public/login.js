document.getElementsByClassName("box")[0].style.backdropFilter = "blur(20px)";

function blurFocus(index) {
    var y = document.getElementsByTagName("span")[index];
    var x = document.getElementsByTagName("Input")[index];
    if(x.value!=""){
        y.style.color= "#45f3ff";
        y.style.transform= "translateX(0px) translateY(-34px)";
        y.style.fontSize = "0.75em";
    }else{
        y.style.color= "#8f8f8f";
        y.style.transform= "translateX(0px) translateY(0px)";
        y.style.fontSize = "1em";
    }
    y = document.getElementsByTagName("i")[index];
    if(x.value!=""){
        y.style.height="44px";
    }else{
        y.style.height="2px";
    }
}

function onFocus(index){
    var y = document.getElementsByTagName("i")[index];
    y.style.color= "#8f8f8f";
    y.style.height="44px";
    y=document.getElementsByTagName("span")[index];
    y.style.color= "#45f3ff";
    y.style.transform= "translateX(0px) translateY(-34px)";
    y.style.fontSize = "0.75em";
}

// document.getElementsByTagName("input")[i].value  Value of iTh input


// function emailOnFocus() {
//     var y = document.getElementsByTagName("span")[1];
//         y.style.color= "#8f8f8f";
//         y.style.transform= "translateX(0px) translateY(-34px)";
//         y.style.fontSize = "0.75em";
// }



    // document.getElementsByTagName("i")[1].style.height="44px";
// var y = document.getElementsByTagName("i")[1];
// console.log(x);
// console.log(y);
// // lostfocus
// function myFunction() {
//     var y = document.getElementsByTagName("i")[1];
//     if(x.value!=""){
//         y.style.height="44px";
//     }else{
//         y.style.height="2px";
//     }
//     console.log("Yha pe blur ho raha hai");
// }