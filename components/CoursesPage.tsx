
import React from 'react';
import { Course } from '../types';
import { SUBJECTS } from '../constants';

interface CoursesPageProps {
  onSelectCourse: (course: Course) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onSelectCourse }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-light mb-4">Our Courses</h2>
      <p className="text-lg text-medium text-center max-w-2xl mx-auto mb-12">
        Choose your subject and class to begin your learning journey. Each course is structured to provide a complete understanding in a single, focused session.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUBJECTS.map((subject) => (
          <div key={subject.name} className="bg-secondary rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-accent mb-2">{subject.name}</h3>
              <p className="text-medium">{subject.description}</p>
            </div>
            <div className="p-6 bg-primary mt-auto">
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => onSelectCourse({ subject: subject.name, class: 11 })}
                  className="bg-accent/10 text-accent font-semibold py-2 px-4 rounded-md border border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
                >
                  Class 11
                </button>
                <button 
                  onClick={() => onSelectCourse({ subject: subject.name, class: 12 })}
                  className="bg-accent/10 text-accent font-semibold py-2 px-4 rounded-md border border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
                >
                  Class 12
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
