"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Supprimer le token JWT
    router.push("/auth/login"); // Redirection vers la page de connexion
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
