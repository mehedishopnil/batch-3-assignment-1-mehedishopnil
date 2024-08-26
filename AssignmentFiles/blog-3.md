# Why Type Guards Necessary?

> Type Guard: Type guards are a feature in TypeScript that allow safely and accurately determine the type of a variable within a specific block code. They are essential when we work with union types and where a variable can be multiple possible types. 

> Type Guard Necessary for:

1. Type Safety

2. Avoiding Runtime Errors.

3. Improved Code Readability.

4. Enhanced Intellisense Support.


# Various Types of Type Guards and Their Use Cases

***typeof Type Guard:***
The typeof operator is used to check the type of a primitive value (e.g., string, number, boolean, symbol, undefined, object, and function).

 > Use Case:
 typeof is ideal for distinguishing between primitive types in a union.


***instanceof Type Guard:***
The instanceof operator checks whether an object is an instance of a particular class or constructor function.

> Use Case:
instanceof is useful when working with object-oriented code, where you need to determine whether an object is an instance of a specific class.


***in Type Guard:***
The in operator checks whether a property exists in an object.

> Use Case:
The in type guard is useful when you need to check if an object contains a certain property, especially when working with objects of different shapes.


**never Type Guard:**

The never type represents values that never occur, and type guards can be used to ensure exhaustive checks, particularly in switch statements or when dealing with unions of literals.

> Use Case:
Useful for exhaustiveness checking, ensuring that all possible cases are handled.