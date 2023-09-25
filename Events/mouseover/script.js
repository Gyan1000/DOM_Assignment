let btn=document.getElementById("btn");
let info=document.querySelector(".info");
btn.addEventListener("mouseover",(event)=>{
    // changed bg color;
    document.body.style.backgroundColor="lightblue";

    // add information in bacground color name in info (span) element
    info.textContent=
    `Now your Event type is ${event.type} and background color is ${document.body.style.backgroundColor}`;

    info.classList.add("show_info");

    setTimeout(()=>{document.body.style.backgroundColor="white";info.classList.remove("show_info")},3000);
})


