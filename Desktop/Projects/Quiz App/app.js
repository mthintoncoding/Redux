var state = {

	questions: [
	"Who is the lead singer of Led Zeppelin?",
	"Who is the drummer of The Beatles?",
	"Who was the lead singer of The Doors?",
	"What was the singer of Pink Floyd's last name?",
	"Who was the lead singer of The Smiths?",
	"Who sang the song 'Purple Rain'?",
	"What style of music originated in New Orleans, LA?",
	"Where is Madonna from?",
	"What genre of music did Beethoven compose?",
	"Who sang the international hit, 'Thriller'?",
	],

	options: [

	['Jimmy Paige', 'Robert Plant', 'John Paul Jones', 'Jon Bonham'],
	['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison'],
	['John Densmore', 'Ray Manzarek', 'Jim Morrison', 'Robby Krieger'],
	['Gilmour', 'Mason', 'Barrett', 'Waters'],
	['Johnny Marr', 'Andy Rourke', 'Mike Joyce', 'Morrissey'],
	['David Bowie', 'Michael Jackson', 'George Michaels', 'Prince'],
	['Rock', 'Rap', 'Jazz', 'Country'],
	['California', 'Illinois', 'Tennessee', 'Michigan'],
	['Baroque', 'Classical', 'Contemporary', 'Electronic'],
	['The Temptations', 'Michael Jackson', 'David Bowie', 'Prince'],

	], 

	correct_answers : [1,2,2,3,3,3,2,3,1,1],

	user_answers: [],

	counter : 1,

	number_right: 0,

	number_wrong: 0,

}

$('.js-quiz-Starter').click(function(event){
	$('.first-Question , .container').toggleClass('hidden');
})

var i = state.counter - 1;

function render (){
	$('.textFirstQuestion').html(state.questions[i]);
	for(var j = 0; j < state.options[i].length; j++){
		$('label').eq(j).html(state.options[i][j]);
	}
	$('.count').html(state.counter);
	return false;
}

$('.final-Answer').click(nextQuestion);

function nextQuestion(){
	var selected_answer = parseInt($(':checked').val());
	if(selected_answer === state.correct_answers[i]){
		$('.right_or_wrong').text("Yay, you rock!");
		state.number_right ++;
	}
	else{
		$('.right_or_wrong').text("Oof, nope. Oh well").toggleClass('hidden');
		state.number_wrong ++;
	}
	state.user_answers.push(selected_answer);
	state.counter ++;
	i = state.counter - 1;
	if (state.questions[i] === undefined){
		endAndCompareAnswers();
	}
	else{
	render();
	}
	return false;
}

function endAndCompareAnswers (){
	$('.number_right').html(state.number_right);
	$('.final_message').removeClass('hidden');
}




