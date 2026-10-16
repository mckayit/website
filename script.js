const r=matchMedia('(prefers-reduced-motion:reduce)').matches,els=document.querySelectorAll('.reveal');
if(r||!('IntersectionObserver'in window))els.forEach(e=>e.classList.add('in'));
else{const o=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.15});els.forEach((e,i)=>{e.style.transitionDelay=(i%4)*70+'ms';o.observe(e)})}
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-b.left+'px');c.style.setProperty('--y',e.clientY-b.top+'px')}));
const bar=document.querySelector('.bar');addEventListener('scroll',()=>{bar.style.transform='scaleX('+scrollY/(document.documentElement.scrollHeight-innerHeight)+')'},{passive:true});
