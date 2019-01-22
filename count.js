var score1=0;
var score2=0;
var button1=document.getElementById('player1');
var button2=document.getElementById('player2');
var reset=document.getElementById('reset');
var gameOver=false;
var count=document.getElementById('count');
var winningScore=5;
var display1=document.getElementById("display1");


//button 1 interactivity code.


button1.addEventListener('click',function(){
	if (!gameOver){ 
	score1++;
	if (score1===winningScore) {
		     display2.classList.add('lose');
             display1.classList.add("win");
	                 gameOver=true;
	                 alert('GAME OVER');

	      }
	      	display1.textContent=score1;

    }

});

//button 2 interactivity code.

var display2=document.getElementById('display2');
button2.addEventListener('click',function(){
	if(!gameOver){
	score2++;
	if(score2==winningScore){
		     display1.classList.add('lose');
             display2.classList.add("win");
             gameOver=true;
	          alert('GAME OVER');

         }
	display2.textContent=score2;
}
});




// reset button interactivity code.



var reset=document.getElementById('reset');
reset.addEventListener('click',function(){
	resetit();
});


// Reset function.

function resetit(){

	score1=0;
	score2=0;
	display1.textContent=0;
	display2.textContent=0;
	gameOver=false;
	display1.classList.remove('win');
	display2.classList.remove('win');
	display2.classList.remove('lose');
    display1.classList.remove('lose');

}


//changing the input value to which the game is been played.


var numInput=document.getElementById('numInput');
var count=document.getElementById('count');
numInput.addEventListener('change',function(){
	count.textContent=numInput.value;
	winningScore=Number(numInput.value);
    resetit();
});