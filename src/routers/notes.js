import { Router } from 'express';
import {
  createNoteController,
  deleteNoteController,
  getAllNotesController,
  getNotesByIdController,
  updateNoteController,
} from '../controllers/notes.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/notes', ctrlWrapper(getAllNotesController));

router.get('/notes/:noteId', ctrlWrapper(getNotesByIdController));

router.post('/notes', ctrlWrapper(createNoteController));

router.put('/notes/:noteId', ctrlWrapper(updateNoteController));

router.delete('/notes/:noteId', ctrlWrapper(deleteNoteController));

export default router;
