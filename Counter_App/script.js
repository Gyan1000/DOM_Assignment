let sec_1=document.querySelector('.sec-1');
//getting span 
let value=document.getElementById('value');
//counter is initialized by span default value;
let counter=value.textContent; 
sec_1.addEventListener('click',(e)=>{
    if(e.target.classList.contains('inc'))
    {
        ++counter;
    }
   else if(e.target.classList.contains('dec'))
    {
        --counter;
    }
    else{
        counter=0;   
        
    }
    value.textContent=counter;
})

//another way

/*
let btns=document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
          let name=e.currentTarget.classList;
          if(name.contains('inc'))
          {
            counter++;
          }
          else if(name.contains('dec'))
          {
            counter--;
          }
          else
          counter=0;
          value.textContent=counter;
    })
})
*/
