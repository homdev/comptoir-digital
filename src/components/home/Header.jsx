// src/components/layout/Header.jsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from './Logo';
import NavBar from './NavBar';
import Button from './ButtonLogin';
import LogoutButton from '@/src/components/auth/LogoutButton'; // Bouton de déconnexion

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); // Si un token existe, l'utilisateur est connecté
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = () => {
    router.push('/auth/login'); // Redirige vers la page de connexion
  };

  return (
    <header className="hidden lg:flex justify-between items-center px-8">
      <Logo />
      <NavBar isAuthenticated={isAuthenticated} />
      {isAuthenticated ? (
        <LogoutButton /> // Affiche "Se déconnecter" si l'utilisateur est connecté
      ) : (
        <Button text="Se connecter" onClick={handleLogin} /> // Bouton "Se connecter" si non connecté
      )}
    </header>
  );
};

export default Header;
