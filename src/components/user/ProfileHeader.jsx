import Image from 'next/image';
import Profile from '@/public/assets/img/default-profil.webp';

const ProfileHeader = ({ member }) => {
  return (
    <div className="relative bg-white dark:bg-nightBlack shadow rounded-xl overflow-hidden">
      {/* Bannière */}
      <div className="relative h-72 w-full">
        {member.banner_image_metadata ? (
          <Image
            src={member.banner_image_metadata.url}
            alt={`${member.name} banner`}
            layout="fill"
            objectFit="cover"
            className="w-full h-72 object-cover"
          />
        ) : (
          <div className="h-72 w-full bg-gray-200 dark:bg-gray-700 flex justify-center items-center">
            <span className="text-gray-500 dark:text-gray-400">No Banner</span>
          </div>
        )}
      </div>

      {/* Image de profil */}
      <div className="absolute -bottom-16 left-8 w-32 h-32 rounded-full bg-white p-1 shadow-lg">
        <Image
          src={member.profile_image_url || Profile}
          alt={`${member.name} profile`}
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
