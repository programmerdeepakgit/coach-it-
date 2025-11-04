
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <h1 className="text-3xl font-bold text-accent">Coach It!</h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-medium hover:text-accent transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('courses')} 
                  className="text-medium hover:text-accent transition-colors duration-300"
                >
                  Courses
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
