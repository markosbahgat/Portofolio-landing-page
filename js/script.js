'use strict';

//document.getElementById('main-img-2').style.display = "none";

var par = document.querySelectorAll(".aqbs");
for (let i = 0; i < par.length; i++) {
    var element = par[i].style
    element.display = "none";
}
var par1 = document.querySelectorAll(".dropdown-para");
for (let i = 0; i < par1.length; i++) {
    var element1 = par1[i].style
    element1.display = "none";
}


function dis(){
    if (document.getElementById('dropdown-container').children[1].style.display == 'block') {
        document.getElementById('dropdown-container').children[1].style.display = 'none';
        document.getElementById("drop-button").innerHTML = "+";
        document.getElementById('dropdown-container').children[0].style.backgroundColor = 'transparent';
    } else {
        document.getElementById('dropdown-container').children[1].style.display = 'block';
        document.getElementById("drop-button").innerHTML = "-";
        document.getElementById('dropdown-container').children[0].style.backgroundColor = '#2c98f0';
    }
    
}


function dis1(){
    if (document.getElementById('dropdown-container1').children[1].style.display == 'block') {
        document.getElementById('dropdown-container1').children[1].style.display = 'none';
        document.getElementById('dropdown-container1').children[2].style.display = 'none';
        document.getElementById("drop-button1").innerHTML = "+";
        document.getElementById('dropdown-container1').children[0].style.backgroundColor = 'transparent';
    } else {
        document.getElementById('dropdown-container1').children[1].style.display = 'block';
        document.getElementById('dropdown-container1').children[1].style.marginBottom = '1em';
        document.getElementById('dropdown-container1').children[2].style.display = 'block';
        document.getElementById('dropdown-container1').children[2].style.marginLeft = '5em';
        document.getElementById("drop-button1").innerHTML = "-";
        document.getElementById('dropdown-container1').children[0].style.backgroundColor = '#2c98f0';
    }
    
}


function dis2(){
    if (document.getElementById('dropdown-container2').children[1].style.display == 'block') {
        document.getElementById('dropdown-container2').children[1].style.display = 'none';
        document.getElementById("drop-button2").innerHTML = "+";
        document.getElementById('dropdown-container2').children[0].style.backgroundColor = 'transparent';
    } else {
        document.getElementById('dropdown-container2').children[1].style.display = 'block';
        document.getElementById("drop-button2").innerHTML = "-";
        document.getElementById('dropdown-container2').children[0].style.backgroundColor = '#2c98f0';
    }
    
}


function dis3(){
    if (document.getElementById('dropdown-container3').children[1].style.display == 'block') {
        document.getElementById('dropdown-container3').children[1].style.display = 'none';
        document.getElementById("drop-button3").innerHTML = "+";
        document.getElementById('dropdown-container3').children[0].style.backgroundColor = 'transparent';
    } else {
        document.getElementById('dropdown-container3').children[1].style.display = 'block';
        document.getElementById("drop-button3").innerHTML = "-";
        document.getElementById('dropdown-container3').children[0].style.backgroundColor = '#2c98f0';
    }
    
}




function dis4(){
    if (document.getElementById('dropdown-container4').children[1].style.display == 'block') {
        document.getElementById('dropdown-container4').children[1].style.display = 'none';
        document.getElementById("drop-button4").innerHTML = "+";
        document.getElementById('dropdown-container4').children[0].style.backgroundColor = 'transparent';
    } else {
        document.getElementById('dropdown-container4').children[1].style.display = 'block';
        document.getElementById("drop-button4").innerHTML = "-";
        document.getElementById('dropdown-container4').children[0].style.backgroundColor = '#2c98f0';
    }
    
}
offsettop

var fuck = document.body.scrollTop

window.onscroll = function (){
    switch (true) {
        case (fuck > 200  && fuck < 400 || document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 400):
            document.getElementById("list-items1").children[2].children[0].className = "active1";
            document.getElementById("list-items1").children[1].children[0].className = "active";
            document.getElementById("list-items1").children[0].children[0].className = "active1";
            break;
        case (fuck > 400 && fuck < 800 || document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 800):
            document.getElementById("list-items1").children[3].children[0].className = "active1";
            document.getElementById("list-items1").children[2].children[0].className = "active";
            document.getElementById("list-items1").children[1].children[0].className = "active1";
            break;
        case (fuck > 800 && fuck < 1000 || document.documentElement.scrollTop > 800 && document.documentElement.scrollTop < 1000):
            document.getElementById("list-items1").children[4].children[0].className = "active1";
            document.getElementById("list-items1").children[3].children[0].className = "active";
            document.getElementById("list-items1").children[2].children[0].className = "active1";
            break;
        case (fuck > 1000 && fuck < 1400 || document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1400):
            document.getElementById("list-items1").children[5].children[0].className = "active1";
            document.getElementById("list-items1").children[4].children[0].className = "active";
            document.getElementById("list-items1").children[3].children[0].className = "active1";
            break;
        case (fuck > 1800 && fuck < 2200 || document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2200):
            document.getElementById("list-items1").children[6].children[0].className = "active1";
            document.getElementById("list-items1").children[5].children[0].className = "active";
            document.getElementById("list-items1").children[4].children[0].className = "active1";
            break;
        case (fuck > 2200 && fuck < 2500 || document.documentElement.scrollTop > 2200 && document.documentElement.scrollTop < 2500):
            document.getElementById("list-items1").children[7].children[0].className = "active1";
            document.getElementById("list-items1").children[6].children[0].className = "active";
            document.getElementById("list-items1").children[5].children[0].className = "active1";
            break;
        case (fuck > 2500 && fuck < 3000 || document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop < 3000):
            document.getElementById("list-items1").children[8].children[0].className = "active1";
            document.getElementById("list-items1").children[7].children[0].className = "active";
            document.getElementById("list-items1").children[6].children[0].className = "active1";
            break;
        case (fuck > 3000 && fuck < 3400 || document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3400):
            document.getElementById("list-items1").children[8].children[0].className = "active";
            document.getElementById("list-items1").children[7].children[0].className = "active1";
            break;
        default:
            document.getElementById("list-items1").children[1].children[0].className = "active1";
            document.getElementById("list-items1").children[0].children[0].className = "active";
            break;

}





  //if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //    document.getElementById("list-items1").children[1].children[0].className = "active";
    //    document.getElementById("list-items1").children[0].children[0].className = "active1";
//    } else {
 //       document.getElementById("list-items1").children[1].children[0].className = "active1";
  //      document.getElementById("list-items1").children[0].children[0].className = "active";
   // }
}