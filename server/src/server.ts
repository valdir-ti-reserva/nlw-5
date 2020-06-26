import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const port = 3333;
const app  = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Servindo arquivos estáticos da aplicação
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port);
