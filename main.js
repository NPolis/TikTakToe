document.addEventListener("DOMContentLoaded", () => {
    let circle = `<i class="fa-regular fa-circle"></i>`
    let xmark = `<i class="fa-solid fa-xmark"></i>`
    let currentPlayer = "x"
    let scors = [0,1,2,3,4,5,6,7,8]
    let gameActiv = true
    let resetBtn = document.getElementById("resetBtn")
    let cards = document.getElementsByClassName ("cell")

    resetBtn.addEventListener("click",(event) => {
        currentPlayer = "x"
        scors = [0,1,2,3,4,5,6,7,8]
        gameActiv = true
       for (const card of cards) {
        card.innerHTML = ""
       }
       

    })
    
    
    for (const card of cards) {
        card.addEventListener("click", (event) => { 
          if (gameActiv === false) {
            return
          }


          if (currentPlayer === "x") {
            event.target.innerHTML = xmark
            scors[event.target.id] = currentPlayer
            winCheck()
            currentPlayer = "o"
          } else {
            event.target.innerHTML = circle
            scors[event.target.id] = currentPlayer
            winCheck()
            currentPlayer = "x"
          }
           
        })
    }
    function winCheck() {
      if (scors[0] === scors[1] && scors[1] === scors[2]) {
        displayWin()
      }  

      if (scors[3] === scors[4] && scors[4] === scors[5]) {
        displayWin()
      }  

      if (scors[6] === scors[7] && scors[7] === scors[8]) {
        displayWin()
      }  

      if (scors[0] === scors[3] && scors[3] === scors[6]) {
        displayWin()
      }  

      if (scors[1] === scors[4] && scors[4] === scors[7]) {
        displayWin()
      }  

      if (scors[2] === scors[5] && scors[5] === scors[8]) {
        displayWin()
      }  

      if (scors[0] === scors[4] && scors[4] === scors[8]) {
        displayWin()
      }  

      if (scors[2] === scors[4] && scors[4] === scors[6]) {
        displayWin()
      }  

    }
    function displayWin() {
       gameActiv = false

       let displayWin = document.getElementById("win")
       displayWin.innerText = `Winer is: ${currentPlayer}`

    }
})