/* ==========================
   SHREE AMCHA GANPATI MANDAL
   LUXURY CSS V2 - PART 1
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#090909;
    color:#fff;
    overflow-x:hidden;
}

img{
    max-width:100%;
    display:block;
}

.container{
    width:90%;
    max-width:1400px;
    margin:auto;
}

/* ==========================
   HEADER
========================== */

.header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 40px;
    background:rgba(0,0,0,.92);
    backdrop-filter:blur(10px);
    border-bottom:1px solid rgba(212,175,55,.35);
    z-index:9999;
}

.logo{
    display:flex;
    align-items:center;
    gap:15px;
}

.logo img{
    width:60px;
    height:60px;
    border-radius:50%;
    border:2px solid #FFD700;
}

.logo h2{
    color:#FFD700;
    font-size:14px;
    font-family:'Cinzel',serif;
}

.logo h1{
    color:#fff;
    font-size:26px;
    font-family:'Cinzel',serif;
}

.logo p{
    color:#c9a227;
    font-size:11px;
}

nav ul{
    display:flex;
    gap:28px;
    list-style:none;
}

nav ul li a{
    text-decoration:none;
    color:#fff;
    font-weight:600;
    transition:.3s;
}

nav ul li a:hover{
    color:#FFD700;
}

.instagram{
    width:45px;
    height:45px;
    border:2px solid #FFD700;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#FFD700;
    text-decoration:none;
    font-size:20px;
}

/* ==========================
   HERO
========================== */

.hero{
    margin-top:80px;
    width:100%;
    height:100vh;
    min-height:700px;
    overflow:hidden;
    background:#000;
}

.hero-banner{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
    }
/* ==========================
   LATEST PHOTOS & VIDEOS
========================== */

.latest{
    padding:90px 0;
    background:#101010;
}

.section-title{
    text-align:center;
    font-size:42px;
    font-family:'Cinzel',serif;
    color:#FFD700;
    margin-bottom:50px;
}

.latest-grid{
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:30px;
}

.latest-card{
    background:#181818;
    border-radius:18px;
    overflow:hidden;
    border:1px solid rgba(255,215,0,.30);
    transition:.4s;
}

.latest-card:hover{
    transform:translateY(-10px);
    box-shadow:0 0 25px rgba(255,215,0,.35);
}

.latest-card img,
.latest-card video{
    width:100%;
    height:230px;
    object-fit:cover;
}

.latest-card h3{
    color:#FFD700;
    padding:18px;
    font-size:22px;
}

.latest-card p{
    padding:0 18px 20px;
    color:#ddd;
    line-height:1.8;
}

/* ==========================
   ABOUT
========================== */

.about{
    padding:90px 0;
    background:#0c0c0c;
}

.about-box{
    width:90%;
    margin:auto;
    display:flex;
    align-items:center;
    gap:40px;
    background:#181818;
    border-radius:25px;
    padding:40px;
    border:1px solid rgba(255,215,0,.30);
}

.about-icon{
    width:170px;
}

.about-text h2{
    color:#FFD700;
    font-size:38px;
    font-family:'Cinzel',serif;
    margin-bottom:20px;
}

.about-text p{
    color:#ddd;
    line-height:1.9;
    font-size:18px;
}

/* BUTTON */

.btn{
    display:inline-block;
    margin-top:25px;
    padding:14px 40px;
    background:#b67a00;
    color:#fff;
    text-decoration:none;
    border-radius:10px;
    border:2px solid #FFD700;
    transition:.3s;
}

.btn:hover{
    background:#FFD700;
    color:#000;
}
/* ==========================
   GALLERY
========================== */

.gallery{
    padding:90px 0;
    background:#090909;
}

.gallery-grid{
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:25px;
}

.gallery-item{
    background:#181818;
    border-radius:18px;
    overflow:hidden;
    border:1px solid rgba(255,215,0,.30);
    transition:.4s;
}

.gallery-item:hover{
    transform:translateY(-8px);
    box-shadow:0 0 25px rgba(255,215,0,.30);
}

.gallery-item img{
    width:100%;
    height:250px;
    object-fit:cover;
}

/* ==========================
   MEMBERS
========================== */

.members{
    padding:90px 0;
    background:#101010;
}

.members-grid{
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.member-card{
    background:#181818;
    border:1px solid rgba(255,215,0,.30);
    border-radius:20px;
    padding:25px;
    text-align:center;
}

.member-card img{
    width:130px;
    height:130px;
    border-radius:50%;
    object-fit:cover;
    border:4px solid #FFD700;
    margin:auto;
}

.member-card h3{
    margin-top:20px;
    color:#FFD700;
}

.member-card p{
    color:#ddd;
    margin-top:8px;
}

/* ==========================
   CONTACT
========================== */

.contact{
    padding:90px 0;
    background:#0c0c0c;
}

.contact-box{
    width:90%;
    max-width:700px;
    margin:auto;
    background:#181818;
    border:1px solid rgba(255,215,0,.30);
    border-radius:20px;
    padding:35px;
    text-align:center;
}

.contact-box p{
    color:#ddd;
    margin:12px 0;
}

/* ==========================
   FOOTER
========================== */

footer{
    background:#000;
    padding:30px;
    text-align:center;
    border-top:1px solid rgba(255,215,0,.25);
}

footer h3{
    color:#FFD700;
    margin-bottom:10px;
    font-family:'Cinzel',serif;
}

footer p{
    color:#aaa;
}

/* ==========================
   FLOATING BUTTONS
========================== */

.whatsapp,
.admin-btn,
#topBtn{
    position:fixed;
    right:20px;
    z-index:999;
}

.whatsapp{
    bottom:20px;
    width:55px;
    height:55px;
    background:#25D366;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    text-decoration:none;
    font-size:28px;
}

#topBtn{
    bottom:90px;
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:#FFD700;
    color:#000;
    cursor:pointer;
}

.admin-btn{
    bottom:155px;
    background:#b67a00;
    color:#fff;
    text-decoration:none;
    padding:10px 18px;
    border-radius:8px;
}

/* ==========================
   MOBILE
========================== */

@media(max-width:768px){

.header{
    flex-direction:column;
    height:auto;
    padding:15px;
}

nav ul{
    flex-wrap:wrap;
    justify-content:center;
    gap:12px;
}

.hero{
    height:55vh;
    min-height:320px;
}

.hero-banner{
    object-fit:cover;
}

.about-box{
    flex-direction:column;
    text-align:center;
}

.about-icon{
    width:120px;
}

.latest-grid,
.gallery-grid,
.members-grid{
    grid-template-columns:1fr;
}

.section-title{
    font-size:30px;
}

.logo h1{
    font-size:18px;
}

.logo h2{
    font-size:12px;
}

.logo img{
    width:45px;
    height:45px;
}

}
