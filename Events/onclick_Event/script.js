let btn=document.getElementById("btn");
let info=document.querySelector(".info");
btn.addEventListener("click",()=>{
    // changed bg color;
    document.body.style.backgroundColor="green";

    // add information in bacground color name in info (span) element
    info.textContent=`Now your background color is  ${document.body.style.backgroundColor}`;
    info.classList.add("show_info");

    setTimeout(()=>{document.body.style.backgroundColor="white";info.classList.remove("show_info")},2000);
})


