
export const saveNote = (chapterId: string, content: string): void => {
  try {
    localStorage.setItem(`note_${chapterId}`, content);
  } catch (error) {
    console.error("Failed to save note to localStorage", error);
  }
};

export const getNote = (chapterId: string): string => {
  try {
    return localStorage.getItem(`note_${chapterId}`) || '';
  } catch (error) {
    console.error("Failed to retrieve note from localStorage", error);
    return '';
  }
};
