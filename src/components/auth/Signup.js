import React from 'react';
import { useState } from 'react';
import './Signup.scss'

function RegistrationForm() {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // function handleSignupSubmit(event) {
    //   event.preventDefault();
    
    //   // Récupération des champs de formulaire
    //   const username = document.getElementById('username').value;
    //   const password = document.getElementById('password').value;
      
    //   // Envoi de la requête AJAX à l'endpoint d'authentification
    //   fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    //   })
    //   .then(response => {
    //     if (response.ok) {
    //       // Rediriger l'utilisateur vers la page d'accueil s'il est authentifié
    //       window.location.replace('/home');
    //     } else {
    //       // Afficher un message d'erreur s'il y a une erreur d'authentification
    //       throw new Error('Mauvaises informations de connexion.');
    //     }
    //   })
    //   .catch(error => {
    //     // Afficher le message d'erreur dans la console
    //     console.error(error);
    //   });
    // }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pseudo:
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mot de passe:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirmation du mot de passe:
        <input
          type="password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Adresse email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirmation de l'adresse email:
        <input
          type="email"
          name="confirmEmail"
          value={formState.confirmEmail}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">S'inscrire</button>
    </form>
  );
}


export default RegistrationForm;
