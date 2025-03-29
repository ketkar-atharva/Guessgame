let m=document.getElementById('message');
let text;
let c=document.getElementById('button');
let d=document.querySelector("input");
let b=document.querySelector("button");
let h=document.getElementById('celebration');
h.style.display="none";
b.addEventListener('click',guess);
let display=1;
let number=69;
function guess(){
  text=document.getElementById('mytext').value;

   if(display==1){
    if(text!=number){
      m.textContent="Oops! guess again";
     d.style.display="none";
      c.textContent="Ooh ok";
      h.style.display="none";
      display=0;
    }
   
   }else{
   m.textContent="Guess a number";
   d.style.display="block";
   c.textContent="Ok";
   h.style.display="none";
   display=1;
  }

if(text==number){
  m.textContent="Yayy! you are right";
  d.style.display="none";
  c.style.display="none";
  h.style.display="inline-flex";
}
}

