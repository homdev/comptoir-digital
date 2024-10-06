// pages/auth/LoginPage.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import LoginForm from '@/src/components/auth/LoginForm';
import algerBg from '@/public/assets/img/alger-bg.jpg'; 
import logo from '@/public/assets/img/logo.png'; 

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/annuaire"); // Redirection vers l'annuaire si l'utilisateur est déjà connecté
    }
  }, []);

  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col justify-center items-center">
          <div>
            <Image
              src={logo}
              width={128}
              height={128}
              alt="Logo"
              className="w-32 mx-auto"
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-extrabold">Sign in</h1>
            {/* Insertion du formulaire */}
            <LoginForm />
          </div>
        </div>

        {/* Illustration à droite */}
        <div className="flex-1 bg-green-100 text-center hidden lg:flex bg-center bg-cover"
        style={{
              backgroundImage:
                `url(${algerBg.src})`,
            }}>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
