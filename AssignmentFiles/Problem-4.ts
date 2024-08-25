{
     // Problem 4 solution: Reverse Array

     function reverseArray<T>(input: T[]): T[]{
          return input.reverse();
     }

     const reverseNumber = reverseArray([10, 20, 30]);
     console.log(reverseNumber)

     const reverseString = reverseArray(["apple", "banana", "cherry"]);
     console.log(reverseString)
}