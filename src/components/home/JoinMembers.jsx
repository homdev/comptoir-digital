import Image from 'next/image';
import Avatar from '@/public/assets/img/user-sidebar-thumb.png'

const JoinMembers = () => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-white p-2 mb-4 rounded-full shadow-md w-max-container">
      {/* Avatars */}
      <div className="flex -space-x-2">
        <Image
          src={Avatar?.src} // chemin vers la première image de profil
          alt="Avatar 1"
          width={30}
          height={30}
          className="rounded-full border-2 border-white"
        />
        <Image
          src={Avatar?.src} // chemin vers la deuxième image de profil
          alt="Avatar 2"
          width={30}
          height={30}
          className="rounded-full border-2 border-white"
        />
        <Image
          src={Avatar?.src} // chemin vers la troisième image de profil
          alt="Avatar 3"
          width={30}
          height={30}
          className="rounded-full border-2 border-white"
        />
      </div>

      {/* Texte */}
      <div className="text-sm font-semibold text-gray-700 whitespace-nowrap md:text-xs">
        +3K Membres
      </div>

      {/* Bouton */}
      <button className="bg-green-500 text-white px-4 rounded-full hover:bg-green-600 whitespace-nowrap transition md:text-xs">
         →
      </button>
    </div>
  );
};

export default JoinMembers;
