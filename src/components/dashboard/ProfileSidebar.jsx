"use client";

import { useState } from 'react';
import { FaHome, FaUserEdit, FaPowerOff, FaBars, FaTimes, FaCheckCircle } from 'react-icons/fa';

const ProfileSidebar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('dashboard'); // Suivi du lien actif

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterne entre ouvert/fermé
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Change le lien actif lorsqu'on clique dessus
    setIsOpen(false); // Ferme la sidebar après avoir cliqué sur un lien sur mobile
  };

  return (
    <div className="relative">
      {/* Icone Burger visible uniquement sur petits écrans, placé à droite */}
      <button 
        onClick={toggleSidebar} 
        className="lg:hidden p-4 fixed top-4 right-4 z-50 text-green-500 rounded-full"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Icône Burger ou Close */}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 lg:static lg:transform-none lg:translate-x-0 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-gray-200 dark:bg-gray-800 p-6 rounded-lg lg:w-full w-64 min-h-screen lg:min-h-auto z-40`}>
        {/* Profil utilisateur avec avatar à gauche et infos à droite */}
        <div className="flex items-center mb-8">
          {/* Image de profil */}
          <div className="w-16 h-16 mr-4 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          
          {/* Informations de l'utilisateur */}
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">{user.name || 'John Doe'}</h2>
              <FaCheckCircle className="text-green-500" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.profession || 'Web Developer'}</p>
          </div>
        </div>

        {/* Menu de navigation */}
        <nav className="flex flex-col space-y-4">
          <a 
            href="#"
            onClick={() => handleLinkClick('dashboard')} 
            className={`flex items-center space-x-3 ${activeLink === 'dashboard' ? 'bg-green-500 dark:bg-green-700 text-white p-2 rounded-md dark:text-white' : ''}`}
          >
            <FaHome />
            <span>Dashboard</span>
          </a>
          <a 
            href="#" 
            onClick={() => handleLinkClick('edit-profile')} 
            className={`flex items-center space-x-3 ${activeLink === 'edit-profile' ? 'bg-green-500 dark:bg-green-700 text-white p-2 rounded-md dark:text-white' : ''}`}
          >
            <FaUserEdit />
            <span>Edit Profile</span>
          </a>
          <a 
            href="#" 
            onClick={() => handleLinkClick('logout')} 
            className={`flex items-center space-x-3 ${activeLink === 'logout' ? 'bg-red-100 dark:bg-red-700 text-red-600 dark:text-white' : ''}`}
          >
            <FaPowerOff />
            <span>Logout</span>
          </a>
        </nav>
      </div>

      {/* Overlay pour fermer la sidebar lorsqu'elle est ouverte sur mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar} // Clique en dehors de la sidebar pour la fermer
        ></div>
      )}
    </div>
  );
};

export default ProfileSidebar;
