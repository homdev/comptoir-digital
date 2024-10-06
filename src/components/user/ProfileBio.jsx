
"use client";
import { FaUserPlus, FaEnvelope } from "react-icons/fa"; // Import des icônes

const ProfileBio = ({ member }) => {
    return (
        <div className="bg-white dark:bg-nightBlack p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-2xl font-semibold mb-4">À propos de {member.name}</h2>
            <p className="text-gray-700 dark:text-gray-400">
                {/* Informations supplémentaires à propos du membre */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                {member.bio}
            </p>
        </div>
    );
};

export default ProfileBio;
