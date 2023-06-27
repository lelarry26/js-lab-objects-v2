//1. Create an object representing a book, with properties for its title, author, and number of pages.
// let book = {
//    title: "To Kill A Mockingbird",
//    author: "Harper Lee", 
//    pageLength: "281"
// }
//----------------------------------------------------------------------------------------------------------
//2. Given the following person object:
// let person = {
//   name: 'Jane',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA',
//     zip: '12345'
//   }
// };
// Write code to do the following:

// - Print the person's name name 
// - Print the person's city
// - Print the person's state
// - Add a lastName key of Doe to the person object.
// - Change the name in the person object it John. 
// - Update the street key in the person object to : 456 Main St. 
// - Remove the zip key from the person object

// console.log(person.name);
// console.log(person.address.city);
// console.log(person.address.state);
// let lastName = [];
// lastName.push(person);
// person.lastName = "Doe";
// person.name = "John";
// person.address.street = "456 Main St.";
// let zip = [];zip.pop(person);
// delete person.address["zip"];
// console.log(person);
//----------------------------------------------------------------------------------------------------------
//3. Phonebook object
// Given the following object representing a mapping from names to phone numbers:

// let phonebook_obj = {
//   Alice: '703-493-1834',
//   Bob: '857-384-1234',
//   Elizabeth: '484-584-2923'
// }
// Write code to do the following:

// - Print Elizabeth's phone number.
// - Add an entry to the dictionary: Kareem's number is 938-489-1234.
// - Delete Alice's phone entry.
// - Change Bob's phone number to '968-345-2345'.
// - Print all the phone entries.

//console.log (phonebook_obj.Alice);
// let Kareem = [];
// Kareem.push(phonebook_obj);
// phonebook_obj.Kareem = '938-489-1234';
// delete phonebook_obj['Alice'];
// phonebook_obj.Bob = '968-345-2345';
// console.log(phonebook_obj);
//----------------------------------------------------------------------------------------------------------
//4. Nested objects
//Given the following object:

// let ramit = {
//   name: 'Ramit',
//   email: 'ramit@gmail.com',
//   interests: ['movies', 'tennis'],
//   friends: [
//     {
//       name: 'Jasmine',
//       email: 'jasmine@yahoo.com',
//       interests: ['photography', 'tennis']
//     },
//     {
//       name: 'Jan',
//       email: 'jan@hotmail.com',
//       interests: ['movies', 'tv']
//     }
//   ]
// }
// - Write a js expression that gets the email address of Ramit.
//console.log(ramit.email)

// - Write a js expression that gets the first of Ramit's interests.
//console.log(ramit.interests[0]);

// - Write a js expression that gets the email address of Jasmine.
//console.log(ramit.friends[0].email);

// - Write a js expression that gets the second of Jan's two interests.
//console.log(ramit.friends[1].interests[1]);
//----------------------------------------------------------------------------------------------------------
//5. Given an array of objects representing people, extract an array of just their ages. 
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];
// console.log([people[0].age, people[1].age, people[2].age]);
//----------------------------------------------------------------------------------------------------------
//6. Given an array of objects representing books, extract an array of just their titles.

// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//   { title: '1984', author: 'George Orwell' },
//   { title: 'Pride and Prejudice', author: 'Jane Austen' }
// ];
// console.log([books[0].title, books[1].title, books[2].title]);
//----------------------------------------------------------------------------------------------------------
//7. Given an array of objects representing cars, extract an array of just their colors.

// const cars = [
//   { make: 'Toyota', model: 'Corolla', color: 'red' },
//   { make: 'Honda', model: 'Civic', color: 'blue' },
//   { make: 'Ford', model: 'F-150', color: 'black' }
// ];
// console.log([cars[0].color, cars[1].color, cars[2].color]);