import express from 'express';
import remindersRouter from './routers/reminder';
const app = express();

app.use('/reminders', remindersRouter);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(8000, () => console.log('Server started++'));
