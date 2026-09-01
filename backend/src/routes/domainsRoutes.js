import express from 'express';
import {
  getAllDomains,
  getDomainById,
  createDomain
} from '../controllers/domainsController.js';

const router = express.Router();

router.get('/', getAllDomains);
router.post('/', createDomain);
router.get('/:id', getDomainById);

export default router;
