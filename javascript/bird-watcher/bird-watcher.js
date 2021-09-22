// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	return birdsPerDay.reduce((previous, current) => {
		return previous + current;
	}, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	let firstDayInWeek = (week - 1) * 7;
	return totalBirdCount(birdsPerDay.splice(firstDayInWeek, 7));
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // NOTE: Use reference to fullfil test "Do not create a new array"
	const DAY_ONE = 0;
	for (let day = DAY_ONE; day < birdsPerDay.length; day += 2) {
		birdsPerDay[day]++;
	}
	return birdsPerDay;
}
