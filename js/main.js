var lastIndex = -1;

var quoteList = [
	{
		"quote": "Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.",
		"author": "-John von Neumann"
	},
	{
		"quote": "Weeks of coding can save you hours of planning.",
		"author": "-Anonymous"
	},
	{
		"quote": "Should array indices start at 0 or 1? My compromise of 0.5 was rejected, without, I thought, proper consideration.",
		"author": "-S. Kelly Bootle"
	},
	{
		"quote": "Recursion n. See recursion.",
		"author": "-Eric S. Raymond, The New Hacker's Dictionary"
	},
	{
		"quote": "Computers are like bikinis. They save people a lot of guesswork.",
		"author": "-Sam Ewin"
	},
	{
		"quote": "That's what's cool about working with computers. They don't argue, they remember everything, and they don't drink all your beer.",
		"author": "-Paul Leary"
	},
	{
		"quote": "They have computers, and they may have other weapons of mass destruction.",
		"author": "-Janet Reno"
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