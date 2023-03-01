

import React, { useState, useEffect } from 'react';


import "./style.scss";


function LibraryPage() {
  const [books, setBooks] = useState([]);
 

  
  useEffect(() => {
    const url = 'http://kilianthoraval-server.eddi.cloud:8080/books';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setBooks(data);
    })
    .catch((error) => console.log(error));
}, []);
  


return (
  <div>
    <h2>Liste des livres :</h2>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} - {book.author} - {book.category} - {book.description} - {book.img}
        </li>
      ))}
    </ul>
  </div>
);
}



export default LibraryPage;