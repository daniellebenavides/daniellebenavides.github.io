$(document).ready(()=> {


const projects=document.querySelectorAll(".galleryArt");

projects.forEach(project=> {
    project.addEventListener("click", function() {
        document.querySelector("body").style.overflow="hidden"
        document.querySelector("body").style.overflow="unset"
    })
    
});
const overlay =document.getElementsByClassName("lightboxOverlay")[0];

document.getElementsByClassName("lightboxOverlay")[0].addEventListener("click", function() {

    document.querySelector("body").style.overflow="unset"
})
document.getElementsByClassName("lb-close")[0].addEventListener("click", function() {
    
    document.querySelector("body").style.overflow="unset"
    
})
})