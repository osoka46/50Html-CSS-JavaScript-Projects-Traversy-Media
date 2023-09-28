var elementList=document.querySelectorAll(".container .panel");


for(let temp=0;temp<elementList.length;temp++) {
    const element=elementList[temp];

   
    elementList[temp].addEventListener("click",function(){
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");

    })
}