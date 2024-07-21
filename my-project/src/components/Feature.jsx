// eslint-disable-next-line no-unused-vars
import React from 'react';

const IconBlock = ({ icon, title, description }) => (
  <div className="text-center">
    <div data-aos="zoom-in" className="flex justify-center items-center size-12 rounded-full mx-auto dark:bg-limegreen dark:border-limegreen">
      {icon}
    </div>
    <div className="mt-7">
      <h3 data-aos="zoom-in" className="text-4xl font-bold text-gray-800 dark:text-white font-ubuntu">
        {title}
      </h3>
      <p data-aos="zoom-in" className="mt-1 text-gray-600 dark:text-neutral-400 font-ubuntu">{description}</p>
    </div>
  </div>
);

const Feature = () => (
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
      <IconBlock
        icon={<svg
            className="flex-shrink-0 mt-2 size-14 text-limegreen dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>}
        title="Make A Resume That Wins Interviews"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet justo libero. Duis vestibulum sagittis metus eget semper. Integer congue pretium dui, at tempus magna imperdiet nec."
      />
      <IconBlock
        icon={<svg
            className="flex-shrink-0 size-14 text-limegreen dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          }
        title="Resume Writing Made Easy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet justo libero. Duis vestibulum sagittis metus eget semper. Integer congue pretium dui, at tempus magna imperdiet nec."
      />
      <IconBlock
        icon={<svg
        className="flex-shrink-0 mt-2 size-14 text-limegreen dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
      </svg>}
        title="A Recruiter-Tested CV Maker Tool"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet justo libero. Duis vestibulum sagittis metus eget semper. Integer congue pretium dui, at tempus magna imperdiet nec."
      />
    </div>
  </div>
);

export default Feature
