

import React, { useState, useEffect } from 'react';

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";



import "./style.scss";


function LibraryPage() {
  // const [books, setBooks] = useState([]);
  const [data, setData] = useState([]);

  
  useEffect(() => {
//     const url = 'http://kilianthoraval-server.eddi.cloud:8080/books';
//      fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       setBooks(data);
//     })
//     .catch((error) => console.log(error));
// }, []);
const fetchData = async () => {
  const response = await fetch("http://kilianthoraval-server.eddi.cloud:8080/books");
  const result = await response.json();
  setData(result);
};

fetchData();
}, []);

// return (
//   <div>
//     <h2>Liste des livres :</h2>
    
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>
         
//           {book.title} - {book.author} - {book.category} - {book.description} - {book.img}
//         </li>
//       ))}
//     </ul>
//   </div>
  
// );
// }
return (
  <div>
    <h1>React Awesome Slider avec appel à une API</h1>
    <AwesomeSlider>
      {data.map((book) => (
        <div key={book.id}>
          <img src={book.img} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ))}
    </AwesomeSlider>
  </div>
);
};


export default LibraryPage;