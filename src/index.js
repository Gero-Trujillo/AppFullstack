import app from './app.js';
import { connectDb } from './db.js';

connectDb();
app.listen(3000);
console.log('working', 3000);