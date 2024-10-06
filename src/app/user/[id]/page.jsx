"use client"; // Marque ce composant comme un Client Component

import { useParams } from 'next/navigation'; // Utilisation de useParams pour récupérer l'ID de la route
import { useState, useEffect } from 'react';
import withAuth from "@/src/hoc/withAuth";
import ProfileHeader from '@/src/components/user/ProfileHeader';
import ProfileStats from '@/src/components/user/ProfileStats';
import ProfileActions from '@/src/components/user/ProfileActions';
import ProfileSocials from '@/src/components/user/ProfileSocials';
import ProfileBio from '@/src/components/user/ProfileBio'
import ProfileExperiences from '@/src/components/user/ProfileExperiences'

const ProfilePage = () => {
  const { id } = useParams(); // Utilise useParams pour récupérer l'ID à partir de l'URL
  const [member, setMember] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('You need to sign in');
        return;
      }

      fetch(`http://127.0.0.1:3001/api/v1/users/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          return response.json();
        })
        .then((data) => setMember(data))
        .catch((error) => setError(error.message));
    }
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!member) return <div className='text-center items-center'>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* ProfilHeader pour la bannière et l'avatar */}
      <ProfileHeader member={member} />

      {/* Conteneur pour les deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {/* Colonne principale (2/3 à gauche) */}
        <div className="col-span-2">
          <ProfileBio member={member} />
          <ProfileExperiences member={member} />
        </div>

        {/* Colonne secondaire (1/3 à droite) */}
        <div className="bg-gray-100 dark:bg-nightBlack p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
          <ul>
            <li className="mb-2">
              <strong>Téléphone:</strong> {member.phone_number || 'Non renseigné'}
            </li>
            <li className="mb-2">
              <strong>Email:</strong> {member.email}
            </li>
            <li className="mb-2">
              <strong>Localisation:</strong> {member.city}, {member.country}
            </li>
          </ul>

          {/* Ajouter des boutons d'action */}
          {/*<ProfileActions />*/}

          {/* Liens sociaux */}
          {/*<ProfileSocials socials={member.social_links} />*/}
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfilePage);
