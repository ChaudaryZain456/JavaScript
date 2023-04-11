// Question # 1:   Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


// function createAdder(numberToAdd) {
//     return function(num) {
//       return num + numberToAdd;
//     }
//   }
//   const addFive = createAdder(5);
// console.log(addFive(10)); // Output: 15
// console.log(addFive(100)); // Output: 105


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question #2:    Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// function searchArray(arr, value) {
//     // base case
//     if (arr.length === 0) {
//       return false;
//     }
  
//     // recursive case
//     const first = arr[0];
//     const rest = arr.slice(1);
//     if (first === value) {
//       return true;
//     } else {
//       return searchArray(rest, value);
//     }
//   }

// const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 3)); // returns true
// console.log(searchArray(arr, 6)); // returns false


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question #3:    Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function addNewParagraph(text) {
//     // Create a new paragraph element
//     const newParagraph = document.createElement("p");
    
//     // Add text content to the new paragraph element
//     const paragraphText = document.createTextNode(text);
//     newParagraph.appendChild(paragraphText);
    
//     // Append the new paragraph element to the end of the document body
//     document.body.appendChild(newParagraph);
//   }
  
//   // Call the addNewParagraph function with a sample text
//   addNewParagraph("This is a new paragraph added to the HTML document.");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Question #4:    Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// function addListItem(text) {
//     // Create a new list item
//     var newItem = document.createElement("li");
    
//     // Set the text content of the new list item
//     newItem.textContent = text;
    
//     // Find the unordered list element in the HTML document
//     var list = document.getElementById("myList");
    
//     // Add the new list item to the unordered list
//     list.appendChild(newItem);
//   }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question #5:    Write a function that changes the background color of an HTML element. The function should take two arguments:
// the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.


function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Question #6: Write a function that saves an object to localStorage. The function should take two arguments: the first 
//   argument is a string representing the key to use for storing the object, and the second argument is the object to store.  
  
//   function saveToLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// const myObject = { name: "John", age: 30 };
// saveToLocalStorage("myKey", myObject);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question #7:    Write a function that retrieves an object from localStorage. The function should take one argument, 
// which is a string representing the key used to store the object. The function should return the object.

// function getObjectFromLocalStorage(key) {
//     // Get the object from localStorage using the key
//     const serializedObject = localStorage.getItem(key);
  
//     // Parse the serialized object into a JavaScript object
//     const parsedObject = JSON.parse(serializedObject);
  
//     // Return the parsed object
//     return parsedObject;
//   }

//   // Define an object to store in localStorage
// const myObject = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
//   };
  
//   // Serialize the object and store it in localStorage
//   localStorage.setItem('myKey', JSON.stringify(myObject));
  
//   // Retrieve the object from localStorage using the key
//   const retrievedObject = getObjectFromLocalStorage('myKey');
  
//   // Use the retrieved object
//   console.log(retrievedObject.name); // Output: John
//   console.log(retrievedObject.age); // Output: 30
//   console.log(retrievedObject.email); // Output: john@example.com
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question #8:    Write a function that takes an object and saves each property to localStorage using the property nameas the key and the 
// property value as the value. The function should also retrieve the object from localStorage and return it as a new object


// function saveObjectToLocalStorage() {
//     // prompt the user for an object
//     const inputObject = prompt("Please enter an object:");
  
//     // convert the input string to an actual object
//     const objectToSave = JSON.parse(inputObject);
  
//     // save each property to localStorage
//     for (let prop in objectToSave) {
//       localStorage.setItem(prop, objectToSave[prop]);
//     }
  
//     // retrieve the object from localStorage and return it as a new object
//     const retrievedObject = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       retrievedObject[key] = localStorage.getItem(key);
//     }
//     return retrievedObject;
//   }

//   const savedObject = saveObjectToLocalStorage();
//   console.log(savedObject);
