let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newGameBtn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn0 = true;//playerx,player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    //console.log("box was clicked");
   
    if(turn0){
        turn0 = true;
        box.innerText = "O";
        box.style.color = "Blue";      
         turn0 = false;
    }
    else{
     box.innerText = "X";
     box.style.color = "red";
     turn0 = true;
    }
    box.disabled = true;
    checkWinner();

});
    
});
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes =() => {
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1val= boxes[pattern[0]].innerText ;
        let pos2val= boxes[pattern[1]].innerText ;
        let pos3val= boxes[pattern[2]].innerText ;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
                disableBoxes();
            }
        }


    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);