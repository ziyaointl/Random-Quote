var lastIndex = -1;

var quoteList = [
	{
		"quote": "Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.",
		"author": "-John von Neumann (1951)"
	},
	{
		"quote": "Weeks of coding can save you hours of planning.",
		"author": "-Anonymous"
	}
];

function getQuote() {
	var tempIndex = getRandomNumber(quoteList.length);
	console.log(tempIndex);
	while (lastIndex == tempIndex) {
		var tempIndex = getRandomNumber(quoteList.length);
		console.log(tempIndex);
	}
	lastIndex = tempIndex;
	document.getElementById("quote").innerHTML = quoteList[tempIndex].quote;
	document.getElementById("author").innerHTML = quoteList[tempIndex].author;
}

function getRandomNumber(max) {
	return Math.floor(Math.random() * (max));
}