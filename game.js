const randomvalue = Math.floor(Math.random()*10);
console.log(randomvalue)

const userInput = document.querySelector("#userguess");
const guess = document.querySelector("#randomvalue");
const btn =  document.querySelector(".submit");
const msg =  document.querySelector("#msg");
const confetti =  document.querySelector(".confetti-parent");
const confettiChild =  document.querySelectorAll(".confetti-child");
// const attempts =  document.querySelector("#attempts");

let attemps = 3;
// console.log(attemps)
btn.addEventListener("click",function(){
    if(Number(userInput.value)===randomvalue){
//   console.log()
        guess.value = `${randomvalue}`;
        msg.innerHTML = `<p>congratulations!! you won the game </p>`
        // const video = confi
        confetti.classList.add('confetti')
        confettiChild.forEach(ele=>ele.classList.add('confetti-piece'))
    
    }
    else{
        if(attemps>0){
            msg.innerHTML = `<p>try again</p>`
            attemps--;
            attempts.innerHTML = `${attemps}`
              console.log(attemps)
        }else{
            attempts.innerHTML = ''
             msg.innerHTML = `<p>you lost the game</p>`
        }  
    }
})


