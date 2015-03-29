$(document).ready(onReady);

function onReady() {

	$('#search').on('click', onSearchButtonClick);

	function onSearchButtonClick (){
		console.log($('#search-box').val());

		$('#results').html($('#search-box').val());									
}
}




