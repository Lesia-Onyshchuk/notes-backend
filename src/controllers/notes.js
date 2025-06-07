import { getAllNotes, getNotesById } from '../services/notes.js';

export const getAllNotesController = async (req, res) => {
  const notes = await getAllNotes();

  res.status(200).json({ data: notes });
};

export const getNotesByIdController = async (req, res, next) => {
  const { noteId } = req.params;

  const notes = await getNotesById(noteId);

  if (!notes) {
    next(new Error('Notes not found!'));
    return;
  }

  res.status(200).json({ data: notes });
};
