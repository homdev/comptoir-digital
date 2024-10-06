import Image from 'next/image';
import SignupForm from '@/src/components/auth/SignupForm';
import algerBg from '@/public/assets/img/alger-bg.jpg'; 
import logo from '@/public/assets/img/logo.png'; 

const SignupPage = () => {
  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-2/3 xl:w-7/12 p-6 sm:p-12 flex flex-col justify-center items-center"> 
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
            <h1 className="text-2xl xl:text-2xl font-extrabold">Sign up</h1>
            {/* Insertion du formulaire d'inscription */}
            <SignupForm />
          </div>
        </div>

        {/* Illustration à droite */}
        <div className="lg:w-1/3 xl:w-5/12 flex-1 bg-green-100 text-center hidden lg:flex bg-center bg-cover"
        style={{
              backgroundImage: `url(${algerBg.src})`,
            }}>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
