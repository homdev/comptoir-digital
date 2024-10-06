"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.push("/auth/login"); // Redirection vers la page de connexion si non authentifié
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
