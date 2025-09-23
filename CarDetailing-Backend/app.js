import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import customersRoutes from './routes/customersRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/services', servicesRoutes);

export default app;
