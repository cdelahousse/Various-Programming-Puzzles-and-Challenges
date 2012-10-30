

var weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]


function day(yyyy,mm,dd) {
	//month is 0-11
	return weekdays[(new Date(yyyy,mm-1,dd)).getDay()];
}

console.log(day(1111,1,4));
console.log(day(400,1,4));
