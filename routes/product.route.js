import express from 'express';
import controllers from '../controllers/index.js';

const productRouter = express.Router();
productRouter.post('/', controllers.productController.create);
productRouter.get('/', controllers.productController.getAll);
productRouter.get('/:id', controllers.productController.getDetail);
productRouter.post('/comments/:id', controllers.productController.addComment);
productRouter.get('/comments/:id', controllers.productController.getAllComment);

export default productRouter;