"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCalendarClearOutline } from "react-icons/io5";

const SidebarFilters = () => {
  const [filters, setFilters] = useState({
    location: "",
    profession: "",
    name: "",
    country: "",
    phone_number: "",
    role: "",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full annuaire__sidebar__wrapper">
      <div className="p-3 bg-white dark:bg-nightBlack rounded-2xl">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
          Filtres
        </h3>

        {/* Nom */}
        <div className="filter-group mb-6">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">
            Nom
          </label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Nom complet"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white"
          />
        </div>

        {/* Lieu */}
        <div className="filter-group mb-6">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">
            Ville
          </label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Ville"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white"
          />
        </div>

        {/* Pays */}
        <div className="filter-group mb-6">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">
            Pays
          </label>
          <input
            type="text"
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            placeholder="Pays"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white"
          />
        </div>

        {/* Profession */}
        <div className="filter-group mb-6">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">
            Profession
          </label>
          <input
            type="text"
            name="profession"
            value={filters.profession}
            onChange={handleFilterChange}
            placeholder="Profession"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white"
          />
        </div>

        {/* Rôle */}
        <div className="filter-group mb-6">
          <label className="block text-sm font-medium mb-2 text-black dark:text-white">
            Rôle
          </label>
          <select
            name="role"
            value={filters.role}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 text-black dark:text-white"
          >
            <option value="">Tous</option>
            <option value="user">Utilisateur</option>
            <option value="user">Membre</option>
            <option value="admin">Moderateur</option>
            <option value="admin">Administrateur</option>
          </select>
        </div>

        <div className="mt-6">
          <Link
            href="#"
            className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover"
          >
            Appliquer les filtres
            <span className="animate-bounce">
              <IoCalendarClearOutline size={18} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
