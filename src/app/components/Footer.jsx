import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Logo from './Logo';

export default function Footer({ darkMode }) {
  return (
    <div className="p-10 md:px-20 lg-px-40 text-center md:text-left dark:text-white bg-teal-600 dark:bg-gray-800">
      <Logo color={darkMode ? '#e5e7eb' : '#dcfce7'} className="mb-3" />
      <p className="text-md text-xl py-2 leading-8 text-green-100 dark:text-gray-200">
        Living, Learning, & Leveling Up One Day At A Time.
      </p>
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="text-3xl flex justify-center gap-5 py-3 text-green-100 dark:text-gray-400">
          <a
            href="https://github.com/0Himu1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kamruzzaman-khondokar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/himu_nazmul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
        <p className=" text-md py-2 leading-8 text-green-50 dark:text-gray-200">
          Designed by ME
        </p>
      </div>
    </div>
  );
}
