// src/components/navbar/NavBar.jsx
const NavBar = ({ isAuthenticated }) => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  if (isAuthenticated) {
    navItems.push({ name: 'Annuaire', href: '/directory' }); // Ajoute Annuaire si connecté
  }

  return (
    <nav className="rounded-full border-solid border-2 p-5 shadow-sm bg-white/10 dark:bg-nightBlack/10 backdrop-blur-sm">
      <ul className="flex space-x-6 text-black dark:text-white">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-green-500 dark:hover:text-green-400 cursor-pointer">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
