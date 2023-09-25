let press=document.getElementById("press");
let down=document.querySelector("#down");
let up=document.querySelector("#up");
press.addEventListener("keydown",(event)=>{
    // changed bg color of input field;
    press.style.backgroundColor="blue";
    
    
    // add information of what key you have pressed in down (span) element
    down.textContent=
    `Now you have press " ${event.key} " on your input field and event name is " ${event.type} " `;
    down.style.backgroundColor="orange"
    setTimeout(()=>
      {
        down.style.backgroundColor="blueviolet";
        down.textContent="It is for keydown Event"; 
        press.style.backgroundColor="lightblue";

       },5000)
})

press.addEventListener("keyup",(event)=>{
    // changed bg color of input field;
    press.style.backgroundColor="blue";

    // add information of what key you have pressed in up (span) element
    up.textContent=
    `Now you have press " ${event.key} " on your input field and event name is " ${event.type} " `;

   up.style.backgroundColor="cyan" ; 
   setTimeout(()=>
   {
     up.style.backgroundColor="blueviolet";
     up.textContent="It is for keyup Event";
     press.style.backgroundColor="lightblue";

    },5000) 
})

