/*
 *
 * 
 * [8/3/2012] Challenge #85 [intermediate] (3D cuboid projection) (self.dailyprogrammer)
submitted 4 days ago by nooodl [+1]Various
Write a program that outputs simple 3D ASCII art for a cuboid in an [1] oblique perspective, given a length, height, and depth, like this:
$ python 3d.py 20 10 3
   :::::::::::::::::::/
  :::::::::::::::::::/+
 :::::::::::::::::::/++
####################+++
####################+++
####################+++
####################+++
####################+++
####################+++
####################+++
####################++
####################+
####################
(The characters used for the faces (here #, :, and +) are fully up to you, but make sure you don't forget the / on the top-right edge.)

*/

	function cube(x,y,z) {
		function times(s,num) {
			return num == 0 ? 
				"" :
				s + times(s,--num);
		}
		var i,str;

		//Top part
		i = z; 
		while ( i > 0) {
			str = times(" ",i) + times(":", x-1) + "/" + times("+", z-i);
			i--;
			console.log(str);
		}
		

		//Middle part
		i = y-z;
		while (i > 0) {
			str = times("#", x) + times("+",z);
			i--;
			console.log(str);
		}

		//Last part
		i = z;
		while (i >= 0) {
			str = times("#", x) + times("+",i);
			i--;
			console.log(str);

		}
	}
	function cube2 (x,y,z) {
			function times(s, num) {
				var str = "";
				while (num-- > 0) str += s;
				return str;
			}

			var i,str;
			for(i = -z; i < y; i++) {

				if (i < 0)
					str = times(" ",-i) + times(":", x-1) + "/" + times("+", z+i);
				else if (i < y - z - 1 )
					str = times("#",x) + times("+",z);
				else 
					str = times("#",x) + times("+",z--);

				console.log(str);
			}
	}
	cube2(20,10,3);
