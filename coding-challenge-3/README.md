# Coding challenge 3

## Arrays

An array is a data type that JavaScript provides for storing sequences of data.

An array is written as a list of values between square brackets, separated by commas.

```JavaScript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);
// -> 5
console.log(listOfNumbers[0]);
// -> 2
console.log(listOfNumbers[2-1]);
// -> 3
```

## what is the notation needed to get elements inside an array

The notation for getting at the elements inside an array also uses square brackets. A pair of square brackets `[ ]` inmediately after an expression, with another expression inside of them, `array[i]` will look up the element in the **left-hand** expression that corresponds to the _index_ given by the expression in the brackets.

## how can we access properties in JavaScript?

The two main ways to access properties in JavaScript are with a dot `.` and with square brackets `[ ]`.

## Both `value.x` and `value[x]` access a property on `value` - but not necessarily the same property. What is the difference in how x is interpreted?

The difference is in how `x` is interpreted.

When using a dot `.`, the word after the dot is the **literal** name of the property.

When using square brackets `[ ]`, the expression between the brackets is _evaluated_ to get the property name.

Whereas `value.x` fetches the property of `value` named `x`, `value[x]` tries to evaluate the expression `x` and uses the result, converted to a **string**, as the property name.

So if you know that the property you are interested in is called _color_, you say `value.color`. If you want to extract the property named by the value held in the binding `i`, you say `value[i]`.

## in order to create a `function` that takes in an `array` and return the sum of the first and last item in the array:

```JavaScript
function arraySum(listOfValues) {
    let result = listOfValues[0] + listOfValues[listOfValues.length -1];
    console.log(result);
}
```
