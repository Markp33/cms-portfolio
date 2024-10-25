import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [pages, setPages] = useState({});
  const slugs = ['home', 'footer', 'annex', 'game', 'aboutme', 'im', 'ive'];

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get("https://u230076.gluwebsite.nl/wp-json/wp/v2/pages?per_page=100");
        const allPages = response.data;

        const pagesObject = slugs.reduce((acc, slug) => {
          const page = allPages.find(p => p.slug && p.slug.toLowerCase() === slug.toLowerCase());
          acc[slug] = page || null;
          return acc;
        }, {});

        setPages(pagesObject);
      } catch (error) {
        console.error("Error fetching pages:", error);
        setPages({ error: "Failed to load pages. Please try again later." });
      }
    };

    fetchPages();
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        const offsetPosition = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="relative font-mono z-10">
      <img src="../img/sakura.png" alt="sakura tree" className="absolute top-0 left-0 w-[26rem] h-[16rem] object-cover rounded-lg z-10" />
      <div className="sticky top-4 left-1/2 -translate-x-1/2 bg-gray-200 z-[9999] py-4 rounded-3xl border-double border-2 border-gray-500 w-96">

        <div className="flex justify-center space-x-6 text-gray-700">
          <a href="#home" className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Home</a>
          <a href="#projects" className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Projects</a>
          <a href="#about" className="hover:text-gray-300 transition duration-300 transform hover:scale-105">About</a>
          <a href="#stack" className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Mystack</a>
          <a href="#contact" className="hover:text-gray-300 transition duration-300 transform hover:scale-105">Contact</a>
        </div>
      </div>

      <div id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="relative max-w-4xl w-full bg-gray-200 p-8 rounded-lg shadow-lg z-20">
          {pages.home ? (
            <div className="md:flex items-start mb-8">
              <div className="flex-shrink-0">
                <img
                  src="../img/logo.png"
                  alt="Icon"
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="ml-6">
                <h1 className="text-3xl text-gray-800">{pages.home.title.rendered}</h1>
                <div
                  className="text-xl text-gray-600 mt-2 z-10"
                  dangerouslySetInnerHTML={{ __html: pages.home.excerpt.rendered }}
                ></div>
                <div className="mt-6 space-x-4 text-gray-500">
                  <a href="https://www.instagram.com/markpetrrnk/" className="hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading Home Page...</p>
          )}

          <div className="absolute right-0 bottom-0 mr-0">
            <img
              src="../img/katana.png"
              alt="katana"
              className="w-full transition-transform duration-300 z-10 opacity-50"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(35px, -40px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(0, 0)')}
            />
          </div>
        </div>
      </div>

      <div id="projects" className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-lg text-gray-600 uppercase">My Craft</h2>
          <h1 className="text-5xl text-gray-900">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {['annex', 'game'].map((slug) => (
            pages[slug] ? (
              <div key={slug} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-100 z-10">
                <div className="relative">
                  <img
                    src={`../img/${slug}.png`}
                    alt={slug.charAt(0).toUpperCase() + slug.slice(1)}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl text-gray-800">{pages[slug].title.rendered}</h2>
                  <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: pages[slug].excerpt.rendered }} />
                  <div className="mt-4 flex items-center space-x-3">
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                      View Project
                    </button>
                    <button className="border border-gray-300 px-4 py-2 rounded-lg hover:border-gray-500">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p key={slug}>Loading {slug.charAt(0).toUpperCase() + slug.slice(1)} Page...</p>
            )
          ))}
        </div>
      </div>

      <div id="about" className="w-full bg-white">
        <div className="flex flex-col md:flex-row bg-white p-8 rounded-md max-w-5xl mx-auto z-[1]">
          <div className="md:w-1/2 flex flex-wrap justify-center">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="w-1/2 p-2">
                <div className="bg-gray-200 h-64 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-125">
                  <img
                    src={`../img/me${index}.jpg`}  
                    alt={`img ${index}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 md:pl-8 font-mono bg-gray-100 gap-5">
            <h1 className="text-5xl text-gray-900">Petrenko <span className="text-gray-400">Mark</span></h1>
            <p className="text-gray-500 mt-1">/ pe·tr·ɛnkə /</p>
            <p className="text-l mt-2 text-gray-500">Петренко is a Ukrainian last name, but I originate from Russia.</p>

            {['aboutme', 'ive', 'im'].map((slug) => (
              pages[slug] ? (
                <div key={slug}>
                  <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: pages[slug].excerpt.rendered }}></p>
                </div>
              ) : (
                <p key={slug}>Loading {slug.charAt(0).toUpperCase() + slug.slice(1)} Page...</p>
              )
            ))}
          </div>
        </div>
      </div>
      <div  className="min-h-screen bg-gray-200 mt-4">
        <h1 className="text-3xl font-mono text-center my-10">SKILLS</h1>

        <div className="text-center">
          <h2  id="stack" className="text-xl mb-4">Front-end</h2>
          <div className="flex justify-center space-x-4">
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/js.png" alt="JavaScript" className="w-16 h-16 mx-auto" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/CSS3.png" alt="css" className="w-16 h-16 mx-auto" />
              <p className="mt-2">CSS3</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/HTML5.png" alt="html" className="w-16 h-16 mx-auto" />
              <p className="mt-2">HTML5</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/react.png" alt="React" className="w-16 h-16 mx-auto" />
              <p className="mt-2">React</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/tailwind.png" alt="tailwind" className="w-16 h-16 mx-auto" />
              <p className="mt-2">Tailwind</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-xl mb-4">Back-end</h2>
          <div className="flex justify-center space-x-4">
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/node.png" alt="Node" className="w-16 h-16 mx-auto" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/php.png" alt="php" className="w-16 h-16 mx-auto" />
              <p className="mt-2">PHP</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/svelte.png" alt="svelte" className="w-16 h-16 mx-auto" />
              <p className="mt-2">Svelte</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-xl mb-4">Other</h2>
          <div className="flex justify-center space-x-4">
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/github.jpg" alt="Git" className="w-16 h-16 mx-auto" />
              <p className="mt-2">GitHub</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/sql.png" alt="Mysql" className="w-16 h-16 mx-auto" />
              <p className="mt-2">MySql</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/figma.png" alt="Figma" className="w-16 h-16 mx-auto" />
              <p className="mt-2">Figma</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-md transform hover:scale-105 hover:bg-gray-300 transition duration-300">
              <img src="../img/mongobd.png" alt="mongo" className="w-16 h-16 mx-auto" />
              <p className="mt-2">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      {pages.footer ? (
        <div  className="min-h-screen flex justify-center px-6 bg-gray-100">
          <div className="p-6 pt-[20rem]">
            <h2 className="text-lg text-gray-600 uppercase">Reach Out and Get in Touch</h2>
            <h1 className="text-5xl text-gray-900" dangerouslySetInnerHTML={{ __html: pages.footer.excerpt.rendered }}></h1>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">X</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Portfolio</a>
              <a href="#" className="text-blue-500 hover:text-blue-700">Discord</a>
              <a href="#" id="contact"className="text-blue-500 hover:text-blue-700">Instagram</a>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading Footer...</p>
      )}
    </div>
  );
}
