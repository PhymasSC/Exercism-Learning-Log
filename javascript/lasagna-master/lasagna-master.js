/// <reference path="./global.d.ts" />

import { throws } from "assert";

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * Check the cooking status by remaining time.
 *
 * @param {number} remainingTime
 * @returns {string} the cooking status
 */
export function cookingStatus(remainingTime) {
	if (remainingTime === 0) return "Lasagna is done.";
	if (!remainingTime) return "You forgot to set the timer.";
	return "Not done, please wait.";
}

/**
 * Estimate the preparation time by given array of layers and average preparation time
 *
 * @param {String[]} layers
 * @param {number} meanPrepTime
 * @returns {number} the estimated preparation time
 */
export function preparationTime(layers, meanPrepTime) {
	return layers.length * (meanPrepTime || 2);
}

/**
 * Calculate the quantities of noodles and sauce required to cook the lasagna
 *
 * @param {String[]} layers
 * @returns {Recipe} the amount of noodles and sauce required
 */
export function quantities(layers) {
	const numberOfNoodles = layers.filter(
		ingredient => ingredient.toLowerCase() === "noodles"
	).length;
	const numberOfSauce = layers.filter(
		ingredient => ingredient.toLowerCase() === "sauce"
	).length;
	return { noodles: numberOfNoodles * 50, sauce: numberOfSauce * 0.2 };
}

/**
 * Add secret ingredient of friend into my list
 *
 * @param {String[]} friendsList
 * @param {String[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
	myList.push(friendsList[friendsList.length - 1]);
}

/**
 *
 * @param {Recipe} recipe
 * @param {number} factor
 * @returns
 */
export function scaleRecipe(recipe, factor) {
	factor = factor * 0.5 || 1;
	const scaledRecipe = { ...recipe };
	for (const ingredient in scaledRecipe) {
		scaledRecipe[ingredient] *= factor;
	}
	return scaledRecipe;
}
