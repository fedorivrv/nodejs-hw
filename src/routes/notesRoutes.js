import { Router } from 'express';
import {
  getФддNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/studentsController.js';

const router = Router();

router.get('/notes', getФддNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
