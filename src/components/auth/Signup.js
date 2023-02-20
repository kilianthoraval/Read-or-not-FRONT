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
    // Effectuer la soumission du formulaire ici (par exemple, envoyer les données au serveur)
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
