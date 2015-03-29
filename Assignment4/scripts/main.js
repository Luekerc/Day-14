$(document).ready(onReady);

function onReady() {
	$('#search').on('click', onSearchButtonClick);
	
	function onSearchButtonClick (){
	// $('#results').html($('#search-box').val());	
	movieSearch($('#search-box').val());	
	}
}
function movieSearch(query) {
	$.get('http://www.omdbapi.com',
		{
		s: query,
		},
		onResultsReceived,
		'json'
		);
}
function onResultsReceived(data) {
	// console.log(onResultsReceived);
	console.log(data);	
	// consoles.log(data.Search[2].Title);
	
	for (var i=0; i<data.Search.length; i++){
		var movieInfo=data.Search[i];
		var newRow = makeRow(movieInfo);
		$('#table').append(newRow);
	}	
	function makeRow(data){
		console.log(data);
		return '<tr><td>' + data.Title + '</td>\
		<td>'+data.Year+'</td></tr>';
		}
		$("tr").click(function(){
			console.log(this);
			$('.towatch').append(this);
		})

	}



// function toNewList() {
// 	$('.data-title').on('click', onSearchButtonClick);
	
// 	// function onTitleClick (){
// 	// // $('#results').html($('#search-box').val());	
// 	// ($('data.Title').val());
// 		function onSearchButtonClick (){
// 	// $('#results').html($('#search-box').val());
// 	// ($('data.Title').val());	

// 	// movieSearch($('#search.Title').val());
// 	$('.to-watch').append($('.data-title'));

// 	}	
	// }




 	

// $(document).ready(onReady);

// function onReady() {
// 	$('#search').on('click', onSearchButtonClick);
	
// 	function onSearchButtonClick (){
// 	// $('#results').html($('#search-box').val());	
// 	movieSearch($('#search-box').val());	
// 	}
// }
// function movieSearch(query) {
// 	$.get('http://www.omdbapi.com',
// 		{
// 		s: query,
// 		},
// 		onResultsReceived,
// 		'json'
// 		);
// }
// function onResultsReceived(data) {
// 	// console.log(onResultsReceived);
// 	console.log(data);	
// 	// consoles.log(data.Search[2].Title);
	
// 	for (var i=0; i<data.Search.length; i++){
// 		var movieInfo=data.Search[i];
// 		var newRow = makeRow(movieInfo);
// 		$('#table').append(newRow);
// }	
// 	function makeRow(data){
// 		console.log(data);
// 		return '<tr><td>' + data.Title + '</td>\
// 		<td>'+data.Year+'</td></tr>';
// }
// function toNewList() {
// 	$(data.Title).on('click', onTitleClick);
	
// 	function onTitleClick (){
// 	// $('#results').html($('#search-box').val());	
// 	($('data.Title').val());	
// 	}
// }
// }

