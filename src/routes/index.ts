//router index file
import { Router } from 'express';
import { ModifyController, QueryController } from '../controllers';

const router = Router();
router.post('/api/profile', ModifyController.openLetterController);
router.get('/api/profile', QueryController.queryController);


export default router;