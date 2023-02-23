import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.scss';

const LoginForm = () => {
  // Utiliser useLocation pour rediriger vers la page précédente après l'authentification
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  // État local pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // État local pour stocker les messages d'erreur
  const [errorMsg, setErrorMsg] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Appel API pour se connecter avec les informations du formulaire
    try {
      const response = await axios.post('http://kilianthoraval-server.eddi.cloud/auth/login', formData);
      const { accessToken } = response.data;

      // Stocker le jeton d'authentification dans le stockage local
      localStorage.setItem('accessToken', accessToken);

      // Rediriger vers la page précédente
      window.location.replace(from.pathname);
    } catch (error) {
      // Gérer les erreurs d'authentification
      if (error.response && error.response.status === 401) {
        setErrorMsg('Adresse email ou mot de passe incorrect');
      } else {
        setErrorMsg('Une erreur est survenue, veuillez réessayer plus tard');
      }
    }
  };

  // Fonction pour mettre à jour les valeurs du formulaire en fonction de l'entrée utilisateur
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Connexion</h2>
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="submit" value="Se connecter" />
        </div>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        <div className="signup-link">
          Pas encore inscrit ? <Link to="/signup">Créer un compte</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;