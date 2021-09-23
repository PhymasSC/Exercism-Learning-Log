# Elyses Analytic Enchantments

Welcome to Elyses Analytic Enchantments on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.
If you get stuck on the exercise, check out `HINTS.md`, but try and solve it without using those first :)

## Introduction

In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, or even mixed types. The array elements can be accessed by their index. Arrays are also given a bunch of built-in methods. Some of these built-in methods can analyse the contents of the array. Many of the built-in functions that analyse the contents of an array, take a [`predicate`][predicate_in_programming] as argument.

The built-in functions are meant to be used _instead of a `for` loop_ or the built-in `Array#forEach()`:

Example of analysis using a for loop :

```javascript
const numbers = [1, 'two', 3, 'four'];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === 'two') {
    return i;
  }
}
// => 1
```

Example of analysis using a built-in method:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two');
// => 1
```

[predicate_in_programming]: https://derk-jan.com/2020/05/predicate/

## Instructions

Elyse, magician-to-be, continues her training. She will be given several stacks of cards that she needs to perform her tricks.
To make things a bit easier, she only uses the cards 1 to 10.

In this exercise, use built-in methods to analyse the contents of an array.

## 1. Find the position of a card

Elyse wants to know the position (index) of a card in the stack.

```javascript
const card = 2;
getCardPosition([9, 7, 3, 2], card);
// => 3
```

## 2. Determine if a card is present

Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific `number`.

```javascript
const card = 3;
doesStackIncludeCard([2, 3, 4, 5], card);
// => true
```

## 3. Determine if each card is even

Elyse wants to know if every card is even -- in other words, if each number in the stack is an even `number`.

```javascript
isEachCardEven([2, 4, 6, 7]);
// => false
```

## 4. Check if the stack contains an odd-value card

Elyse wants to know if there is an odd number in the stack.

```javascript
doesStackIncludeOddCard([3, 2, 6, 4, 8]);
// => true
```

## 5. Get the first odd card from the stack

Elyse wants to know the value of the first card that is odd.

```javascript
getFirstOddCard([4, 2, 8, 7, 9]);
// => 7
```

## 6. Determine the position of the first card that is even

Elyse wants to know the position of the first card that is even.

```javascript
getFirstEvenCardPosition([5, 2, 3, 1]);
// => 1
```

## Source

### Created by

- @peterchu999
- @SleeplessByte