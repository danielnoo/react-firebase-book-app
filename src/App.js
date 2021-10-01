import { useState, useEffect } from 'react';
import './App.css';
import realtime from './firebase.js'
import {ref, onValue} from 'firebase/database'

function App() {

  const [bookList, setBookList] = useState([]);

  useEffect (() => {
    console.log('hello')
    // create a thing that points to our specific database
    const dbRef = ref(realtime);

    // set up our firebase subscription
    onValue(dbRef, (snapshot) => {
      
      const myData = snapshot.val();
      const newArray = [];

      // loop through myData, for each property inside it, get it into array

      for (let propertyName in myData) {
        // create a new local object for each loop iteration
        const bookObject = {
          key: propertyName,
          title: myData[propertyName]
        }
        newArray.push(bookObject);
      }
      
      setBookList(newArray);
    });

  }, []);

  return (
    <div className="App">
      <h1>readin'</h1>

      <ul>
        {
          bookList.map( (book) => {
            return(
              <li key={book.key}>
                <p>{book.title}</p>
              </li>
            )
          
          })
        }
      </ul>
    </div>
  );
}

export default App;

// // Go get our data from Firebase and put it on the page!
    // Create some state to hold our list of books that we will get from Firebase.
    // Set up a SUBSCRIPTION to our firebase database. What this means is that we want to connect an EVENT LISTENER to our database, which will fire when the page loads and each time the data in the database changes. This will use Firebase's custom-built 'value' event.
        // Once we get the data from our database, we need to put it somewhere. This is much like working with an API! Once we get a response from our API, we need to put the data we get back somewhere, and use that data to update our page - we will use state!
    // Set up our JSX so that it can map our books to the page.


// Allow the user to add books to firebase (and thus to the page).
    // We need a form! It should have a label, text input and a submit button.
    // We need to get the user's input from the text input.
        // This is a problem for what we know up to now, since we previously have directly accessed the DOM using document.querySelector (or other methods) to go get input values. However, in React, we never ever ever ever ever ever *everrrrr* should be directly accessing the DOM - only React should interact directly with the DOM. So how can we go get the user's input? Hmmmm....
    // When the user hits the submit button, we want to get their input and push it into Firebase.


// Allow the user to delete books from firebase (and thus from the page).
    // We need to put a button next to each book on the page that will call a function to delete that book.
    // When the user clicks the button, we need a way to go get THAT SPECIFIC BOOK's node in Firebase and delete it. This means, we need some way to pass an identifier of some kind to the function that will delete the book.

    // We set up a subscription ONCE, and then it just persists while our app runs. What that means, is that, much like an API call (HINT HINT) we want to set up our subscription just ONCE TIME right when our app loads. We can use useEfect with an empty dependency array for this!
