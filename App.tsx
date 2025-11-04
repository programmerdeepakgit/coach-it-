
import React, { useState, useCallback } from 'react';
import { Course, Chapter, Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import ChapterListPage from './components/ChapterListPage';
import VideoPage from './components/VideoPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const handleSelectCourse = useCallback((course: Course) => {
    setSelectedCourse(course);
    navigateTo('chapterList');
  }, [navigateTo]);

  const handleSelectChapter = useCallback((chapter: Chapter) => {
    setSelectedChapter(chapter);
    navigateTo('video');
  }, [navigateTo]);
  
  const handleBackToCourses = useCallback(() => {
    setSelectedCourse(null);
    setSelectedChapter(null);
    navigateTo('courses');
  }, [navigateTo]);

  const handleBackToChapters = useCallback(() => {
    setSelectedChapter(null);
    navigateTo('chapterList');
  }, [navigateTo]);

  const renderContent = () => {
    switch (currentPage) {
      case 'courses':
        return <CoursesPage onSelectCourse={handleSelectCourse} />;
      case 'chapterList':
        if (selectedCourse) {
          return <ChapterListPage course={selectedCourse} onSelectChapter={handleSelectChapter} onBack={handleBackToCourses} />;
        }
        // Fallback to courses if no course is selected
        navigateTo('courses');
        return null;
      case 'video':
        if (selectedChapter) {
          return <VideoPage chapter={selectedChapter} onBack={handleBackToChapters} />;
        }
         // Fallback to chapter list if no chapter is selected
        navigateTo('chapterList');
        return null;
      case 'home':
      default:
        return <HomePage onNavigateToCourses={() => navigateTo('courses')} />;
    }
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col font-sans text-light">
      <Header onNavigate={navigateTo} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
