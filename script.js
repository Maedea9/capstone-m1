const menuIcon =document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".close-menu-icon"); 

menuIcon.addEventListener("click",()=>{
    menu.style.display = "block";
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
});

closeIcon.addEventListener("click",()=>{
    menu.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
});