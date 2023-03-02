

import React, { useState, useEffect } from 'react';

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";


import "./style.scss";

const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "red",
  opacity: 0.7,
  fontSize: "20px"
};
const contentStyle = {
  color: "black",
  fontSize: "20px"
};
const bgImg = {
  // position: "absolute",
  zIndex: -1,
  left: 0,
  top: 0,
  width: "80%"
};

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
  <AwesomeSlider
  organicArrows={false}
  buttonContentRight={<p style={buttonStyle}>{">"}</p>}
  buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
  play
  // customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
  cancelOnInteraction={false} // should stop playing on user interaction
  interval={6000}
  >
{data.map((book) => (
        <div key={book.id}>
<div style={{ zIndex: 2 }}>
        <div>
          <img
            style={{width: "auto", height: "auto" }}
            src={book.img} 
            alt={book.title}
          />
          <h1>{book.title}</h1>
        <p>{book.description}</p>
          {/* <button> Click Me </button> */}
        </div>
      </div>
    
      </div>
      ))}
    </AwesomeSlider>
    );
  };


export default LibraryPage;