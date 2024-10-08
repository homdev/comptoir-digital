import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 text-center lg:ml-auto footer-section max-w-container xl:max-2xl:max-w-90rem">
      <p className="">
        Copyright by
        <Link href="#" className="transition-colors">
          @cmda.world
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
