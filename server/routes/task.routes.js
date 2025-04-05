import express from 'express';
import { Router } from 'express';
import { taskAdd, taskFetch } from '../controllers/task.controller.js';

const router = Router();

router.get('/task-get', taskFetch)

router.post('/task-add', taskAdd)

export default router;