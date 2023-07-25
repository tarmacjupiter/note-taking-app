const NOTES_KEY = 'notes';

export const getNotes = () => {
  const notesString = localStorage.getItem(NOTES_KEY);
  return notesString ? JSON.parse(notesString) : [];
};

export const saveNotes = (notes) => {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};