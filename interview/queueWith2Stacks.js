//Build a Queue using only two stacks.

//I'll be using JS arrays, but only their queue functions
//Every action is 2xO(1) amortised.
function TwoStackQueue (list) {
	var ins = list || [],
			out = [],
			n = 0;


	this.enqueue = function (x) {
		ins.push(x);
		n++;
	};

	this.dequeue = function() {
		if (out.length === 0) {

			//Nothing in the Data Structure
			if (ins.length === 0) return false;

			//Push everything to out
			while (ins.length !== 0) {
				out.push(ins.pop());
			}
		}

		n--;

		// Out stack in now in reverse order
		return out.pop();

	};

	this.size = function() {
		return n;
	};
}

var q = new TwoStackQueue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
q.enqueue('e');

while (q.size() !== 0) {
	console.log(q.dequeue());
}
