
import './App.css';
import { useState } from 'react';
import My from './assets/photo.png';



      function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-gray-100">
      <header className="flex justify-between items-center py-6 px-4">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <nav>
          {/* Hamburger Icon (visible on mobile, hidden on md and up) */}
          <button
            className="md:hidden text-gray-200 hover:text-amber-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Nav Links */}
          <ul
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col gap-4 absolute top-16 right-0 bg-gray-800 w-48 p-4 md:flex md:flex-row md:static md:w-auto md:p-0 md:gap-6 md:bg-transparent`}
          >
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                My Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        </header>
      <div className='mt-20 flex flex-col md:flex-row md:justify-between items-center px-4 gap-8'>
         <div className="mt-8 md:mt-0">
          <img
            className="rounded-full border-2 border-amber-900/50 w-60 h-60 md:w-72 md:h-72 object-cover hover:scale-105 transition duration-300"
            src={My}
            alt="Kalkidan Kassahun"
          />
        </div>
        <div className='py-5 max-w-lg'>
        <h2 className='text-2xl font-semibold'>Hello, My name is Kalkidan Kassahun</h2>
        <h4 className='text-amber-400 py-5'>Flutter Developer, Machine learning Engineer, UI/UX Designer</h4>
        <div className='flex gap-x-4'>
              <button className='bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-2xl hover:scale-105 transition duration-300 '>contact me</button>
              <button className='bg-teal-800 text-gray-100 hover:bg-teal-700 rounded-2xl px-6 py-3 hover:scale-105 transition duration-300'>Explore more</button>
              </div>
        </div>
        {/* <div className=''>
        <img className='w-60 h-60 md:w-72 md:h-72 rounded-full border-2 border-amber-900/50 object-cover hover:scale-105 transition duration-300' src={My} alt='me'/>
        </div> */}
      </div>

    </div>
  
);
}

export default App;
