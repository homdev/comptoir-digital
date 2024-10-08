import AboutMe from "@/src/components/home/AboutMe";
import Blog from "@/src/components/home/Blog";
import ContactMe from "@/src/components/home/ContactMe";
import Hero from "@/src/components/home/Hero";
import Portfolio from "@/src/components/home/Portfolio";
import Roadmap from "@/src/components/home/Roadmap";
import Projects from "@/src/components/home/Projects";
import Skills from "@/src/components/home/Skills";
import Testimonial from "@/src/components/home/Testimonial";
import Footer from "@/src/components/shared/Footer";
import Layout from "@/layout/Layout";
import Members from "../components/directory/Members";
import Projects2 from "../components/home/Projects2"
import Navbar from "../components/navbar/Navbar";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import ScrollingText from "../components/home/ScrollingText";


export default async function Home() {
  return (
    <Layout>
      
      {/*<AboutMe />*/}
      <HeroSection />
      <FeaturesSection />
      <ScrollingText />
      <Hero />
      <AboutMe />
      {/*<Members />*/}
      {/*<Projects />*/}
      {/*<Skills />*/}
      {/*<Roadmap />*/}
      {/*<Portfolio />*/}
      {/*<Blog />*/}
      {/*<Testimonial />*/}
      {/*<ContactMe />*/}
      <Footer />
    </Layout>
  );
}
