import express from 'express';
import {sendReservation , trackReservation} from '../controller/reservation.js';

const router = express.Router();

router.post('/send', sendReservation );
router.get('/track', trackReservation);

export default router;