const btn= document.getElementsByClassName('btn')[0];
const btn2= document.getElementsByClassName('btn2')[0];
const line= document.getElementsByTagName('hr');
const divs= document.querySelectorAll('.div')


let current=1;
let currentLine=-1
btn2.addEventListener('click', ()=>{
  
    current++
    currentLine++

    if(current > divs.length){
        current=divs.length
    }
    if(btn.disabled==true){
        currentLine=-1
        currentLine++
    }
    divs.forEach((element, index) => {
       
        if(index < current && current> currentLine){
            element.classList.add('first')
            line[currentLine].style.border='2px solid #62A1EB'
            btn.style.background='#62A1EB'
            btn.disabled=false;
           
  
        } else{
            element.classList.remove('first')
          
        }
    });

    if( current == divs.length){
        btn2.disabled=true;
        btn2.style.background='#c5bdbd'
       

    } else{
        btn2.disabled=false;
        btn2.style.background='#62A1EB'
    }


    
})

btn.addEventListener('click', ()=>{
    btn2.disabled=false;
    btn2.style.background='#62A1EB'
   
   currentLine=current-1
    current--
    
    currentLine--
     console.log(current + 'prev is dros current raodenoba')
     console.log(currentLine + 'previs dros currentline raodenoba')
    if(current ===1){
        btn.style.background='#c5bdbd';
        btn.disabled=true;
    } else if( current===divs.length){
        btn2.disabled=true;
    }else{
        btn2.disabled=false;
        btn.disabled=false;
    }

    if(btn.disabled==true){
        currentLine=-1
        currentLine++
    }

    divs.forEach((element, index)=>{
        if(current >index ){
            divs[current].classList.remove('first')
            line[currentLine].style.border='2px solid #c5bdbd'
        }
        

        
    })

}
)




