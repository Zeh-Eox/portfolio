import { useState, useEffect } from 'react';
import Header from "./header/Header";
import Contact from "./Contact";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Arnold CONVOLBO";
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Animation d'écriture du nom
  useEffect(() => {
    if (text.length < fullName.length) {
      const timeout = setTimeout(() => {
        setText(fullName.slice(0, text.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [text]);
  
  // Animation du curseur clignotant
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  // Simulation du chargement de l'image
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsImageLoaded(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      {/* Lignes de grille subtiles */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]"></div>
      
      <Header />
      
      <main className="container mx-auto px-6 py-20 pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Section texte à gauche */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="mb-4">
              <span className="px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium tracking-wider">
                Développeur Full Stack
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 h-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {text}
              </span>
              <span className={`inline-block w-2 h-8 ml-1 bg-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Je transforme des idées en applications web modernes et élégantes. 
              Passionné par les technologies front-end et back-end, je crée des 
              expériences numériques qui font la différence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv.pdf" 
                download 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Télécharger CV
              </a>
              
              <a 
                href="https://github.com/Zeh-Eox" 
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium border border-gray-700 transform hover:translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-400 mb-3 font-medium">Technologies préférées</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'MySQL/SQLite', 'Docker'].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-800/70 text-gray-300 rounded-md text-sm border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Section image à droite */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className={`relative z-10 w-64 md:w-80 aspect-square rounded-full border-4 border-blue-500/30 p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm shadow-xl transition-all duration-1000 transform ${isImageLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <div className="w-full h-full overflow-hidden rounded-full relative">
                <img 
                  src="/api/placeholder/500/500"  
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                
                {/* Cercle décoratif animé */}
                <div className="absolute -top-1 -right-1 -bottom-1 -left-1 border-4 border-dashed border-blue-400/40 rounded-full animate-spin-slow"></div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute top-1/4 -right-4 w-16 h-16 bg-blue-600/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg animate-float">
              <span className="text-white font-bold text-2xl">TS</span>
            </div>
            
            <div className="absolute bottom-10 -left-6 w-20 h-20 bg-purple-600/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg animate-float-delay">
              <span className="text-white font-bold text-2xl">React</span>
            </div>
            
            <div className="absolute top-10 left-10 w-18 h-14 bg-blue-600/80 backdrop-blur-md rounded-md rotate-12 flex items-center justify-center shadow-lg animate-float-delay-2">
              <span className="text-white font-bold text-xl">Docker</span>
            </div>
          </div>
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default Hero;