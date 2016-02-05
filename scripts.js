

function displayResults(data) {
	resultsHTML = '<ul>';
	.each(data.items,function(i,video) {
        // resultsHTML += '<a href="' + video.link + '" class="image">';
        // resultsHTML += '<img src="' + video.media.m + '"></a></li>';

		resultsHTML += '<li>';
		resultsHTML += '<p id="title">' + video.title + '</p>';
		resultsHTML += '<p id="duration">' + video.duration + '</p>';
		resultsHTML += '<button id="add-to-collection">Add To My Collection</button>';
		resultsHTML += '<img id="preview" src="" alt="">';
		resultsHTML += '</li>'
	}); // end each

	resultsHTML += '</ul>';




	$("#search-results").html(resultsHTML);
}