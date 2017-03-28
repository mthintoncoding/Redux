console.log("Hello console");

function returnHTML(){
	var item = '<li>Matty</li>';

	$('.ze_list').append(item);
}
returnHTML();

var element = '<p>The quick brown fox jumps over the lazy dog. The \
  quick brown fox jumps over the lazy dog. The quick brown fox jumps over \
  the lazy dog.</p>'

var element2 = '<p>The quick brown fox jumps over the lazy dog. The quick ' +
  'brown fox jumps over the lazy dog. The quick brown fox jumps over the ' +
  'lazy dog.</p>'

 function giveElement(){
 	$('.experiment').html(element, element2);
 }
 giveElement();
