import useMenuActive from "@/src/hooks/useMenuActive";
import { siteSettings } from "@/src/staticData/siteSettings";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoShareSocialOutline } from "react-icons/io5";

const TopNav = ({ midContainer }) => {
  const activeMenuItem = useMenuActive(midContainer, ".minfo__nav__items li a");
  const pathname = usePathname();

  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black hidden max-xl:flex fixed top-0 bottom-3 left-1/2 -translate-x-1/2 z-999 items-center flex-row gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-1.5">
      {/* Site Logo */}
      <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center">
        <Link href={siteSettings?.logo?.url} legacyBehavior>
          <a>
            <Image
              width={60}
              height={60}
              src={siteSettings?.logo?.image}
              alt={siteSettings?.logo?.alt}
            />
          </a>
        </Link>
      </div>

      {/* Main Menu/Navigation */}
      <div className="menu">
        <ul className="flex space-x-2 text-center minfo__nav__items">
          {siteSettings?.headersMenu?.map((menu) => (
            <li key={menu?.id} className="relative group">
              <Link href={pathname === "/" ? menu?.selector : `/${menu?.selector}`} legacyBehavior>
                <a className={`rounded-full px-4 py-2 ${activeMenuItem === menu?.selector && "bg-white dark:bg-metalBlack"} group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300`} data-title={menu?.title}>
                  {menu?.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Share Button Wrapper */}
      <div className="share group">
        <button className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack" aria-label="Share">
          <IoShareSocialOutline size={18} />
        </button>

        {/* Social Share Icons */}
        <div className="absolute flex items-center invisible px-5 py-2 space-x-3 transition-all duration-300 opacity-0 social-icons bg-white dark:bg-nightBlack rounded-4xl group-hover:opacity-100 group-hover:visible -z-1">
          {siteSettings?.socialMedias?.map((item) => (
            <Link key={item?.id} href={item?.url} legacyBehavior>
              <a className="transition duration-200 hover:text-theme" title={item?.tooltip}>
                {item?.Icon}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
