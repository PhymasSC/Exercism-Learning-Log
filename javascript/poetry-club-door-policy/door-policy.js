// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function frontDoorResponse(blurb) {
	return blurb[0];
}

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the back door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function backDoorResponse(blurb) {
  let ret = blurb.trimEnd();
	return ret[ret.length - 1];
}

/**
 * Capitalizes a word, meaning only the first character is a capital, and the
 * remaining letters are lower case.
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
	const wordArr = [...word];
	let ret = wordArr.reduce((str, alphabet) => {
		return str + alphabet.toLowerCase();
	}, wordArr.shift().toUpperCase());
	return ret;
}

/**
 * Give the password for the front-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function frontDoorPassword(responses) {
	return capitalize(responses);
}

/**
 * Give the password for the back-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function backDoorPassword(responses) {
	return capitalize(responses) + ", please";
}
