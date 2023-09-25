let btn=document.getElementById("btn");
let info=document.querySelector(".info");
function display(event)
{
    
        // changed bg color;
        document.body.style.backgroundColor="greenyellow";
        let button_TextContent=btn.textContent;
        btn.textContent= `Now your Event type is ${event.type} and background color is ${document.body.style.backgroundColor}`;
    
        // add information in bacground color name in info (span) element
        info.textContent="please pay attention on your button"
        
    
        info.classList.add("show_info");
    
        setTimeout(()=>{document.body.style.backgroundColor="white";info.classList.remove("show_info")
        btn.textContent=button_TextContent;
      
    },3000);
        
}




