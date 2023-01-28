import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav>
        <h1>Himu</h1>
        <ul>
          <li>
            {' '}
            <BsFillMoonStarsFill />
            {' '}
          </li>
          <li><a href="#">Resume</a></li>
        </ul>
      </nav>
    </main>
  );
}
