import express from 'express';
import {
  getAllJobs,
  getJobById,
  createJob,
  getAllInternships,
  createInternship
} from '../controllers/jobsController.js';

const router = express.Router();

router.get('/', getAllJobs);
router.post('/', createJob);
router.get('/internships', getAllInternships);
router.post('/internships', createInternship);
router.get('/:id', getJobById);

export default router;
