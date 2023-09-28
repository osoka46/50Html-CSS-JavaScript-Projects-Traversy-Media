var elementList=document.querySelectorAll(".container .panel");
var elementListActive=document.querySelectorAll(".active");
for(let temp=0;temp<elementList.length;temp++) {
    const element=elementList[temp];
    const elementA=elementListActive[temp];

    elementA.classList.remove("active");
    element.classList.add("active");
    
}