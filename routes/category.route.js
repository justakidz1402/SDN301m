import express from 'express';
import categoryController from '../controllers/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.post('/category', categoryController.create);
categoryRouter.get('/category', categoryController.getAll);

export default categoryRouter;