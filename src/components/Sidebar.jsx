import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const weeks = Array.from({ length: 4 }, (_, i) => i);

  const getModuleCount = (weekNumber) => {
    switch(weekNumber) {
      case 0: return 6;
      case 1: return 3;
      case 2: return 2;
      case 3: return 1;
      default: return 0;
    }
  };

  return (
    <div className="w-72 bg-terminal-black h-screen fixed left-0 top-0 border-r border-cyber-blue/20">
      <div className="p-6">
        <h2 className="text-cyber-neon text-xl font-mono mb-8 glitch-text">
          <span className="text-xs block text-cyber-blue">{'>'} sys.init()</span>
          PYTHON_CYBER_SEC v1.0
        </h2>
        
        <div className="text-xs text-cyber-blue mb-4 font-mono">
          {'>'} select_module --list
        </div>
        
        <nav className="space-y-4">
          {weeks.map(week => (
            <div key={week} className="space-y-2">
              <h3 className="text-cyber-blue font-mono text-sm">
                Semaine {week}
              </h3>
              <div className="pl-4 space-y-1">
                {Array.from({ length: getModuleCount(week) }, (_, i) => (
                  <Link
                    key={`${week}-${i+1}`}
                    to={`/semaine/${week}/module/${i+1}`}
                    className={`block font-mono relative overflow-hidden ${
                      location.pathname === `/semaine/${week}/module/${i+1}`
                        ? 'text-cyber-neon bg-cyber-blue/10'
                        : 'text-gray-400 hover:text-cyber-blue'
                    } p-2 rounded-md transition-all border border-transparent hover:border-cyber-blue/30`}
                  >
                    <div className="flex items-center">
                      <span className="text-xs mr-2">[{(i+1).toString().padStart(2, '0')}]</span>
                      <span>Module_{i+1}</span>
                    </div>
                    {location.pathname === `/semaine/${week}/module/${i+1}` && (
                      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-cyber-neon animate-pulse"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-cyber-blue/20">
        <div className="text-xs text-cyber-blue font-mono">
          <div>STATUS: CONNECTED</div>
          <div>SECURE_CHANNEL: ACTIVE</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 