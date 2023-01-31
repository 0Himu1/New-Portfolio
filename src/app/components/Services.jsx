import React from 'react';
import Image from 'next/image';

import design from '../../../public/design.png';
import code from '../../../public/code.png';
import consulting from '../../../public/consulting.png';

export default function Services() {
  return (
    <section>
      <div className="">
        <h3 className="text-3xl py-1 dark:text-white font-bold">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I have Served As A
          <span className="text-teal-500"> Graphic Designer </span>
          In Multiple Small Businesses & Volunteer Organizations. I Do
          <span className="text-teal-500"> Web Development </span>
          As A Freelancer. I am Quietly Confident, Naturally Curious, And
          Perpetually Working For Improving My Chops One Design Problem At A
          Time.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Design And Code Beautifully Simple Things, And I Love What I Do.
        </p>
      </div>
      <div className="lg:flex gap-10 ">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={design} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautifull Design</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs flowing core design
            theory
          </p>
          <h4 className="py-4 text-teal-600">Design tool I use</h4>
          <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
          <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
          <p className="text-gray-800 py-1 dark:text-white">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image src={code} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">Code your Project</h3>
          <p className="py-2">Languages for creating the best Website today.</p>
          <h4 className="py-4 text-teal-600">Languages</h4>
          <p className="text-gray-800 py-1 dark:text-white">HTML</p>
          <p className="text-gray-800 py-1 dark:text-white">CSS</p>
          <p className="text-gray-800 py-1 dark:text-white">JavaScript</p>
          <p className="text-gray-800 py-1 dark:text-white">Python</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:text-white flex-1">
          <Image
            src={consulting}
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Beautifull Design</h3>
          <p className="py-2">
            Poppuler Freamwork and libraries for creating the best web
            application today.
          </p>
          <h4 className="py-4 text-teal-600">Freamwork & Libraries</h4>
          <p className="text-gray-800 py-1 dark:text-white">React</p>
          <p className="text-gray-800 py-1 dark:text-white">Tailwind</p>
          <p className="text-gray-800 py-1 dark:text-white">Styled Component</p>
          <p className="text-gray-800 py-1 dark:text-white">React Hook</p>
          <p className="text-gray-800 py-1 dark:text-white">Bootstrap</p>
        </div>
      </div>
    </section>
  );
}
