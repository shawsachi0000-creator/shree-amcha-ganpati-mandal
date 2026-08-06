// ===============================
// SHREE AMCHA GANPATI MANDAL
// PREMIUM SCRIPT
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

// Navbar Effect

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(0,0,0,.95)";
        navbar.style.boxShadow="0 5px 20px rgba(255,215,0,.3)";

    }else{

        navbar.style.background="rgba(0,0,0,.80)";
        navbar.style.boxShadow="none";

    }

});

// Fade Animation

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

// Image Full Screen

const images=document.querySelectorAll(".photo-grid img");

const viewer=document.createElement("div");

viewer.id="viewer";

viewer.innerHTML=`
<span id="close">&times;</span>
<img id="viewer-img">
`;

document.body.appendChild(viewer);

const viewerImg=document.getElementById("viewer-img");

const close=document.getElementById("close");

images.forEach(img=>{

img.onclick=()=>{

viewer.style.display="flex";

viewerImg.src=img.src;

}

});

close.onclick=()=>{

viewer.style.display="none";

};

viewer.onclick=(e)=>{

if(e.target===viewer){

viewer.style.display="none";

}

};
