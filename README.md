# Unhandled TypeError in JavaScript Function

This repository demonstrates a common error in JavaScript where a function attempts to access a property of an object without first checking if the object or the property exists.  This can lead to a `TypeError` if the object is null, undefined, or the property is not present.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version that handles the potential type errors.

The error occurs when the function receives input other than a string or array. To resolve this,  we must add explicit type checks before trying to use the object's properties. 

## How to reproduce
1. Clone this repository.
2. Open the bug.js file and run it using a Node.js environment. (node bug.js)
3. Observe the TypeError when the function receives `undefined` or a number as input.

## Solution
The solution adds checks to ensure the input is an array or string before accessing its length, and also handles the case of a null input.