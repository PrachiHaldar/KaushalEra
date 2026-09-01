import express from 'express';
import {
  getAllApplications,
  createApplication,
  updateApplicationStage
} from '../controllers/applicationsController.js';

const router = express.Router();

router.get('/', getAllApplications);
router.post('/', createApplication);
router.patch('/:id/stage', updateApplicationStage);

export default router;
