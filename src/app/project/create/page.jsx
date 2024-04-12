"use client";

import React, { useState } from 'react';
import ProjectDescription from "@/src/components/project/ProjectDescription";
import ProjectHero from "@/src/components/project/ProjectHero";
import Layout from "@/layout/Layout";
import { portfolio, projects } from "@/src/staticData/home/home";
import Footer from "@/src/components/shared/Footer";

const CreateProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    progress: 0,
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', projectData);
    // Api Logic
  };

  return (
    <Layout>
      <div
        className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto" id="projects">
            <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Titre du projet</label>
                <input
                type="text"
                id="title"
                name="title"
                value={projectData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                />
            </div>
            
            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquez pour Importer</span> or glisser and déposé</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 

            

            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea
                id="description"
                name="description"
                value={projectData.description}
                onChange={handleChange}
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                ></textarea>
            </div>
            <div class="relative mb-6">
                <label for="labels-range-input" className="block mb-2 mt-6 text-sm font-medium text-gray-900">Budget</label>
                <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (100€)</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">500€</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">1000€</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (1500€)</span>
            </div>
            <div>
                <label htmlFor="progress" className="block mb-2 mt-12 text-sm font-medium text-gray-900">Progression (%)</label>
                <input
                type="number"
                id="progress"
                name="progress"
                value={projectData.progress}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                />
            </div>

            <button
                type="submit"
                className="text-white bg-theme 0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Créer le projet
            </button>
            </form>
            
        

            </div>
        </div>
      <Footer />
    </Layout>
  );
};

export default CreateProjectForm;

