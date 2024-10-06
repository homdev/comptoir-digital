import Image from 'next/image'; 
import  Link from "next/link";
import { projects } from "@/src/staticData/home/home"; 
import SectionHeading from "../shared/SectionHeading";
import StarRating from '../rating/StarRating';
import ProjectHead from '../project/projectHead';

const Projects = () => {
  console.log(projects.projectsData)
  return (
    <div
      data-scroll-index="2"
      id="projects"
      className="py-5 xl:py-3.5 max-w-container xl:max-2xl:max-w-90rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl projects-section lg:p-10 2xl:p-13">
        <SectionHeading {...projects?.projectsHeading} />

        <div className="grid gap-5 md:gap-6 projects-card-wrapper sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:gap-8">
          {projects.projectsData?.map((project) => (
            <div key={project.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadowbg-flashWhite dark:bg-metalBlack dark:border-gray-700">
              {/*<a href={project.link}>
                <Image
                  width={500} 
                  height={300}
                  className="p-8 rounded-t-lg"
                  src={project.imgUrl}
                  alt={project.title}
                />
          </a>*/}
              <div className="px-3  pt-5">
              <ProjectHead title={project.title}  company={project.company}/>
              </div>
              <div className="px-5 pb-5">
                {/*<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>*/}
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
                {/*<StarRating note={project.note} />*/}
                
                <div className="flex items-center justify-start my-4 space-x-4">
                    <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                        MEDICAL
                    </span>
                    <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                        PRO
                    </span>
                </div>
                <div className="flex -space-x-2">
                    <a href="#" className="">
                        <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://as2.ftcdn.net/v2/jpg/02/76/42/25/1000_F_276422510_HA3ecJnu2WcwpR9KrWZV83nkdYLevEO2.jpg" alt="Guy"/>
                    </a>
                    <a href="#" className="">
                        <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://img.freepik.com/premium-photo/arab-man-businessman-sheikh-works-laptop-investments-business-work-via-internet-online-contracts_99433-5899.jpg" alt="Max"/>
                    </a>
                    <a href="#" className="">
                        <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://as2.ftcdn.net/v2/jpg/05/31/32/39/1000_F_531323901_3VpRUQwehG1bXQAFtns8zjjrYcOLrGMM.jpg" alt="Charles"/>
                    </a>
                    <a href="#" className="">
                        <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://as1.ftcdn.net/v2/jpg/04/81/59/18/1000_F_481591800_JQXxwgfE7oLTKwgyfmREMUIHMoorM0FN.jpg" alt="Jade"/>
                    </a>
                    <a href="#" className="">
                        <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://media.istockphoto.com/id/1337915661/photo/happy-arab-businessman-booking-hotel-online-while-using-digital-tablet-in-airport.jpg?s=612x612&w=0&k=20&c=M9rratlBxyVEek385RUgQV1HrF31Y-zzf9RvYz1d6vI=" alt="Jade"/>
                    </a>
                </div>
                <span className="flex mb-2 items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                    
                    Deadline: {project.endDate}
                </span>
                <span className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Financement</span>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-4">
                  <div className="bg-theme h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
                <Link legacyBehavior href={`/project/${project.slug}`}>
                  <a className="inline-block text-white bg-theme hover:bg-theme-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Consulter
                  </a>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
