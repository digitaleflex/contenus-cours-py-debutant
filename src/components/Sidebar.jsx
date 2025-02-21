import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const weeks = Array.from({ length: 4 }, (_, i) => i);

  // Configuration des modules par semaine (maintenant 5 modules chacune)
  const getModuleCount = () => 5; // Toutes les semaines ont 5 modules

  return (
    <div className="w-72 bg-terminal-black h-screen fixed left-0 top-0 border-r border-cyber-blue/20 overflow-y-auto">
      <div className="p-6">
        {/* En-tête */}
        <div className="mb-8">
          <h2 className="text-cyber-neon text-xl font-mono glitch-text">
            <span className="text-xs block text-cyber-blue mb-1">{'>'} sys.init()</span>
            PYTHON_CYBER_SEC
          </h2>
          <div className="text-xs text-cyber-blue/70 mt-2 font-mono">
            Version 1.0.0_alpha
          </div>
        </div>
        
        {/* Status */}
        <div className="text-xs text-cyber-blue mb-6 font-mono p-2 border border-cyber-blue/20 rounded bg-cyber-blue/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse"></span>
            <span>SYSTÈME OPÉRATIONNEL</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          {weeks.map(week => (
            <div key={week} className="space-y-2">
              <h3 className="text-cyber-blue font-mono text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-cyber-blue rounded-full"></span>
                Semaine {week}
              </h3>
              <div className="pl-4 space-y-1 border-l border-cyber-blue/20">
                {Array.from({ length: getModuleCount() }, (_, i) => (
                  <Link
                    key={`${week}-${i+1}`}
                    to={`/semaine${week}/module${i+1}`}
                    className={`block font-mono relative overflow-hidden group ${
                      location.pathname === `/semaine${week}/module${i+1}`
                        ? 'text-cyber-neon bg-cyber-blue/10'
                        : 'text-gray-400 hover:text-cyber-blue'
                    } p-2 rounded-md transition-all`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs opacity-50">[{(i+1).toString().padStart(2, '0')}]</span>
                      <span>Module_{i+1}</span>
                    </div>
                    {location.pathname === `/semaine${week}/module${i+1}` && (
                      <>
                        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyber-neon animate-pulse"></div>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-cyber-neon">
                          {'>>'}
                        </div>
                      </>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-cyber-blue/20 bg-terminal-black/90 backdrop-blur">
        <div className="text-xs text-cyber-blue/70 font-mono space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyber-neon rounded-full animate-pulse"></span>
            <span>CONNEXION ACTIVE</span>
          </div>
          <div className="text-[10px] opacity-50">
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 