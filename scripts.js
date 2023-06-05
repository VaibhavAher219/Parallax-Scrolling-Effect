
let moon = document.getElementById('moon');
   let text=   document.getElementById('text');
   let btn=   document.getElementById('btn');
   let back=   document.getElementById('back');

   window.addEventListener('scroll', function(){
       let value=window.scrollY;
       moon.style.top=value*2.5+'px';
       text.style.marginRight=value*4+'px';
       text.style.top=value*0.7+'px';
       back.style.top=value*1.5+'px';

       btn.style.top=value*1.1+'px';

   })