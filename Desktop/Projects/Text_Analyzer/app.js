function analyze (){
		$('button').click(function(event){
		event.preventDefault()
		wordCount();
		uniqueWordCount();
		averageWordLength();
		theAverageSentenceLength();
	})
}


function wordCount (){ //when user clicks analyze text button have this function count number of toal words
	var countEm = $('#user-text').val().split(' ').length;
	$('.js-word-count').text(countEm);
	$('.text-report').removeClass('hidden');
}

function uniqueWordCount(){
	var uniqueWords = {};
	var countEmAgain = $('#user-text').val().split(' ');
	for(var i = 0; i < countEmAgain.length; i++){
			if(countEmAgain[i] in uniqueWords){
				uniqueWords[countEmAgain[i]]++;
			}
			else{
				uniqueWords[countEmAgain[i]]=1;
			}
	}
	var counter = 0;
	Object.keys(uniqueWords).forEach(function(key){
		if(uniqueWords[key] === 1){
			counter += 1;
}
	});

	$('.js-unique-word-count').text(counter);


}

function averageWordLength (){//counts the average number of characters per word
	var lengthy = $('#user-text').val().split(' ');
	var total = 0;
	for(var i = 0; i < lengthy.length; i++){
		total += lengthy[i].length;	
	}
	$('.js-average-word-length').text(total / lengthy.length);

}	

function theAverageSentenceLength(){
	var sentence = $('#user-text').val().split('.');
	$('.js-average-sentence-length').text(sentence.length - 1);
}

analyze();


