import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {
  FaBlog,
  FaBriefcase,
  FaFolderOpen,
  FaGraduationCap,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { BiCheckDouble, BiCommentCheck } from "react-icons/bi";

import figmaImage from "@/public/assets/img/skill/figma.svg";
import webflowImage from "@/public/assets/img/skill/webflow.svg";
import tailwindImage from "@/public/assets/img/skill/tailwind.svg";
import htmlImage from "@/public/assets/img/skill/html.svg";
import cssImage from "@/public/assets/img/skill/css.svg";
import jsImage from "@/public/assets/img/skill/js.svg";
import jqueryImage from "@/public/assets/img/skill/jquery.svg";

import partner1Image from "@/public/assets/img/partners/1.png";
import partner2Image from "@/public/assets/img/partners/2.png";
import partner3Image from "@/public/assets/img/partners/3.png";
import partner4Image from "@/public/assets/img/partners/5.png";

import userImage from "@/public/assets/img/logo.png";
import userImageLight from "@/public/assets/img/logo.png";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img1.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "@/public/assets/img/blog/article1.png";
import blog1Image from "@/public/assets/img/blog/article1.png";
import blog2Thumbnail from "@/public/assets/img/blog/article2.png";
import blog2Image from "@/public/assets/img/blog/article2.png";
import blog3Thumbnail from "@/public/assets/img/blog/article3.png";
import blog3Image from "@/public/assets/img/blog/article3.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import { IoHomeOutline } from "react-icons/io5";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "INTRODUCTION",
  },
  heading: {
    heading1: "Conseil Mondial",
    heading2: "De la Diasporas Algérienne",
  },
  desc: (
    <p className="text-white">
      Bienvenue sur Le Conseil Mondial de la Diaspora Algérienne   {" "}
      <span className="font-medium text-green-500 dark:text-white/90">
      (CMDA)
      </span>{" "}
      vise à fédérer la diaspora algérienne mondiale. Par notre plateforme unique, nous encourageons la participation, la proposition et la promotion de projets qui enrichissent l’Algérie.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Investisseur",
      icon: <BiCheckDouble size={25} className="text-green-500 mr-1" />,
    },
    {
      id: 2,
      title: "Contributeur",
      icon: <BiCheckDouble size={25} className="text-green-500 mr-1" />,
    },
    {
      id: 2,
      title: "Porteur de Projet",
      icon: <BiCheckDouble size={25} className="text-green-500 mr-1" />,
    },
  ],
};

export const partners = [
  {
    imgUrl: partner1Image,
    altText: "Partner Name 1",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 2",
    link: "#",
  },
  {
    imgUrl: partner3Image,
    altText: "Partner Name 3",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 4",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 5",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 6",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 7",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 8",
    link: "#",
  },
  {
    imgUrl: partner2Image?.src,
    altText: "Partner Name 9",
    link: "#",
  },
];

export const technologies = [
  {
    id: 1,
    title: "Porteur de projet",
    skill: "94",
    url: "#",
  },
  {
    id: 2,
    title: "Contributeurs",
    skill: "98",
    url: "#",
  },
  {
    id: 3,
    title: "Investisseurs",
    skill: "90",
    url: "#",
  },
];

export const userDetails = [
  {
    field: "Phone",
    value: "+(33) 0767036848",
  },
  {
    field: "Skype",
    value: "Mohamed",
  },
  {
    field: "Language",
    value: "Français, English, Dutch, Spanish",
  },
  {
    field: "Email",
    value: "info@mohamed.com",
  },
  {
    field: "GitHub",
    value: "github.com/user",
  },
];

export const userDetailsSidebar = {
  userImage: userImage,
  userImageLight: userImageLight,
  userName: "Conseil Mondial CMDA",
  designations: ["Porteur de Projet", "Investisseurs", "Contributeurs"],
  basicInfo: [
    {
      id: 1,
      field: "Congrès",
      value: "Algérie",
    },
    {
      id: 2,
      field: "Ville",
      value: "Alger",
    },
    {
      id: 3,
      field: "Date",
      value: "27/04 au 28/04",
    },
  ],
  skillsInfo: [
    {
      id: 1,
      name: "Place",
      value: 800,
    },
    {
      id: 2,
      name: "Pris",
      value: 600,
    },
    {
      id: 3,
      name: "Libre",
      value: 200,
    },
    {
      id: 4,
      name: "Projets",
      value: 90,
    },
  ],
};

export const projectExperiences = [
  {
    title: "Membres",
    count: 1200,
    postFix: true,
  },
  {
    title: "Projects",
    count: 300,
    postFix: true,
  },
  {
    title: "Investisseurs",
    count: 84,
    postFix: true,
  },
  {
    title: "Contributeurs",
    count: 430,
    postFix: false,
  },
];

export const membersData = [
  {
    id: 1,
    name: 'Karim Zéribi',
    role: 'Ingénieur Logiciel',
    imageUrl: '/assets/img/logo.png', 
  },  
  {
    id: 2,
    name: 'Karim Zéribi',
    role: 'Ingénieur Logiciel',
    imageUrl: '/assets/img/logo.png', 
  },  
  {
    id: 3,
    name: 'Karim Zéribi',
    role: 'Ingénieur Logiciel',
    imageUrl: '/assets/img/logo.png', 
  },
  {
    id: 4,
    name: 'Karim Zéribi',
    role: 'Ingénieur Logiciel',
    imageUrl: '/assets/img/logo.png', 
  },  
  {
    id: 5,
    name: 'Karim Zéribi',
    role: 'Ingénieur Logiciel',
    imageUrl: '/assets/img/logo.png', 
  },  
  {
    id: 6,
    name: 'Karim Zéribi',
    role: 'Ingénieur Logiciel',
    imageUrl: '/assets/img/logo.png', 
  },    
];


export const projects = {
  projectsHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "MEMBRES",
    heading: "Découvrez",
    coloredHeading: "Les Membres",
    description: "Explorez les projets et découvrez comment nous contribuons au développement de la diaspora algérienne à travers nos initiatives.",
  },
  projectsData: [
    {
      id: 1,
      title: "Développement Technologique",
      desc: "Promotion de l'innovation technologique parmi la diaspora algérienne à travers le soutien de startups et projets technologiques.",
      icon: <SeoIcon />,
      progress: 65,
      link: "#",
      slug: "developpement-technologique",
      imgUrl: portfolioImage1,
      note: 3.9,
      endDate: "12 Juin",

      image: {
        thumbnail:projectInner1Image?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },

      type: "Congrès",
      title: "Projet 1",
      company: "Société ABC",
      description:
      "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi...",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
      
    },
    {
      id: 2,
      title: "Développement Technologique",
      desc: "Promotion de l'innovation technologique parmi la diaspora algérienne à travers le soutien de startups et projets technologiques.",
      icon: <SeoIcon />,
      progress: 15,
      link: "#",
      slug: "developpement-technologique",
      imgUrl: portfolioImage1,
      note: 3.9,
      endDate: "20 Juin",

      image: {
        thumbnail:projectInner1Image?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },

      type: "Congrès",
      title: "Projet 1",
      company: "Société ABC",
      description:
      "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi...",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
      
    },
    {
      id: 3,
      title: "Développement Technologique",
      desc: "Promotion de l'innovation technologique parmi la diaspora algérienne à travers le soutien de startups et projets technologiques.",
      icon: <SeoIcon />,
      progress: 55,
      link: "#",
      slug: "developpement-technologique",
      imgUrl: portfolioImage1,
      note: 3.9,
      endDate: "25 Juillet",

      image: {
        thumbnail:projectInner1Image?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },

      type: "Congrès",
      title: "Projet 1",
      company: "Société ABC",
      description:
      "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi...",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
      
    },
    {
      id: 4,
      title: "Développement Technologique",
      desc: "Promotion de l'innovation technologique parmi la diaspora algérienne à travers le soutien de startups et projets technologiques.",
      icon: <SeoIcon />,
      progress: 75,
      link: "#",
      slug: "developpement-technologique",
      imgUrl: portfolioImage1,
      note: 3.9,
      endDate: "17 Aout",

      image: {
        thumbnail:projectInner1Image?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },

      type: "Congrès",
      title: "Projet 1",
      company: "Société ABC",
      description:
      "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi...",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
      
    },
    {
      id: 5,
      title: "Développement Technologique",
      desc: "Promotion de l'innovation technologique parmi la diaspora algérienne à travers le soutien de startups et projets technologiques.",
      icon: <SeoIcon />,
      progress: 25,
      link: "#",
      slug: "developpement-technologique",
      imgUrl: portfolioImage1,
      note: 3.9,
      endDate: "14 Aout",

      image: {
        thumbnail:projectInner1Image?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },

      type: "Congrès",
      title: "Projet 1",
      company: "Société ABC",
      description:
      "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi...",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
      
    },
    {
      id: 6,
      title: "Développement Technologique",
      desc: "Promotion de l'innovation technologique parmi la diaspora algérienne à travers le soutien de startups et projets technologiques.",
      icon: <SeoIcon />,
      progress: 95,
      link: "#",
      slug: "developpement-technologique",
      imgUrl: portfolioImage1,
      note: 3.9,
      endDate: "09 Février",

      image: {
        thumbnail:projectInner1Image?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },

      type: "Congrès",
      title: "Projet 1",
      company: "Société ABC",
      description:
      "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi...",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
      
    },
    
    
  ],
};

export const services = {
  servicesHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "OBJECTIFS",
    heading: "les objectifs",
    coloredHeading: "CMDA",
    description:
      "En encourageant l'établissement de relations significatives entre les membres de la diaspora algérienne à travers le monde, notre objectif est de favoriser une collaboration fructueuse, le partage de connaissances et d'expériences, renforçant ainsi les liens qui unissent notre communauté",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "Créer un réseau mondial",
      desc: "En encourageant l'établissement de relations significatives entre les membres de la diaspora algérienne à travers le monde, notre objectif est de favoriser une collaboration fructueuse, le partage de connaissances et d'expériences, renforçant ainsi les liens qui unissent notre communauté",
      icon: <UiUxIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "Favoriser les synergies business",
      desc: "Faciliter les opportunités d'affaires, les partenariats stratégiques et les collaborations fructueuses. En favorisant un environnement propice aux échanges commerciaux, nous aspirons à renforcer l'économie de la diaspora algérienne et à contribuer positivement au développement économique global.",
      icon: <WebDevIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "Encourager l'innovation technologique",
      desc: "Promouvoir l'innovation technologique au sein de la diaspora algérienne en soutenant les initiatives entrepreneuriales, les startups et les projets axés sur la technologie. En investissant dans la recherche et le développement, nous visons à positionner l'Algérie comme un acteur majeur dans le domaine de la technologie et de l'innovation.",
      icon: <SeoIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "Renforcer l'éducation et la formation",
      desc: "Investir dans l'éducation et la formation des membres de la diaspora algérienne pour développer les compétences nécessaires à la prospérité économique et sociale du pays. En soutenant les programmes éducatifs et de formation, nous contribuons à l'autonomisation des individus et au renforcement des capacités nationales.",
      icon: <BrandingIcon />,
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "My",
    coloredHeading: "Advantages",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  skillsData: [
    {
      image: figmaImage?.src,
      percent: 90,
      name: "Figma",
    },
    {
      image: webflowImage?.src,
      percent: 85,
      name: "Webflow",
    },
    {
      image: tailwindImage?.src,
      percent: 90,
      name: "Tailwind",
    },
    {
      image: htmlImage?.src,
      percent: 95,
      name: "HTML5",
    },
    {
      image: cssImage?.src,
      percent: 95,
      name: "CSS3",
    },
    {
      image: jsImage?.src,
      percent: 75,
      name: "JavaScript",
    },
    {
      image: jqueryImage?.src,
      percent: 70,
      name: "jQuery",
    },
  ],
};

export const resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "ROADMAP",
    heading: "Feuille de",
    coloredHeading: "Route",
    description:
      "Bienvenue sur la page Feuille de Route (Roadmap) du CMDA, où vous pouvez suivre notre itinéraire d'événements et de congrès à travers le monde. Cette page est votre guide pour rester connecté et participer à nos initiatives de développement de la diaspora algérienne.",
  },
  resumeData: [
    {
      platform: "Paris, France",
      duration: "8 Mars, 2024",
      position: "Hotel Concorde, Paris",
      description:
        "Le Conseil mondial de la diaspora algérienne est né. L’instance a été lancée avec succès par le Franco-Algérien Karim Zéribi dans un grand hôtel parisien. ",
    },
    {
      platform: "Alger, Algérie",
      duration: "27, 28 Avr, 2024",
      position: "Hotel El Aurassi, Alger",
      description:
        "Nous tenons à informer tous les participants et intéressés que, suite à des circonstances imprévues, le congrès prévu à Alger sera reporté.",
    },
    {
      platform: "Paris, France",
      duration: "2024",
      position: "Hôtel concorde, Paris",
      description:
        "Veuillez noter que les nouvelles dates du congrès, initialement prévu à Alger et reporté, seront communiquées prochainement.",
    },
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "My",
    coloredHeading: "Education",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  educationsData: [
    {
      institution: "Oxford University",
      duration: "2016-2018",
      degree: "Diploma in Computer",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },
    {
      institution: "Google",
      duration: "2018 - 2022",
      degree: "BSc in Engineering",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },
    {
      institution: "Oxford University",
      duration: "2014-2018",
      degree: "Php Development",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },
  ],
};

export const portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "APERÇU",
    heading: "Aperçu ",
    coloredHeading: "Media",
    description:
      "Plongez dans l'univers du CMDA à travers notre galerie photo qui immortalise la richesse et la diversité de nos événements. Cliquez sur l'une des images pour explorer le récit de chaque événement, connaître les intervenants et découvrir les moments forts et les perspectives qu'ils ouvrent pour la diaspora algérienne. Chaque image est une porte d'entrée vers une histoire unique, témoignant de l'engagement et de la dynamique de notre communauté à travers le monde. ",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1Thumb?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Hôtel Concorde",
        thumbnailText2: "Paris",
      },
      type: "Congrès",
      title: "Le Conseil mondial de la diaspora algérienne est né",
      slug: "cmda",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Congrès Paris",
      },
      projectInfo: [
        {
          field: "Places",
          value: "+400 Prs",
        },
        {
          field: "Lieu:",
          value: "Hôtel Concorde Paris",
        },
        {
          field: "Date",
          value: "08 Mars 2024",
        },
      ],
      projectDescription: {
        descriptionTitle: "Le Conseil mondial de la diaspora algérienne est né",
        description:
          "Le 8 mars 2024 a marqué la fondation du Conseil Mondial de la Diaspora Algérienne (CMDA) à Paris. Initié par Karim Zeribi, le CMDA vise à fédérer les compétences algériennes éparpillées à travers le monde pour soutenir le développement de l'Algérie. Le lancement a été célébré par plus de 400 participants et s'est articulé autour de la valorisation des potentiels de l'Algérie et de l'importance de l'unité et de l'action collective .",
        descriptionLists: [
          "L'appel à l'unité : Soulignant l'importance de réunir les compétences algériennes disséminées pour un objectif commun.",
          "La promotion du potentiel algérien : Présentation de projets et débat sur l'apport de la diaspora au développement national.",
          "Le soutien aux initiatives économiques : Encouragement à l'investissement dans des projets en Algérie, tels que la clinique cardiologique de Tipaza et l'éco-complexe touristique de Djanet.",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2Thumb?.src,
        image: portfolioImage2?.src,
        thumbnailText1: "Congrès",
        thumbnailText2: "Paris",
      },
      type: "Congrès",
      title: "Ouverture du premier Conseil mondial de la diaspora algérienne",
      slug: "ouverture",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Diaspora",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3Thumb?.src,
        image: portfolioImage3?.src,
        thumbnailText1: "Congrès ",
        thumbnailText2: "Paris",
      },
      type: "Congrès",
      title: "Ouverture du premier Conseil mondial de la diaspora algérienne",
      slug: "congres",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Diaspora",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4Thumb?.src,
        image: portfolioImage4?.src,
        thumbnailText1: "Congrès",
        thumbnailText2: "Paris",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Diaspora",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
  ],
};

export const blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "NEWS",
    heading: "Actualités",
    coloredHeading: "CMDA",
    description:
      "Actualités du CMDA pour des insights captivants et des mises à jour sur la diaspora algérienne mondiale. ",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog3Thumbnail?.src,
        image: blog3Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
  ],
};

export const testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "What",
    coloredHeading: "People Say",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
    {
      id: 2,
      image: author2?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Reddick</span> exceeds
          expectations with top-tier coding skills. Reliable, collaborative, and
          a true asset to any project. Highly recommended
        </div>
      ),
      name: "Mily Martin",
      position: "CEO @IT Theme",
    },
    {
      id: 3,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
  ],
};

export const contactInfo = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTACT",
    heading: "Contactez",
    coloredHeading: "Nous.",
    description:
      "Que vous ayez des questions, des suggestions, ou besoin d'assistance, nous sommes ici pour vous écouter et vous répondre. Utilisez le formulaire ci-dessous pour nous envoyer un message 👇",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Adresse",
      data: "Paris, France",
      Icon: <LocationIcon />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "support@cmda.world",
      Icon: <EmailIcon />,
    },
    {
      id: 3,
      field: "TéléPhone",
      data: "+33 767036848",
      Icon: <PhoneIcon />,
    },
  ],
};
