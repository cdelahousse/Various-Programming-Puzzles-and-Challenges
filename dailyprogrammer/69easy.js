
/* http://www.reddit.com/r/dailyprogrammer/comments/vmblw/6262012_challenge_69_easy/

	 
	 Write a program that takes a title and a list as input and outputs the list in a nice column. Try to make it so the title is centered. For example:

title: 'Necessities'
input: ['fairy', 'cakes', 'happy', 'fish', 'disgustipated', 'melon-balls']

output:

    +---------------+
    |  Necessities  |
    +---------------+
    | fairy         |
    | cakes         |
    | happy         |
    | fish          |
    | disgustipated |
    | melon-balls   |
    +---------------+

		Bonus: amend the program so that it can output a two-dimensional table instead of a list. For example, a list of websites:

titles: ['Name', 'Address', 'Description']
input:  [['Reddit', 'www.reddit.com', 'the frontpage of the internet'],
        ['Wikipedia', 'en.wikipedia.net', 'The Free Encyclopedia'],
        ['xkcd', 'xkcd.com', 'Sudo make me a sandwich.']]

output:

    +-----------+------------------+-------------------------------+
    |   Name    |     Address      |          Description          |
    +-----------+------------------+-------------------------------+
    | Reddit    | www.reddit.com   | the frontpage of the internet |
    +-----------+------------------+-------------------------------+
    | Wikipedia | en.wikipedia.net | The Free Encyclopedia         |
    +-----------+------------------+-------------------------------+
    | xkcd      | xkcd.com         | Sudo make me a sandwich       |
    +-----------+------------------+-------------------------------+

Thanks to [1] Medicalizawhat for suggesting this problem at [2] /r/dailyprogrammer_ideas (a version of this problem was originally posted [3] here). If you have a problem you think would be good for us, [4] head over there and post it!
*/

function table (obj) {
	function repeatChar (ch,num) {
		return num === 0 ?
			"" :
			ch + repeatChar(ch,--num);
	}
	
	var lineStart = "| ",
			lineEnd = " |\n",
			longestElem,
			width,
			divider,
			elem;

	longestElem = obj.input.reduce(function (a,b) {
		return a.length > b.length ?
			a :
			b;
	});

	width = longestElem.length > obj.list.length ?
		longestElem.length :
		obj.list.length;


	divider = "+-" + repeatChar("-",width) + "-+\n";

	var str = divider;

	str += lineStart
		+ repeatChar(" ",Math.floor((width - obj.list.length)/2))
		+ obj.list
		+ repeatChar(" ",Math.ceil((width - obj.list.length)/2))
		+ lineEnd;

	str += divider;

	for (var elem in obj.input) {
		str += lineStart
			+ obj.input[elem] + repeatChar(" ",width - obj.input[elem].length)
			+ lineEnd;
	}

	str += divider;


	return str;

}


console.log(table( {
	list : 'Necessities',
	input : ['fairy', 'cakes', 'happy', 'fish', 'disgustipated', 'melon-balls']
}));
