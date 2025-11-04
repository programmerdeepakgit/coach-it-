import React, { useState, useEffect, useRef } from 'react';
import { Chapter } from '../types';
import { getNote, saveNote } from '../services/notesService';

interface VideoPageProps {
  chapter: Chapter;
  onBack: () => void;
}

const VideoPage: React.FC<VideoPageProps> = ({ chapter, onBack }) => {
  const [note, setNote] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    const loadedNote = getNote(chapter.id);
    setNote(loadedNote);
  }, [chapter.id]);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    setNote(newNote);
    setIsSaving(true);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      saveNote(chapter.id, newNote);
      setIsSaving(false);
    }, 1000);
  };
  
  useEffect(() => {
    return () => {
        if(debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
    }
  }, []);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
       <button onClick={onBack} className="flex items-center text-accent hover:text-light transition-colors mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Chapters
        </button>

      <div className="aspect-w-16 aspect-h-9 mb-6 bg-black rounded-lg shadow-2xl overflow-hidden">
        {chapter.videoId === 'placeholder_video_id' ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-medium text-lg">Video coming soon!</p>
          </div>
        ) : (
          <video
            src={chapter.videoId}
            controls
            className="w-full h-full"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-light">{chapter.title}</h2>
        <p className="text-medium">
          {chapter.course.subject} - Class {chapter.course.class}
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-accent">My Notes</h3>
            <span className={`text-sm transition-opacity duration-300 ${isSaving ? 'opacity-100' : 'opacity-0'} text-medium`}>
              Saving...
            </span>
        </div>
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Start typing your notes here... They will be saved automatically."
          className="w-full h-64 p-4 bg-secondary text-light border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default VideoPage;
