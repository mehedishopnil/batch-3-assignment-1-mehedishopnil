import { error } from "console";

{
     // Problem 7 Solution:: string type checking.

     function logString <T> (input: unknown):void {
          if (typeof input === "string"){
               console.log(input);
          } else {
               console.error("Error: Input is not a string");
          }
     }

     logString('Hello, TypeScript!');

    
}