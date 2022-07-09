import express from 'express';
import { getTypesTourism, createTypeTourism } from '../controllers/type-tourism.js';

const router = express.Router();

router.get('/', getTypesTourism)

router.post('/', createTypeTourism)


export default router;