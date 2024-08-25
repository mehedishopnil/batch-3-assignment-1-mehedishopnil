{
 // Problem 6 Solution:: 

 type Book = {
     title: string,
     author: string,
     publishedYear: number,
 }

 function isRecentBook(book: Book):boolean{
     const currentYear = new Date().getFullYear();
     const result = currentYear - book.publishedYear;
     if(result <= currentYear){
          return true;
     } else{
          return false;
     }
 }

 const book1: Book = {
     title: "Sample Book",
     author: "John Doe",
     publishedYear: 2022
 };
 const isRecentYear = isRecentBook(book1);
 console.log(isRecentYear);


}