"use client"; // Assure-toi que c'est un Client Component

const ProfileSocials = ({ socials = [] }) => {
  if (!socials || socials.length === 0) {
    return <p>Aucun lien social disponible</p>; // Gestion des cas où il n'y a pas de liens sociaux
  }

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {socials.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-xl text-gray-700 hover:text-gray-900">
          <i className={`fab fa-${social.name}`}></i>
        </a>
      ))}
    </div>
  );
};

export default ProfileSocials;
