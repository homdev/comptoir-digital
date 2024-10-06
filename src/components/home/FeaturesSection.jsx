// src/components/home/FeaturesSection.jsx

import Image from 'next/image';
import FeatureCard from './FeatureCard'; // Import du composant FeatureCard
import monument from '@/public/assets/img/cmda-monument.png'; // Assure-toi que cette image est bien dans le dossier public
import { introduce } from "@/src/staticData/home/home";



const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-nightBlack rounded-2xl">
      {/* Titre, badge et description */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl mb-4">
          {introduce?.iconBox?.Icon}
          {introduce?.iconBox?.title}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Unlock the Advantages of SAP</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover the myriad benefits of SAP, designed to streamline your workflows and propel your projects towards success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Colonne des fonctionnalités à gauche */}
        <div className="space-y-6">
          <FeatureCard
            icon="/path/to/icon1.svg"
            title="Enhanced Efficiency"
            description="Streamline workflows for increased productivity and project success."
          />
          <FeatureCard
            icon="/path/to/icon2.svg"
            title="Improved Collaboration"
            description="Facilitate team communication, fostering synergy among project stakeholders."
          />
          <FeatureCard
            icon="/path/to/icon3.svg"
            title="Real-time Insights"
            description="Gain actionable data and insights instantly for informed decision-making."
          />
        </div>

        {/* Image centrale */}
        <div className="hidden lg:block">
          <Image src={monument} alt="Central Feature" className="w-full" />
        </div>

        {/* Colonne des fonctionnalités à droite */}
        <div className="space-y-6">
          <FeatureCard
            icon="/path/to/icon4.svg"
            title="Faster Time-to-Market"
            description="Accelerate project timelines and deliver products or services."
          />
          <FeatureCard
            icon="/path/to/icon5.svg"
            title="Increased Accountability"
            description="Promote accountability among the team with clear roles and responsibilities."
          />
          <FeatureCard
            icon="/path/to/icon6.svg"
            title="Scalability"
            description="Easily scale to meet evolving business needs and project requirements."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
