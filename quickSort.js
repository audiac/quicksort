function createRandomArray(num) {
	newArray = [];
	for (var i = 0; i < num; i++) {
		newArray[i] = Math.floor((Math.random()*10)+1);
	}
	return newArray;
}

function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

var myArray = createRandomArray(5);
console.log("Unsorted array: " + myArray);
var sortedArray = quickSort(myArray);
console.log("Sorted array: " + sortedArray);