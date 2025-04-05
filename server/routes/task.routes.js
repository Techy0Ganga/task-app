import express from 'express';
import { Router } from 'express';
import { taskAdd } from '../controllers/task.controller.js';

const router = Router();

router.get('/task-get', (req, res) => {

})

router.post('/task-add', taskAdd)

export default router;