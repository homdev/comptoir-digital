import React from 'react';
import Image from 'next/image';
import { FaBriefcase } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import { membersData, projects } from '@/src/staticData/home/home';


const Members = () => {
  return (
    <div
    data-scroll-index="2"
    id="members"
    className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">

    <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl projects-section lg:p-10 2xl:p-13">
      <SectionHeading {...projects?.projectsHeading} />

      <div className="grid gap-5 md:gap-6 projects-card-wrapper sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:gap-8">
      {membersData.map((member) => (
        <div key={member.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-nightBlack dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>
            <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
                </ul>
            </div>
        </div>
          <div className="flex flex-col items-center pb-10">
            <Image
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={member.imageUrl}
              alt={member.name}
              width={96}
              height={96}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{member.role}</span>
            <div class="flex mt-4 md:mt-6">
                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-theme rounded-lg hover:themeHover focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-theme dark:hover:bg-themeHover dark:focus:ring-blue-800">Ajouter</a>
                <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-themeHover hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-nightBlack dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Members;
