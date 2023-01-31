import React from 'react';
import PortfolioCard from './components/PortfolioCard';

export default function Portfolio() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white font-bold">Portfolio</h3>
      </div>
      <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
        <PortfolioCard
          title="Tic-Tac-Toe"
          text="simple tic tac toe game made by React js"
          repo="#"
          link="#"
          tag={['Javascript', 'react']}
        />
        <PortfolioCard
          title="Tic-Tac-Toe"
          text="simple tic tac toe game made by React js"
          repo="#"
          link="#"
          tag={['Javascript', 'react']}
        />
        <PortfolioCard
          title="Tic-Tac-Toe"
          text="simple tic tac toe game made by React js"
          repo="#"
          link="#"
          tag={['Javascript', 'react']}
        />
        <PortfolioCard
          title="Tic-Tac-Toe"
          text="simple tic tac toe game made by React js"
          repo="#"
          link="#"
          tag={['Javascript', 'react']}
        />
      </div>
    </section>
  );
}
