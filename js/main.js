
let header = document.querySelector(".header-navigation")
window.onscroll = function(){
  if(window.scrollY > 100){
    header.style.background = "#000000ed"
    header.style.width = "100%"
  }
  else{
    header.style.background = "rgba(0, 0, 0, 0)"
  }
}