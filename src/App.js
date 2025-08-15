import { useState } from 'react';
import './App.css';
import My from './assets/photo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-800 text-gray-100 min-h-screen">
      <header className="flex justify-between items-center py-6 px-4 sticky top-0 bg-gray-800 z-10">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <nav>
          <button
            className="md:hidden text-gray-200 hover:text-amber-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
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
          <ul
            className={`${
              isMenuOpen ? 'flex translate-x-0' : 'hidden translate-x-full'
            } flex-col gap-4 absolute top-16 right-0 bg-gray-800 w-64 p-6 transition-transform duration-300 md:flex md:flex-row md:static md:w-auto md:p-0 md:gap-6 md:bg-transparent md:translate-x-0`}
          >
            <li>
              <a
                href="#home"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                My Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-200 hover:text-amber-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Home Section */}
      <section id="home" className="mt-16 flex flex-col md:flex-row md:justify-between items-center px-4 gap-8">
        <div className="mt-8 md:mt-0">
          <img
            className="rounded-full border-2 border-amber-900/50 w-48 h-48 md:w-72 md:h-72 object-cover hover:scale-105 transition duration-300"
            src={My}
            alt="Kalkidan Kassahun"
          />
        </div>
        <div className="py-8 max-w-lg">
          <h2 className="text-2xl font-semibold">Hello, My name is Kalkidan Kassahun</h2>
          <h4 className="text-amber-400 pt-4 pb-4">Aspiring Data Scientist & Machine Learning Enthusiast</h4>
          <p className="text-gray-200">I'm learning to transform data into insights using Python, Pandas, and machine learning techniques.</p>
          <div className="flex gap-4 mt-6">
            <button className="bg-amber-900 hover:bg-amber-800 hover:scale-105 text-gray-100 px-6 py-3 rounded-2xl transition duration-300">
              Contact Me
            </button>
            <button className="bg-blue-900 hover:bg-blue-800 hover:scale-105 text-gray-100 px-6 py-3 rounded-2xl transition duration-300">
              Explore My Work
            </button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="bg-bronze-teal py-12 px-4 border-t-4 border-amber-900">
        <h2 className="text-2xl font-semibold text-gray-100">About Me</h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          I'm Kalkidan Kassahun, an aspiring data scientist and machine learning enthusiast currently building my skills through professional training. I'm mastering Python, Pandas, Scikit-learn, and data visualization tools to uncover insights from data. My curiosity for blockchain technology drives me to explore decentralized data applications. I'm passionate about solving real-world problems with data-driven solutions and eager to contribute to innovative projects.
        </p>
      </section>
      {/* My Works Section */}
      <section id="works" className="py-12 px-4 border-t-4 border-amber-900">
        <h2 className="text-2xl font-semibold text-gray-100">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-900/50 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-medium text-gray-100">Titanic Survival Analysis</h3>
            <p className="text-gray-200 mt-2">Analyzed the Titanic dataset using Pandas and Seaborn to identify survival patterns, visualized with bar and heatmap charts.</p>
            <a
              href="https://github.com/your-repo/titanic-analysis"
              className="text-amber-400 hover:text-amber-300 mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-amber-900/50 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-medium text-gray-100">House Price Prediction</h3>
            <p className="text-gray-200 mt-2">Built a linear regression model with Scikit-learn to predict house prices, achieving 85% accuracy on test data.</p>
            <a
              href="https://github.com/your-repo/house-price-model"
              className="text-amber-400 hover:text-amber-300 mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-bronze-teal py-12 px-4 border-t-4 border-amber-900">
        <h2 className="text-2xl font-semibold text-gray-100">Contact Me</h2>
        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">Reach out to discuss data science opportunities or collaborate on projects!</p>
        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            href="mailto:kalukassahun29@gmail.com"
            className="bg-amber-900 hover:bg-amber-800 hover:scale-105 text-gray-100 px-6 py-3 rounded-2xl transition duration-300"
          >
            Email Me
          </a>
          <a
            href="https://www.kaggle.com/soliana-k"
            className="text-gray-200 hover:text-amber-400 transition duration-300"
          >
            Kaggle
          </a>
          <a
            href="https://linkedin.com/in/kalkidan-kassahun"
            className="text-gray-200 hover:text-amber-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;