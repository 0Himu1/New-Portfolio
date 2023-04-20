import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <section className="min-h-screen">
      <nav className="py-10 flex justify-between dark:text-white">
        <h1 className="text-xl font-burtons">Himu</h1>
        <ul className="flex items-center">
          <li className=" cursor-pointer text-2xl">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="my-auto">
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 mt-10 2xl:mb-5 text-teal-600 font-medium dark:text-teal-400 md:text-6xl xl:mt-20  2xl:text-8xl">
            Himu Nazmul
          </h2>
          <h3 className="text-3xl py2 md:text-3xl dark:text-white 2xl:text-5xl">
            Developer and Designer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto 2xl:text-2xl">
            Freelancher providing services for Front-end Development and
            Graphice Design.
          </p>
        </div>
        <div className="text-5xl lg:text-7xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
      </div>
    </section>
  );
}
