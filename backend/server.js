import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { requestLogger } from './src/middleware/logger.js';
import { errorHandler, notFoundHandler } from './src/middleware/errorHandler.js';

// Route imports
import authRoutes from './src/routes/authRoutes.js';
import jobsRoutes from './src/routes/jobsRoutes.js';
import applicationsRoutes from './src/routes/applicationsRoutes.js';
import candidatesRoutes from './src/routes/candidatesRoutes.js';
import domainsRoutes from './src/routes/domainsRoutes.js';
import skillsRoutes from './src/routes/skillsRoutes.js';
import resourcesRoutes from './src/routes/resourcesRoutes.js';
import assessmentsRoutes from './src/routes/assessmentsRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';

// Global Middleware
app.use(cors({
  origin: [CORS_ORIGIN, 'http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'KaushalEra REST API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/candidates', candidatesRoutes);
app.use('/api/domains', domainsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/resources', resourcesRoutes);
app.use('/api/assessments', assessmentsRoutes);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`  🚀 KaushalEra Backend Server is Running!`);
  console.log(`  📡 Port: http://localhost:${PORT}`);
  console.log(`  🩺 Health: http://localhost:${PORT}/api/health`);
  console.log(`  🌐 CORS Origin: ${CORS_ORIGIN}`);
  console.log(`===================================================`);
});

export default app;
