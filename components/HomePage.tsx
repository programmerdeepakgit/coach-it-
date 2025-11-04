import React from 'react';

interface HomePageProps {
  onNavigateToCourses: () => void;
}

// Fix: Replaced JSX.Element with React.ReactNode to resolve issue where JSX namespace was not found.
const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-secondary p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary mb-4 border border-accent">
            {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-light">{title}</h3>
        <p className="text-medium">{description}</p>
    </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; course: string }> = ({ quote, author, course }) => (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
        <p className="text-light italic">"{quote}"</p>
        <p className="text-right mt-4 font-semibold text-accent">- {author}, <span className="text-medium">{course}</span></p>
    </div>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigateToCourses }) => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-light mb-4">
          Unlock Your Potential with <span className="text-accent">Coach It!</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-medium mb-8">
          Master complex subjects with our expert-led one-shot video lectures. Your journey to academic excellence starts here.
        </p>
        <button
          onClick={onNavigateToCourses}
          className="bg-accent text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-accent/20"
        >
          Explore Courses
        </button>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
                title="Expert Tutors"
                description="Learn from the best educators in the field, with proven track records of success."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            />
            <FeatureCard 
                title="One-Shot Lectures"
                description="Comprehensive, single-session videos designed to cover entire chapters efficiently."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <FeatureCard 
                title="Personalized Notes"
                description="Take and save digital notes directly alongside your video lectures for effective revision."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
            />
        </div>
      </section>

       {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-light mb-12">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
                quote="The one-shot physics lectures were a game-changer for my exam preparation. Complex topics became so much clearer!"
                author="Aarav Sharma"
                course="Class 12 Physics"
            />
            <TestimonialCard 
                quote="Being able to save my notes with each video is an amazing feature. It made my revision process so organized and efficient."
                author="Priya Singh"
                course="Class 11 Chemistry"
            />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
