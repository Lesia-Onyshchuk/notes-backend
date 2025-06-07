import { NotesCollection } from '../db/models/notes.js';

export const getAllNotes = async () => {
  const notes = await NotesCollection.find();
  return notes;
};

export const getNotesById = async (noteId) => {
  const note = await NotesCollection.findById(noteId);
  return note;
};

export const createNote = async (payload) => {
  const note = await NotesCollection.create(payload);
  return note;
};

export const updateNote = async (noteId, payload) => {
  const note = await NotesCollection.findOneAndUpdate({ _id: noteId }, payload);
  return note;
};

export const deleteNote = async (noteId) => {
  const note = await NotesCollection.findOneAndDelete({ _id: noteId });
  return note;
};
