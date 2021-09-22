// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
	switch (name.toLowerCase().trim()) {
		case "pure strawberry joy":
			return 0.5;
		case "energizer":
		case "green garden":
			return 1.5;
		case "tropical island":
			return 3;
		case "all or nothing":
			return 5;
		default:
			return 2.5;
	}
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
	if (wedgesNeeded === 0) return 0;
	let totalWedges = 0;
	const AMOUNT_OF_WEDGES_FROM_SIZE = {
		small: 6,
		medium: 8,
		large: 10
	};

	for (let lime in limes) {
		if (totalWedges + AMOUNT_OF_WEDGES_FROM_SIZE[limes[lime]] >= wedgesNeeded)
			// @ts-ignore
			return ++lime;
		totalWedges += AMOUNT_OF_WEDGES_FROM_SIZE[limes[lime]];
	}
	return limes.length;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
	const remainingOrders = [...orders];

	for (let order of orders) {
		timeLeft -= timeToMixJuice(remainingOrders.shift());
		if (timeLeft <= 0) break;
	}

	return remainingOrders;
}
