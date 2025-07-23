import express from 'express';
import { getAllFeedback, showForm, submitFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.get('/', getAllFeedback);
router.get('/submit', showForm);
router.post('/submit', submitFeedback);

export default router;
