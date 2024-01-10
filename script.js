/*
    Student Name: Emwika Nanong
    File Name: script.js
    Date: 10-18-2023
*/
//1e, created global variables
var figElement = document.getElementById("placeholder");
              var imgSource = document.getElementById("image");
              var figCap = document.querySelector("figcaption");

//Function to display the first picture
function pic1() { //1d, added(), "", ;
    imgSource.src = "trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}
  
  //1f, added function named pic2
function pic2() {
  imgSource.src = "sanjuan.jpg";
  imgSource.alt = "Elevated view of San Juan coast";
  figElement.style.display ="block";
  figCap.textContent = "Coast of San Juan";
}

  //1g, added function named pic3
  function pic3() {
  imgSource.src = "curacao.jpg";
  imgSource.alt = "The blue water of Curacao";
  figElement.style.display ="block";
  figCap.textContent = "Curacao";
}