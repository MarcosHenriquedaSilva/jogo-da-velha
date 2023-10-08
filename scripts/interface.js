document.addEventListener('DOMContentLoaded', ()=> {

   var squares = document.querySelectorAll(".square");

   squares.forEach( (square) => {
    square.addEventListener('click' , handleClick);

   })


})

function handleClick(event){
     
    var square = event.target;
    var postion = square.id;

    if(handleMove(postion)){

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 30)
      
    };
    updateSquare(postion);
   
}

function updateSquare(postion) {
    var square = document.getElementById(postion.toString());
    var symbols = board[postion];
    square.innerHTML = `<div class='${symbols}'></div>`

}



