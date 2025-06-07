import createHttpError from 'http-errors';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNotesById,
  updateNote,
} from '../services/notes.js';

export const getAllNotesController = async (req, res) => {
  const notes = await getAllNotes();

  res.status(200).json({ data: notes });
};

export const getNotesByIdController = async (req, res, next) => {
  const { noteId } = req.params;

  const notes = await getNotesById(noteId);

  if (!notes) {
    throw createHttpError(404, 'Notes not found!');
  }

  res.status(200).json({ data: notes });
};

export const createNoteController = async (req, res) => {
  const note = await createNote(req.body);

  res
    .status(201)
    .json({ status: 201, message: 'Successfully created a note!', data: note });
};

export const updateNoteController = async (req, res) => {
  const { noteId } = req.params;
  const note = await updateNote(noteId, req.body);

  if (!note) {
    throw createHttpError(404, 'Note not found!');
  }

  res
    .status(200)
    .json({ status: 200, message: 'Successfully updated a note!', data: note });
};

export const deleteNoteController = async (req, res) => {
  const { noteId } = req.params;

  const note = await deleteNote(noteId);

  if (!note) {
    throw createHttpError(404, 'Note not found!');
  }

  res.status(204).send();
};
