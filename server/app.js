import express from "express"
import cors from "cors"
import errorHandler from './middlewares/errorHandler.js';
const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Truesofts workspace");
})

// Routes imports
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import workspaceRoutes from './routes/workspaceRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import timeTrackingRoutes from './routes/timeTrackingRoutes.js';
import chatRoutes from './routes/chatRoutes.js';


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workspaces', workspaceRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/timetracking', timeTrackingRoutes);
app.use('/api/chat', chatRoutes);

app.use(errorHandler);

export default app;
