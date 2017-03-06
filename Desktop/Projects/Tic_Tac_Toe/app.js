var X ='<div class="X">X</div>';
var O ='<div class="O">O</div>';

player_one = 1;

var scoreX = [];

var scoreY = [];

function squareClick(){
	$('.square').click(function(){
		if(player_one == 1){
		$(this).html(X);
		scoreX.push(this.id);
		console.log(scoreX);
		player_one = 0;
		compare();
	}
	else{
		$(this).html(O);
		scoreY.push(this.id);
		console.log(scoreY)
		player_one = 1;
	}
	});
	
}
squareClick();

function compare(){
	for(var i = 0; i < scoreX.length; i++){
		if(){
			alert("Player X wins!");
		}
	}
}




function begins_game(){
$('.begin_game').click(function(event){
	event.preventDefault();
	$('.instructions').toggleClass('hidden');
	Program.restart();
});

}

$(function(){;begins_game();});
