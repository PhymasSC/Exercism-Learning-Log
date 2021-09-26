//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = sentence => {
	const charMap = [];
	const res = [...sentence.toLowerCase().replace(/[0-9\s\'\"\_\.!@#\$\%\^\&\*\(\)]/g, "")].forEach(char => {
		if (!charMap.includes(char)) return charMap.push(char);
	});
	return charMap.length === 26;
};
