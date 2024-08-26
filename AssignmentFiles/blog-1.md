# The significance of union and intersection types in Typescript.


*** Union Types ***

> Union Types: Union types are allows a value to be one of several types. 
it actually represented by the '|' symbol.

Example: string | number  that means  'string ' or 'number'.

> Union types provide flexibility to allowing variable or function parameters to accept more than one type.
> This is useful when a value could naturally have multiple types.

Example: If the id number or string parameter

``` typescript: 
function printId(id: string | number) {
    console.log(`Your ID is: ${id}`);
} 

```
 
> When union types allow multiple types then it enforces type safety by returning to handle each possible type correctly.
> It reduces runtime errors.
> Union types make it clear that a value can have different types.
Example: 
``` typescript:
  type Status = "success" | "error" | "loading"; 
  ```


 *** Intersection ***

 > Intersection types allow us to create a new type includes all properties and methods from the interested types.
 Example: 'businessman & employee' means the value must meet the requirements of both the 'businessman' and 'employee'.

 > This type allows to create a new type includes all properties and methods from the interested types.

 > Intersection types allow for the composition of complex types from simpler ones, promoting reuse and modularity in type definitions.
 
 ``` typescript:
 interface User {
    id: number;
    name: string;
}

interface Admin {
    role: "admin";
}

type AdminUser = User & Admin;

const admin: AdminUser = {
    id: 1,
    name: "Alice",
    role: "admin"
};
```

 > Understanding how to use these types effectively allows us to create robust and maintainable applications.

