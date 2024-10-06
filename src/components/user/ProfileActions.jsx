"use client";
import { FaUserPlus, FaEnvelope } from "react-icons/fa"; // Import des icônes

const ProfileActions = () => {
  return (
    <div className="flex justify-around mt-6">
      {/* Bouton Ajouter un ami avec icône */}
      <button className="bg-blue-600 text-white p-4 rounded-full flex items-center justify-center w-12 h-12">
        <FaUserPlus className="text-lg" />
      </button>

      {/* Bouton Envoyer un message avec icône */}
      <button className="bg-teal-500 text-white p-4 rounded-full flex items-center justify-center w-12 h-12">
        <FaEnvelope className="text-lg" />
      </button>
    </div>
  );
};

export default ProfileActions;
