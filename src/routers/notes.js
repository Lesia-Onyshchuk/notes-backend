import { Router } from 'express';
import {
  getAllNotesController,
  getNotesByIdController,
} from '../controllers/notes.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/notes', ctrlWrapper(getAllNotesController));

router.get('/notes/:noteId', ctrlWrapper(getNotesByIdController));

export default router;
