//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// const COLOR_CODE = {
// 	black: 0,
// 	brown: 1,
// 	red: 2,
// 	orange: 3,
// 	yellow: 4,
// 	green: 5,
// 	blue: 6,
// 	violet: 7,
// 	grey: 8,
// 	white: 9
// };

const COLOR_CODE = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white"
];

export const decodedValue = colorArr => {
	if (colorArr.length === 0) return 0;
	const [firstColor, secondColor] = colorArr;
	return COLOR_CODE.indexOf(firstColor) * 10 + COLOR_CODE.indexOf(secondColor);
};
