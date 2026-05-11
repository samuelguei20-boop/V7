/* ========================= */
/* SUITE style.css */
/* ========================= */

/* HISTORIQUE */

.history-box{
margin-top:30px;
padding:32px;
border-radius:30px;
background:rgba(255,255,255,0.05);
text-align:center;
}

.history-icon{
font-size:42px;
margin-bottom:14px;
}

.history-links{
margin-top:18px;
display:flex;
flex-direction:column;
gap:14px;
}

.contact-btn{
height:55px;
border:none;
border-radius:18px;
background:#1aa8ff;
color:white;
font-size:17px;
font-weight:bold;
}

.logout-btn{
height:55px;
border:none;
border-radius:18px;
background:#ff3d3d;
color:white;
font-size:17px;
font-weight:bold;
}

/* RECOMPENSE */

.hidden{
display:none;
}

.reward-page{
margin-top:20px;
}

.reward-header{
padding:28px;
border-radius:30px;
background:rgba(255,255,255,0.05);
text-align:center;
}

.reward-balance{
margin-top:15px;
font-size:40px;
font-weight:bold;
color:orange;
}

.reward-progress{
height:10px;
background:rgba(255,255,255,0.08);
border-radius:20px;
overflow:hidden;
margin-top:20px;
}

.reward-progress-fill{
width:10%;
height:100%;
background:linear-gradient(
90deg,
orange,
#00ff99
);
}

.reward-options{
margin-top:24px;
display:grid;
gap:15px;
}

.reward-option{
padding:22px;
border-radius:25px;
background:rgba(255,255,255,0.05);
display:flex;
align-items:center;
gap:15px;
}

.reward-icon{
width:68px;
height:68px;
border-radius:22px;
background:rgba(255,140,0,0.08);
display:flex;
justify-content:center;
align-items:center;
font-size:30px;
}

/* ROUE */

.wheel-folder{
margin-top:25px;
}

.wheel-card{
padding:30px;
border-radius:35px;
background:rgba(255,255,255,0.05);
}

.wheel-wrapper{
display:flex;
justify-content:center;
position:relative;
}

.wheel-pointer{
position:absolute;
top:-10px;
width:22px;
height:22px;
background:orange;
border-radius:50%;
z-index:5;
box-shadow:0 0 20px orange;
}

.wheel{
width:300px;
height:300px;
border-radius:50%;
border:10px solid orange;
position:relative;
background:
conic-gradient(
#101010 0deg 60deg,
#1a1a1a 60deg 120deg,
#242424 120deg 180deg,
#2e2e2e 180deg 240deg,
#383838 240deg 300deg,
#444 300deg 360deg
);
transition:5s cubic-bezier(.17,.67,.19,.99);
box-shadow:0 0 30px rgba(255,140,0,0.4);
}

.wheel-label{
position:absolute;
font-size:16px;
font-weight:bold;
color:white;
}

.l1{
top:25px;
left:115px;
}

.l2{
top:70px;
right:35px;
}

.l3{
top:150px;
right:10px;
}

.l4{
bottom:70px;
right:30px;
}

.l5{
bottom:25px;
left:105px;
}

.l6{
top:150px;
left:10px;
}

.wheel-center{
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:90px;
height:90px;
border-radius:50%;
background:orange;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:bold;
box-shadow:0 0 20px orange;
}

.spin-btn{
width:100%;
margin-top:25px;
height:60px;
border:none;
border-radius:22px;
background:linear-gradient(
135deg,
#ffb300,
#ff6600
);
font-size:20px;
font-weight:bold;
color:white;
}

/* MARCHE */

.market-page{
margin-top:24px;
display:grid;
gap:20px;
}

.market-folder{
padding:25px;
border-radius:30px;
background:rgba(255,255,255,0.05);
}

.market-folder h2{
margin-bottom:12px;
font-size:24px;
}

.partner-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:15px;
margin-top:20px;
}

.partner-card{
padding:18px;
border-radius:22px;
background:rgba(255,255,255,0.04);
text-decoration:none;
color:white;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
}

.partner-logo{
width:65px;
height:65px;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
font-size:28px;
font-weight:bold;
}

.admob{
background:#4285f4;
}

.unity{
background:#222;
}

.applovin{
background:#ff6600;
  }
