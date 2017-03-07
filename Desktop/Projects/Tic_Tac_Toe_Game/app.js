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

function compareScores(){
	console.log("Player X Wins!")
};

function begins_game(){
$('.begin_game').click(function(event){
	event.preventDefault();
	$('.instructions').toggleClass('hidden');
});

}

$(function(){;begins_game();});
