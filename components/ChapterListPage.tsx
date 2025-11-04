import React, { useState } from 'react';
import { Course, Chapter } from '../types';
import { CHAPTERS } from '../constants';

interface ChapterListPageProps {
  course: Course;
  onSelectChapter: (chapter: Chapter) => void;
  onBack: () => void;
}

const ChapterListPage: React.FC<ChapterListPageProps> = ({ course, onSelectChapter, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = CHAPTERS.filter(
    (chapter) =>
      chapter.course.subject === course.subject &&
      chapter.course.class === course.class &&
      chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="text-accent hover:text-light transition-colors mr-4 p-2 rounded-full hover:bg-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-light">
            {course.subject} - Class {course.class}
          </h2>
          <p className="text-medium">Select a chapter to start learning.</p>
        </div>
      </div>

      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Search for a chapter..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-secondary border-2 border-gray-700 rounded-md py-3 pl-10 pr-4 text-light focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
        />
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-medium" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {filteredChapters.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredChapters.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => onSelectChapter(chapter)}
              className="bg-secondary rounded-lg shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative">
                <img src={chapter.imageUrl} alt={chapter.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-25 transition-all duration-300 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center p-4">{chapter.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-medium text-sm">
                  {chapter.title} - Class {chapter.course.class} - One Shot
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <h3 className="text-xl text-light font-semibold">No Chapters Found</h3>
            <p className="text-medium mt-2">Try adjusting your search term.</p>
        </div>
      )}
    </div>
  );
};

export default ChapterListPage;
