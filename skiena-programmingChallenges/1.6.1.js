


function threeN(i,j) {
	var nums = range(i,j),
			len = nums.length,
			index,
			path;

	for(index = 0; index < nums.length; index++) {

		path = 1;
		//print(nums[index]);
		while (nums[index] != 1) {
			if (nums[index] % 2 == 0) {
				nums[index] >>= 1; //Divide by 2 using bitwise operator
			} else {
				nums[index] = nums[index]*3 + 1
			}

			path++;
		}

		nums[index] = path;
	}


	return [i,j,Math.max.apply( Math, nums)];

}

print(threeN(1,10)[2] == 20);
print(threeN(100,200)[2] == 125);
print(threeN(900,1000)[2] == 174);


//Enumerate range (inclusive)
function range(start,end) {

	var range= [];

	while (start <= end)
		range.push(start++);

	return range;
}

