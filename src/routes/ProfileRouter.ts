import {Router} from "express";
import ProfileController from "../controllers/profile/ProfileController";
import { body } from "express-validator";

const router: Router = Router();

router.get('/:userId',ProfileController.findProfileById);
router.post('/:userId',ProfileController.updateProfile);

export default router;