import express from 'express';
import morgan from "morgan";
import cors from "cors";
import tips from './routes/index';


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/api', tips);



export default app;