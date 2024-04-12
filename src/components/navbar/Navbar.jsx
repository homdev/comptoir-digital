import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">Logo</Link>
        </div>
        <div className="links">
          <Link href="/about" className="mr-4">About</Link>
          <Link href="/services" className="mr-4">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
