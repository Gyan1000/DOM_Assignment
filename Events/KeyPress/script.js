let key_press=document.getElementById("key_press");
let info=document.querySelector(".info");
key_press.addEventListener("keypress",(event)=>{
    // changed bg color of input field;
    key_press.style.backgroundColor="blue";

    // add information of what key you have pressed in info (span) element
    info.textContent=
    `Now you have press " ${event.key} " on your input field and event name is " ${event.type} " `;

    info.classList.toggle("show_info");

    setTimeout(()=>{key_press.style.backgroundColor="lightblue";info.classList.toggle("show_info")},3000);
})


