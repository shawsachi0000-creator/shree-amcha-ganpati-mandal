// ================================
// Shree Amcha Ganpati Mandal
// Premium Gallery Script
// ================================

// Full Screen Image Viewer

const images = document.querySelectorAll(".photo-grid img");

const viewer = document.createElement("div");
viewer.id = "viewer";

viewer.innerHTML = `
<span id="close">&times;</span>
<img id="viewer-img">
`;

document.body.appendChild(viewer);

const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.getElementById("close");

images.forEach((img)=>{

img.addEventListener("click",()=>{

viewer.style.display="flex";
viewerImg.src=img.src;

});

});

closeBtn.addEventListener("click",()=>{

viewer.style.display="none";

});

viewer.addEventListener("click",(e)=>{

if(e.target===viewer){

viewer.style.display="none";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

