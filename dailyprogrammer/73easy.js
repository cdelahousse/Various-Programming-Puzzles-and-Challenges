/*
 *
 * http://www.reddit.com/r/dailyprogrammer/comments/w4l6e/762012_challenge_73_easy/
 *
 * [7/6/2012] Challenge #73 [easy] (self.dailyprogrammer)
 * submitted 22 days ago by nooodl Various
 * During the 70s and 80s, some handheld calculators used a very different notation
 * for arithmetic called Reverse Polish notation (RPN). Instead of putting operators
 * (+, *, -, etc.) between their operands (as in 3 + 4), they were placed behind
 * them: to calculate 3 + 4, you first inputted the operands (3 4) and then added
 * them together by pressing +.
 * Internally, this was implemented using a stack: whenever you enter a number, it's
 * pushed onto the stack, and whenever you enter an operator, the top two elements
 * are popped off for the calculation. Here's an example of a RPN calculator
 * calculating 3 4 * 6 2 - +:
 * [3] --> 3
 * [4] --> 3 4
 * [*] --> 12      ( 3 * 4 = 12)
 * [6] --> 12 6
 * [2] --> 12 6 2
 * [-] --> 12 4    ( 6 - 2 =  4)
 * [+] --> 16      (12 + 4 = 16)
 * Your task is to implement a program that reads a string in Reverse Polish notation
 * and prints the result of the calculation. Your program should support positive and
 * negative integers and the operators +, -, *. (For extra credit, you can implement
 *
 * extra functions, such as decimal numbers, division, exponentiation, etc.)
 */


function revPol(exp) {

	var symbols = "*+/-";

	//Sanitize this bitch
	exp = exp.replace(/[^\d\+-/\*\s\(\)]*/g,"");
	//Trim
	exp = exp.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	//exp = exp.replace(/\(/,' ( ').replace(/\)/,' ) ');

	var expArray = exp.split(/\s/);

	console.log(expArray);

	var stack= [],
			opd,opd2,result, i, ch, str;


	for (i = 0; i < expArray.length; i++) {

		ch = expArray[i];
		//Numbers
		if (!isNaN(ch)) {
			stack.push(ch);
		}
		//Operators
		else if (symbols.indexOf(ch) >= 0) {
			opd2 = stack.pop();
			opd = stack.pop();

			str = "return " + opd + ch + opd2 + ";";

			//Let Javascript do the calculation
			result = (new Function(str))();
			stack.push(result);

		
		}
		////Parens
		//else {



			////var start = i;
				////subStr = exp.slice(i+1,end);

			//console.log(subStr);
			//i = end;
			//result = revPol(subStr);

			//stack.push(result);

		//}

	}
	return stack[0];

}

//revPol("3 4 * 6 2 - +");
revPol("(3 4 * 6 2 - +) (3 4 * 6 2 - +) +");
