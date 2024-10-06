import Image from 'next/image';

const Avatar = ({ url }) => {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden">
      <Image src={url || '/assets/img/default-avatar.webp'} alt="Profile Picture" layout="fill" />
    </div>
  );
};

export default Avatar;
