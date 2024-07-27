let spanTag = document.querySelector(".container span");

const wordsList = ["Developer","Coder","Athelete","SportsPerson"];


let wordIndex = 0;
let characterIndex = 0;
let reverseType = false;
let skipUpdate = 0;


function addAutoType(element,words,time){
    const intervalId = setInterval(()=>{
        if(skipUpdate){
         skipUpdate--
         return
        }
     
        if(!reverseType){
         skipUpdate = 1
         element.innerText = element.innerText + words[wordIndex][characterIndex]
         characterIndex++
        }else{
            element.innerText = element.innerText.slice(0,element.innerText.length -1)
         characterIndex--
        }
     
           
        if(characterIndex === words[wordIndex].length ){
         skipUpdate = 6
         reverseType = true;
        }
     
        if(element.innerText.length === 0 && reverseType){
           reverseType = false;
           wordIndex ++;
        }
      
         if(wordIndex === words.length){
             wordIndex = 0;
         }
     
     },time)
}

// By doing few adjustments we can prompt the values from user!!
// addAutoType(spanTag,wordsList,"100")
