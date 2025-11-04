
export type SubjectName = 'Physics' | 'Chemistry' | 'Maths';

export type Page = 'home' | 'courses' | 'chapterList' | 'video';

export interface Course {
  subject: SubjectName;
  class: 11 | 12;
}

export interface Chapter {
  id: string;
  title: string;
  course: Course;
  imageUrl: string;
  videoId: string; 
}
