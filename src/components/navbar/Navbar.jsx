import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white shadow-md bg-white/10 backdrop-blur-md rounded-2xl	rounded-t-none mx-auto max-w-container xl:max-2xl:max-w-90rem">
      <div className="container mx-auto flex justify-between items-center p-4 mx-auto">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">Logo</Link>
        </div>
        <div className="links">
          <Link href="/about" className="mr-4">Se connecter</Link>
          <Link href="/services" className="mr-4">S'inscrire</Link>
          <Link href="/contact">Annuaire</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
