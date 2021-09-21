# Freelancer Rates

Welcome to Freelancer Rates on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.
If you get stuck on the exercise, check out `HINTS.md`, but try and solve it without using those first :)

## Introduction

Many programming languages have specific numeric types to represent different types of numbers, but JavaScript only has two:

- `number`: a numeric data type in the double-precision 64-bit floating point format (IEEE 754).
  Examples are `-6`, `-2.4`, `0`, `0.1`, `1`, `3.14`, `16.984025`, `25`, `976`, `1024.0` and `500000`.
- `bigint`: a numeric data type that can represent _integers_ in the arbitrary precision format.
  Examples are `-12n`, `0n`, `4n`, and `9007199254740991n`.

If you require arbitrary precision or work with extremely large numbers, use the `bigint` type.
Otherwise, the `number` type is likely the better option.

## Instructions

In this exercise you will be writing code to help a freelancer communicate with a project manager by providing a few utility functions to quickly calculate day- and month rates, optionally with a given discount.

We first establish a few rules between the freelancer and the project manager:

- The daily rate is 8 times the hourly rate;
- A month has 22 billable days.

If the freelancer bills the project manager per month, there is a discount applied. This can be handy if the project manager has a fixed budget.

Discounts are modeled as fractional numbers (percentage) between `0.0` (`0%`, no discount) and `0.90` (`90%`, maximum discount).

## 1. Calculate the day rate given an hourly rate

Implement a function to calculate the day rate given an hourly rate:

```javascript
dayRate(89);
// => 712
```

The day rate does not need to be rounded or changed to a "fixed" precision.

## 2. Calculate the month rate, given an hourly rate and a discount

Implement a function to calculate the month rate, and apply a discount:

```javascript
monthRate(89, 0.42);
// => 9086
```

The discount is always passed as a number, where `42%` becomes `0.42`. The result _must_ be rounded up to the nearest whole number.

## 3. Calculate the number of workdays given a budget, rate and discount

Implement a function that takes a budget, a rate per hour and a discount, and calculates how many full days of work that covers.

```javascript
daysInBudget(20000, 89, 0.2002);
// => 35
```

The discount is always passed as a `number`. `20.02%` is passed as `0.2002`. The result is the number of days should be rounded down to full days of work.

## Source

### Created by

- @SleeplessByte