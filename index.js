import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/database.js';
import routes from './routes/index.js';

dotenv.config();
const app = express();
app.use(express.json());


app.use('/api/products', routes.productRouter);
app.use('/api/categories', routes.categoryRouter);

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});