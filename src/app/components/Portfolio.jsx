import React from 'react';
import PortfolioCard from './PortfolioCard';
import data from '../../pages/api/deta';

export default function Portfolio() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white font-bold">Portfolio</h3>
      </div>
      <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap w-full">
        {data.map(({
          image, title, text, repo, link, tag,
        }) => (
          <PortfolioCard
            image={image}
            title={title}
            text={text}
            repo={repo}
            link={link}
            tag={tag}
          />
        ))}
      </div>
    </section>
  );
}
