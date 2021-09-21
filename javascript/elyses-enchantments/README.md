# Elyses Enchantments

Welcome to Elyses Enchantments on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.
If you get stuck on the exercise, check out `HINTS.md`, but try and solve it without using those first :)

## Introduction

In Javascript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types.
The array elements can be accessed by their index.

Example of an array declaration and accessing an element by index:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers[2];
// => 3
```

## Instructions

As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10.

## 1. Retrieve a card from a stack

In order to pick a card, return the card at position `position` from the given stack.

```javascript
const position = 2;
getItem([1, 2, 4, 1], position);
// => 4
```

## 2. Exchange a card in the stack

Perform some sleight of hand and exchange the card at position `position` with the new card provided.
Return the adjusted stack.

```javascript
const position = 2;
const newCard = 6;
setItem([1, 2, 4, 1], position, newCard);
// => [1, 2, 6, 1]
```

## 3. Insert a card at the top of the stack

Make a card appear, by inserting a new card at the top of the stack.
Return the adjusted stack.

```javascript
const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]
```

## 4. Insert a card at the bottom of the stack

Make a card appear, by inserting a new card at the bottom of the stack.
Return the adjusted stack.

```javascript
const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]
```

## 5. Remove a card from the stack

Make a card disappear by removing the card the given `position` from the stack.
Return the adjusted stack.

```javascript
const position = 2;
removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]
```

## 6. Remove the top card from the stack

Make a card disappear by removing the card at the top of the stack.
Return the adjusted stack.

```javascript
removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]
```

## 7. Remove a card from the bottom of the stack

Make a card disappear by removing the card at the bottom of the stack.
Return the adjusted stack.

```javascript
removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]
```

## 8. Check the size of the stack

Check whether the size of the stack is equal a given `stackSize` or not.

```javascript
const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// => false
```

## Source

### Created by

- @ovidiu141
- @SleeplessByte

### Contributed to by

- @peterchu999