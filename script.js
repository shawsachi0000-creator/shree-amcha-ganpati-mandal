// ===============================
// SHREE AMCHA GANPATI MANDAL
// SCRIPT V2 - PART 1
// ===============================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Navbar Shadow

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.95)";
header.style.boxShadow="0 5px 20px rgba(255,215,0,.25)";

}else{

header.style.background="rgba(0,0,0,.90)";
header.style.boxShadow="none";

}

});

// Scroll To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ===============================
// GALLERY IMAGE POPUP
// ===============================

const galleryImages=document.querySelectorAll(".gallery-item img");

const popup=document.createElement("div");

popup.id="popup";

popup.innerHTML=`
<span id="closePopup">&times;</span>
<img id="popupImg">
`;

document.body.appendChild(popup);

const popupImg=document.getElementById("popupImg");
const closePopup=document.getElementById("closePopup");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

popup.style.display="flex";

popupImg.src=img.src;

});

});

closePopup.onclick=()=>{

popup.style.display="none";

};

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

}

};

// ===============================
// SCROLL ANIMATION
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ===============================
// FUTURE ADMIN SUPPORT
// ===============================

// Future me Firebase / Cloudinary
// connect karne par Latest Photos,
// Videos aur Gallery automatic
// yahi se load hogi.
