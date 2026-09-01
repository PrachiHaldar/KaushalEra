import express from 'express';
import {
  getAllCandidates,
  updateCandidateStatus
} from '../controllers/candidatesController.js';

const router = express.Router();

router.get('/', getAllCandidates);
router.patch('/:id/status', updateCandidateStatus);

export default router;
