import Button from "../ui/Button";

import heroImg from '@/public/assets/img/cmda-monument.png'
import heroImgDark from "@/public/assets/img/hero-img.png";
import { introduce, partners } from "@/src/staticData/home/home";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IoMdPaperPlane } from "react-icons/io";
import IntroduceJob from "./IntroduceJob";
import TrustedCompany from "./TrustedCompany";

const Hero = () => {
  return (
    <div
      data-scroll-index="0"
      id="home"
      className="py-5 xl:py-3.5 xl:max-2xl:max-w-90rem max-xl:mx-auto xl:ml-auto bg-emerald-950 mt-10 rounded-2xl"
    >
      <div className="px-5 py-8 bg-emerald-950	 dark:bg-nightBlack rounded-2xl hero-section md:p-8 lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-white dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          {introduce?.iconBox?.Icon}
          {introduce?.iconBox?.title}
        </div>
        <div className="items-center gap-6 hero-content md:flex xl:gap-10">
          <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
            <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-white dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
              {introduce?.heading?.heading1} <br />
              <span className="text-green-500">{introduce?.heading?.heading2}</span>
            </h1>
            <p className="text-white">{introduce?.desc}</p>
            <ul className="flex items-center gap-3 sm:gap-6 mt-4 lg:mt-5">
              {introduce?.jobs?.map((item, i) => (
                <IntroduceJob key={i} {...item} />
              ))}
            </ul>
            <ul className="mt-7 buttons">
              <li data-scroll-nav="8">
                <Button text="S'inscrire" prefix={<IoMdPaperPlane size={18} />} />
              </li>
            </ul>
          </div>
          <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
            <Image
              src={heroImg?.src}
              width={350}
              height={200}
              alt="Hero Image - Light Mode"
              priority
              className="dark:hidden"
            />

            <Image
              src={heroImgDark?.src}
              width={350}
              height={200}
              alt="Hero Image - Dark Mode"
              // priority
              className="hidden dark:block"
            />
          </div>
        </div>
        <div className="mb-2 mt-14 xl:mb-0 xl:mt-20">
          <div className="items-center grid-cols-12 overflow-hidden md:grid">
            <div className="hidden col-span-2 md:inline-block">
              <h6 className="font-medium text-white dark:text-white/80 text-sm md:max-w-[8rem] border-l border-green-500 pl-4">
               Nos Partenaires
              </h6>
            </div>
            <div className="col-span-10 logo-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <Marquee>
                    {partners?.map((partner, i) => (
                      <TrustedCompany key={i} {...partner} />
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;