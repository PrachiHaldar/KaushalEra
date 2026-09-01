import express from 'express';
import {
  getAllSkills,
  createSkill
} from '../controllers/skillsController.js';

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', createSkill);

export default router;
