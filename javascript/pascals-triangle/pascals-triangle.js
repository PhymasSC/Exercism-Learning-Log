//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const factorial = number => {
	if (number <= 1) return 1;
	let result = 1;
	result = factorial(number - 1) * number;
	return result;
};

const combination = (totalNumberOfObjects, numberOfCurrentObject) => {
	let nFactorial = factorial(totalNumberOfObjects);
	let rFactorial = factorial(numberOfCurrentObject);
	return (
		nFactorial /
		(rFactorial * factorial(totalNumberOfObjects - numberOfCurrentObject))
	);
};

export const rows = number => {
	if (number <= 0) return [];
	let res = new Array(number);
	for (let row = 0; row < number; row++) {
		res[row] = new Array(row + 1).fill(1);
		for (let column = 2; column <= row; column++) {
			res[row][column - 1] = combination(row, column - 1);
		}
	}
	return res;
};
