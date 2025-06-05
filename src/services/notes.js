import { NotesCollection } from '../db/models/notes.js';

export const getAllNotes = async () => {
  const notes = await NotesCollection.find();
  return notes;
};

export const getNotesById = async (noteId) => {
  const note = await NotesCollection.findById(noteId);
  return note;
};
