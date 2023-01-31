import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export default function PortfolioCard({
  image, title, text, repo, link, tag,
}) {
  return (
    <div className="basis-1/3 flex-1 p-5 h-96 w-80 shadow-lg rounded-xl text-gray-800 dark:bg-gray-700 dark:text-white lg:basis-1/4">
      <Image src={image} width="100%" height="100%" objectFit="cover" />
      <div className="flex flex-col justify-between">
        <h3 className="text-3xl font-bold mb-3">{title}</h3>
        <p className="text-xl font-medium mb-4">{text}</p>
        <div className="flex text-3xl mb-4">
          <a href={repo} className="mr-2">
            <AiFillGithub />
          </a>
          <a href={link}>
            <FiExternalLink />
          </a>
        </div>
        <div className="flex text-md">
          {tag.map((t) => (
            <li className="list-none mr-2">{t}</li>
          ))}
        </div>
      </div>
    </div>
  );
}