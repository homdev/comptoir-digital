"use client";

import { useState } from "react";
import withAuth from "@/src/hoc/withAuth";
import SidebarFilters from "@/src/components/directory/SidebarFilters";
import Members from "@/src/components/directory/Members";

const Directory = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-nightBlack flex flex-col lg:flex-row">
      
      {/* Bouton pour afficher/masquer la sidebar sur mobile */}
      <button
        className="lg:hidden bg-theme text-white py-2 px-4 m-4 rounded-full self-start"
        onClick={toggleSidebar}
      >
        {showSidebar ? "Cacher les filtres" : "Afficher les filtres"}
      </button>

      {/* Sidebar - Fixe à partir de 1280px et marge ajustée */}
      <aside
        className={`w-full lg:w-1/4 xl:w-1/5 p-4 transition-all duration-300 ease-in-out ${
          showSidebar ? "block" : "hidden lg:block"
        }`}
      >
        <div className="lg:sticky lg:top-0">
          <SidebarFilters />
        </div>
      </aside>

      {/* Liste des membres au centre */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Members />
      </main>
    </div>
  );
};

export default withAuth(Directory);
