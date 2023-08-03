// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


document.addEventListener("DOMContentLoaded", ()=>{
  let modalMessage=document.querySelector("#modal-message")
  let errorModal = document.querySelector("#modal")
  errorModal.classList.add("hidden")

  // get like buttons
  let like=document.querySelectorAll(".like-glyph")
  like.forEach(element =>{
    element.addEventListener("click", ()=>{
      mimicServerCall()
      .then(()=>{
        let classname=element.classList[1]
        console.log(classname)
        if(classname === "activated-heart"){
          element.classList.remove("activated-heart")    
        }else{
          element.classList.add("activated-heart")
        }
        
      })
      .catch((e)=>{
        errorModal.classList.remove()
        modalMessage.innerHTML=`${e}`
        setTimeout(()=>{
          errorModal.classList.add("hidden")
        }, 3000)
      })
    })
  })
})
