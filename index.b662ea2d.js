const e=document.querySelector(".arrow-up");console.log(e);const t=document.querySelectorAll(".catalog__read-more"),o=document.querySelectorAll(".catalog__items.catalog__items-hidden");t.forEach(function(e,t){e.addEventListener("click",function(){event.preventDefault(),o[t].classList.toggle("catalog__items-hidden")})});const c=document.querySelector(".cookies__close"),n=document.querySelector(".cookies__btn");function l(){document.querySelector(".cookies").style.display="none"}c.addEventListener("click",l),n.addEventListener("click",l);const r=document.querySelector(".about__img"),i=r.querySelector("img"),s=document.querySelector(".about__text"),u=.85*i.scrollHeight,d=s.textContent.split(" ");let a="";for(const e of d){let t=a+" "+e;if(s.textContent=t,s.scrollHeight<=u)a=t;else{s.textContent=a+"...";break}}document.querySelector(".description__img"),r.querySelector("img");const m=document.querySelector(".description__text"),_=.95*i.scrollHeight,g=s.textContent.split(" ");let y="";for(const e of g){let t=y+" "+e;if(m.textContent=t,m.scrollHeight<=_)y=t;else{m.textContent=y+"...";break}}const q=document.querySelector(".menu"),S=document.querySelector(".header__burger");S.addEventListener("click",function(e){S.classList.toggle("active"),q.classList.toggle("active")}),document.querySelector("body");const f=document.querySelector(".menu__mobile-search"),h=document.querySelector(".menu__search");f.addEventListener("click",function(e){h.classList.toggle("active")});
//# sourceMappingURL=index.b662ea2d.js.map