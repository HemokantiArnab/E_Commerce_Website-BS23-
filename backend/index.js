import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';  // Import CORS

// Utils
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT || 6000;

connectDB();

const app = express();

// CORS Setup
const corsOptions = {
  origin: 'http://localhost:5173',  // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Allow cookies to be sent
};

app.use(cors(corsOptions));  // Apply the CORS middleware

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
