/* eslint-disable no-return-assign */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col justify-between items-center gap-10 w-full md:flex-row md:items-start py-7">
      <div className="text-center flex-1 md:text-left p-10">
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am interested in working with any company that thinks my skill will
          be helpful for them. If you are looking for someone like me, please
          let me know. Or you can just 'say hi' to me.
        </p>
        <button
          className="py-2 px-5 bg-teal-400 rounded dark:text-white mt-3"
          onClick={() => (window.location.href = 'mailto:contact.kknazmul@gmail.com')}
        >
          Contact Me
        </button>
      </div>
      <div className="text-center md:text-right mt-5 md:mt-0 dark:text-white flex-1 w-full p-10">
        <div className="flex justify-between items-center md:flex-col md:items-start">
          <h3 className="text-2xl font-medium text-gray-800 dark:text-white">
            Email
          </h3>
          <p className="text-md py-2 md:py-0 leading-8 text-gray-800 dark:text-gray-200">
            contact.kknazmul@gmail.com
            {' '}
            <span className="font-thin">(Recommended)</span>
          </p>
        </div>
        <div className="flex justify-between items-center md:flex-col md:items-start">
          <h3 className="text-2xl font-medium text-gray-800 dark:text-white">
            Skype
          </h3>
          <p className="text-md py-2 md:py-0 leading-8 text-gray-800 dark:text-gray-200">
            0himu1
            {' '}
            <span className="font-thin">(Always Available)</span>
          </p>
        </div>
        <div className="flex justify-between items-center md:flex-col  md:items-start">
          <h3 className="text-2xl font-medium text-gray-800 dark:text-white">
            Instagram
          </h3>
          <p className="text-md py-2 md:py-0 leading-8 text-gray-800 dark:text-gray-200">
            @himu_nazmul
          </p>
        </div>
        <div className="flex justify-between items-start md:flex-col md:items-start">
          <h3 className="text-2xl font-medium text-gray-800 dark:text-white">
            Address
          </h3>
          <p className="text-md md:py-0 leading-8 text-gray-800 dark:text-gray-200">
            Board Bazar, Gazipur,
            <br className="md:hidden" />
            Bangladesh - 1704
          </p>
        </div>
      </div>
    </div>
  );
}
