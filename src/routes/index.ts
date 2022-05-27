//router index file
import { Router } from 'express';
import ProfileRouter from './ProfileRouter';

const router = Router();

router.use('/api/profile', ProfileRouter);

export default router;