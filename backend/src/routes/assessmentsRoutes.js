import express from 'express';
import {
  getAllAssessments,
  getAssessmentById,
  submitAssessment
} from '../controllers/assessmentsController.js';

const router = express.Router();

router.get('/', getAllAssessments);
router.get('/:id', getAssessmentById);
router.post('/:id/submit', submitAssessment);

export default router;
