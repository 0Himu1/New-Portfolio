/* eslint-disable react/no-unescaped-entities */

'use client';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import { useState } from 'react';
import deved from '../../public/dev-ed-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg-px-40">
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
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Himu Nazmul
            </h2>
            <h3 className="text-3xl py2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">
              Freelancher providing services for Front-end Development and
              Graphice Design.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="">
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've Served As A
              <span className="text-teal-500"> Graphic Designer </span>
              In Multiple Small Businesses & Volunteer Organizations. I Do
              <span className="text-teal-500"> Web Development </span>
              As A Freelancer. I'm Quietly Confident, Naturally Curious, And
              Perpetually Working For Improving My Chops One Design Problem At A
              Time.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Design And Code Beautifully Simple Things, And I Love What I Do.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs flowing core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tool I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs flowing core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tool I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifull Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs flowing core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tool I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've Served As A
              <span className="text-teal-500"> Graphic Designer </span>
              In Multiple Small Businesses & Volunteer Organizations. I Do
              <span className="text-teal-500"> Web Development </span>
              As A Freelancer. I'm Quietly Confident, Naturally Curious, And
              Perpetually Working For Improving My Chops One Design Problem At A
              Time.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
                layout="responsiv"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
                layout="responsiv"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
                layout="responsiv"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
                layout="responsiv"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
                layout="responsiv"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
                layout="responsiv"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}