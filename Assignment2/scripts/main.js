$(document).ready(onReady);

function onReady() {

	$('#search').on('click', onSearchButtonClick);

	function onSearchButtonClick (){
		console.log($('#search-box').val());

		$('#results').html(movieSearch($('#search-box').val()));									
}
}

   // 'query' is only a placesholder, it can be anything
function movieSearch(query) {
	$.get(
		'http://www.omdbapi.com',
		{s: query},
		onResultsReceived,
		'json'
	);

	function onResultsReceived(data) {
		// console.log(status);
		console.log(data);
		// console.log(data.Search[2].Title);
		// console.log(data);
	}
}




