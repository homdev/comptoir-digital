"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import de Link pour la redirection
import SectionHeading from '../shared/SectionHeading';

const Members = () => {
  const [membersData, setMembersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembersData = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Récupère le token d'authentification
        if (!token) {
          throw new Error('User is not authenticated');
        }

        const res = await fetch('http://127.0.0.1:3001/api/v1/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Utilise le token pour les requêtes authentifiées
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setMembersData(data); // Met à jour les données des membres
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembersData();
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-nightBlack rounded-2xl projects-section">
      <SectionHeading title="Members" />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : membersData.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {membersData.map((member) => (
            <a href={`/profile/${member.id}`}>
              <div className="cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-gray-700 hover:shadow-lg">
                <div className="flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={member.profile_image_url || '/default-profile.png'}
                    alt={member.name || 'User'}
                    width={96}
                    height={96}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {member.name || 'Anonymous'}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {member.profession || 'Unknown Profession'}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {member.country || 'Unknown Country'}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-theme rounded-lg hover:bg-themeHover"
                    >
                      Voir
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-themeHover hover:text-white dark:text-white dark:bg-nightBlack dark:border-gray-600 dark:hover:bg-gray-700"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Members;
