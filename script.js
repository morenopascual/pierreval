
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  });
});
const card=document.querySelector('.rank-card');
if(card){
  window.addEventListener('mousemove',e=>{
    if(window.innerWidth<800)return;
    const x=(e.clientX/window.innerWidth-.5)*3;
    const y=(e.clientY/window.innerHeight-.5)*-3;
    card.style.transform=`rotate(2deg) rotateY(${x}deg) rotateX(${y}deg)`;
  });
}
