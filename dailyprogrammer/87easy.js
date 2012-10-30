/* 
 *
[8/10/2012] Challenge #87 [easy] (Rectangle intersection) (self.dailyprogrammer)
submitted 8 days ago by nooodl [+1]
http://www.reddit.com/r/dailyprogrammer/comments/y26pr/8102012_challenge_87_easy_rectangle_intersection/
Write a function that calculates the [1] intersection of two rectangles, returning
either a new rectangle or some kind of null value.  You're free to represent these
rectangles in any way you want: tuples of numbers, class objects, new datatypes,
anything goes. For this challenge, you'll probably want to represent your rectangles
as the x and y values of the top-left and bottom-right points. (Rect(3, 3, 10, 10)
would be a rectangle from (3, 3) (top-left) to (10, 10) (bottom-right).) As an
example, rectIntersection(Rect(3, 3, 10 10), Rect(6, 6, 12, 12)) would return Rect(6,
6, 10, 10), while rectIntersection(Rect(4, 4, 5, 5), Rect(6, 6, 10 10)) would return
null.

*/


	function Rect(a,b,c,d) {
		var pt1 = [a,b]
			, pt2 = [c,d];

		this.pt1 = function () {
			return pt1;
		};
		this.pt1.x = function() {
			return pt1[0];
		};
		this.pt1.y = function () {
			return pt1[1];
		};

		this.pt2 = function () {
			return pt2;
		};
		this.pt2.x = function() {
			return pt2[0];
		};
		this.pt2.y = function () {
			return pt2[1];
		};
		this.rect = function () {
			return [a,b,c,d];
		};

	}

	rect1 = new Rect(3,3,10,10);
	rect2 = new Rect(6,6,12,12);


	function intersection(r1,r2) {
		function inBounds(n,b1,b2) {
			return (n > b1 && n < b2);
		}
		function contains(ra,rb) {
		//Check x;
		return (inBounds(ra.pt1.x(), rb.pt1.x(), rb.pt2.x())
				|| inBounds(ra.pt2.x(), rb.pt1.x(), rb.pt2.x()))

			//Check y:
			&& ( inBounds(ra.pt1.y(), rb.pt1.y(), rb.pt2.y())
					|| inBounds(ra.pt2.y(), rb.pt1.y(), rb.pt2.y()));

		}
		if (r1.constructor !== Rect || r2.constructor !== Rect) {
			console.log("error!");
			return null;
		}

		if (contains(r1,r2)) {
				console.log("yaya");
				return new Rect(
						Math.max(r1.pt1.x(),r2.pt1.x()),
						Math.max(r1.pt1.y(),r2.pt1.y()),
						Math.min(r1.pt2.x(),r2.pt2.x()),
						Math.min(r1.pt2.y(),r2.pt2.y())
						);
		}

		return null;
	}


	console.log( intersection (rect1,rect2).rect());
	console.log(intersection (new Rect(6,6,10,10), new Rect(4,4,5,5)));
	console.log(intersection (new Rect(1,1,4,4), new Rect(0,0,5,5)).rect());
	console.log(intersection (new Rect(1,1,4,4), new Rect(3,3,5,5)).rect());
