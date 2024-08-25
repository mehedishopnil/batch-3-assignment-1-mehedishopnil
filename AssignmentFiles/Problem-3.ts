{
     // Problem 3 Solutions: Filter Even Numbers

     function filterEvenNumbers(numbers: number[]): number[] {
          return numbers.filter(num => num % 2 ===0);
     }

     const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
     console.log(evenNumbers)
}